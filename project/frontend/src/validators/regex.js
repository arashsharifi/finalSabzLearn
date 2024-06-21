const testEmail = (value) => {
  //global search
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(value);
};

const testCodeMEli = (value) => {
  const nationalIDRegex = /^\d{10}$/;
  return nationalIDRegex.test(value);
};

const testPhoneNumber = (value) => {
  const phoneNumberRegex = /^(\+98|0)9\d{9}$/;
  return phoneNumberRegex.test(value);
};

export default {
  testEmail,
  testPhoneNumber,
  testPhoneNumber,
};
