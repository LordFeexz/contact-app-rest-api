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
}

module.exports = Controller;
