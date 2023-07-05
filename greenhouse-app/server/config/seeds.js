const db = require('./connection');
const { User, Product, Category } = require('../models');
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
      shippingAddress: {
        address: "1 Park Ave",
        city: "New York",
        state: "New York",
        zip: "10028",
      },
      billingAddress: {
        address: "1 Park Ave",
        city: "New York",
        state: "New York",
        zip: "10028",
      },
      socialTitle: "Mr.",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
      birthdate: new Date("1990-01-01"),
      shippingAddress: {
        address: "123 Shipping Street",
        city: "Shipping City",
        state: "Shipping State",
        zip: "12345",
      },
      billingAddress: {
        address: "456 Billing Street",
        city: "Billing City",
        state: "Billing State",
        zip: "54321",
      },
    },
    {
      socialTitle: "Mrs.",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      password: "password456",
      birthdate: new Date("1985-05-10"),
      shippingAddress: {
        address: "789 Shipping Street",
        city: "Shipping City",
        state: "Shipping State",
        zip: "67890",
      },
      billingAddress: {
        address: "987 Billing Street",
        city: "Billing City",
        state: "Billing State",
        zip: "09876",
      },
    },
  ]);

  console.log("Users seeded");

  process.exit();
});
