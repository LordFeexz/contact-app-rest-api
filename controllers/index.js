const Contact = require("../models/contact");

class Controller {
  static async getData(req, res, next) {
    try {
      const contacts = await Contact.find();

      if (contacts.length < 1) throw { name: "Data not found" };

      res.status(200).json(contacts);
    } catch (err) {
      next(err);
    }
  }

  static async createData(req, res, next) {
    try {
      const { name, phoneNumber } = req.body;

      const contact = await Contact.findOne({ phoneNumber });

      if (contact) throw { name: "Data already exist" };

      await Contact.insertMany({ name, phoneNumber });

      res.status(201).json({ message: "success create" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
