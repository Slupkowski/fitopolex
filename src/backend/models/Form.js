function Form(
  timeInfo = null,
  extraGoalInfo = null,
  goalInfo = null,
  equipmentInfo = null,
  gender = null,
  age = null,
  height = null,
  weight = null,
  firstName = null,
  mailName = null,
  agreeContact = null,
  agreeSafety = null
) {
  return {
    timeInfo,
    extraGoalInfo,
    goalInfo,
    equipmentInfo,
    gender,
    age,
    height,
    weight,
    firstName,
    mailName,
    agreeContact,
    agreeSafety,
  };
}
module.exports = { Form };
