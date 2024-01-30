export const validateEmail = email => {
  const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const validatePhone = phoneNumber => {
  const phoneNumberPattern = /^[0-9]{10}$/;
  if (phoneNumberPattern.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
};
