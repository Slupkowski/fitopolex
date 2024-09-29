const { Form } = require("../models/Form");
const { createPdf } = require("./PdfCreator");
let form = Form();

function saveContactInfo(data) {
  form.agreeContact = data.agreeContact;
  form.agreeSafety = data.agreeSafety;
  form.firstName = data.firstName;
  form.mailName = data.mailName;
  console.log(form);

  // tutaj funkcja do generowania pdfu, jako argument form
  createPdf(form);
}
function saveTrainingInfo(data) {
  form.timeInfo = data.timeInfo;
  form.extraGoalInfo = data.extraGoalInfo;
  form.goalInfo = data.goalInfo;
  form.equipmentInfo = data.equipmentInfo;
  console.log(form);
}
function savePersonalInfo(data) {
  form.gender = data.gender;
  form.age = data.age;
  form.height = data.height;
  form.weight = data.weight;
  console.log(form);
}
module.exports = { saveContactInfo, saveTrainingInfo, savePersonalInfo };
