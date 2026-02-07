export const checkValidData = (email, phone) => {
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPhoneValid = /^[6-9]\d{9}$/.test(phone);

  if (!isEmailValid) return "Email is not valid";
  if (!isPhoneValid) return "Phone number is not valid";

  return null; 
};
