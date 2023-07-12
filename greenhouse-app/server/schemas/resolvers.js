const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    getAllProducts: async () => {
      return Product.find();
    },
    getProductById: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    getAllOrders: async () => {
      return Order.find();
    },
    getOrderById: async (parent, { _id }) => {
      return await Order.findById(_id);
    },
    getProductsByCategory: async (parent, { category }) => {
      try {
        const products = await Product.find({ category: category });
        return products;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch products by category");
      }
    },
    getUserById: async (parent, args, context) => {
      try {
        if (context.user) {
          const user = await User.findById(context.user._id).populate(
            "products"
          );
          return user;
        }
        throw new AuthenticationError("Not logged in");
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
      }
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addProduct: async (_, args, context) => {
      try {
        const {
          productName,
          description,
          image,
          price,
          quantity,
          plantStatus,
          category,
        } = args;

        // Create the product
        const product = await Product.create({
          productName,
          description,
          image,
          price,
          quantity,
          plantStatus,
          category,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { products: product._id },
        });

        return product;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to create product");
      }
    },

    // Add ORDER CHANGE FROM THIS
    addOrder: async (_, args, context) => {
      try {
        const { purchaseDate, status, total, } = args;

        // Create the order
        const order = await Order.create({
          purchaseDate,
          status,
          total,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order._id },
        });

        return order;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to create order");
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;