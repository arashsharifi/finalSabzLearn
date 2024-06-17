import rules from "./rules";

const validator = (value, validations) => {
  let validationResults = [];
  for (const validator of validations) {
    if (validator.value === rules.requiredValue) {
      //شرت خالی بودن داره برسی میشه به داده فالس بر می گرده
      value.trim().length === 0 && validationResults.push(false);
    }
    if (validator.value === rules.minValue) {
      //شرت rule min
      value.trim().length < validator.min && validationResults.push(false);
    }
    if (validator.value === rules.maxValue) {
      //شرت rule max
      value.trim().length > validator.max && validationResults.push(false);
    }
    if (validator.value === rules.emailValue) {
      !value.trim().includes("@") && validationResults.push(false);
    }
  }
  //در مجوع اگر که از همه این بساتی که ما داشتیم فلس پوش بشه
  //بیاد فالس برگردونه
  //ولی اگه آرایه ریزالت خالی بشه در مجموع بیاد ترو بر گرداند
  //بره بره دست کامپونت ما ساسکس بشه
  if (validationResults.length) {
    return false;
  } else {
    return true;
  }
};
export default validator;
