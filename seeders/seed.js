const fs = require("fs");
const Contact = require("../models/contact");

async function seedData() {
  try {
    const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
    const contacts = await Contact.insertMany(data);
    return contacts;
  } catch (err) {
    return err;
  }
}

seedData()
  .then((el) => console.log(el))
  .catch((err) => console.log(err));
