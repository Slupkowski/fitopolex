const { Form } = require("../models/Form");

let form = Form();

function saveContactInfo(data) {
  form.agreeContact = data.agreeContact;
  form.agreeSafety = data.agreeSafety;
  form.firstName = data.firstName;
  form.mailName = data.mailName;
  console.log(form);
}
module.exports = { saveContactInfo };
