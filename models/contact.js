const mongoose = require("../config/mongoose");

const Contact = mongoose.model("Contact", {
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = Contact;
