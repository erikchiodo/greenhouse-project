const db = require('./connection');
const { User, Product, Category, Post } = require('../models');
const { fetchPlantsList } = require("../utils/fetchPlants.js");


db.once('open', async () => {
  //TODO: Create Categories that seed to Categories Schema (will come from fetchPlantsList)

  await Category.deleteMany();

  // const categories = await Category.insertMany([
  //   { name: 'Food' },
  //   { name: 'Household Supplies' },
  //   { name: 'Electronics' },
  //   { name: 'Books' },
  //   { name: 'Toys' }
  // ]);

  console.log("Categories seeded");

  // Seeding for Product Model
  await Product.deleteMany();

  // TODO: Create Products (Plants) that seed to Products Model
  const products = await Product.insertMany([]);

  console.log("Products seeded");

  // Seeding for Users Model
  await User.deleteMany();

  await User.insertMany([
    {
      socialTitle: "Mrs.",
      firstName: "Hannah",
      lastName: "Lewis",
      email: "Hannah@testemail.com",
      password: "password12345",
      birthdate: new Date("05/06/1994"),
      shippingAddress: '1 Park Ave',
      shippingCity: "New York",
      shippingState: "New York",
      shippingZip: "10028",
      billingAddress: "1 Park Ave",
      billingCity: "New York",
      billingState: "New York",
      billingZip: "10028",
    },
    {
      socialTitle: "Mr.",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
      birthdate: new Date("1990-01-01"),
      shippingAddress: "123 Shipping Street",
      shippingCity: "Shipping City",
      shippingState: "Shipping State",
      shippingZip: "12345",
      billingAddress: "456 Billing Street",
      billingCity: "Billing City",
      billingState: "Billing State",
      billingZip: "54321",
    },
    {
      socialTitle: "Mrs.",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      password: "password456",
      birthdate: new Date("1985-05-10"),
      shippingAddress: "789 Shipping Street",
      shippingCity: "Shipping City",
      shippingState: "Shipping State",
      shippingZip: "67890",
      billingAddress: "987 Billing Street",
      billingCity: "Billing City",
      billingState: "Billing State",
      billingZip: "09876",
    },
  ]);

  console.log("Users seeded");

  process.exit();
});
