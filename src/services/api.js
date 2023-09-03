import axios from "axios";

const baseUrl = "http://127.0.0.1:1111";

// Api Post PhoneNumber
// Post : get-otp
export const getOtp = async (mobile) => {
  const response = await axios.post(`${baseUrl}/auth/get-otp`, mobile);
  return response.data;
};

// Api Post CheckOtp
// Post : check-otp
export const checkOtp = async (data) => {
  const response = await axios.post(`${baseUrl}/auth/check-otp`, data);
  return response.data;
};
