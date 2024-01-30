export const validatePhone = phone => {
  return !/[a-zA-Z]/.test(phone) && !/[^\s\d\-+]/.test(phone);
}; 

export const validateOtp = otp => {
  return !/[^a-zA-Z0-9]/.test(otp);
};
