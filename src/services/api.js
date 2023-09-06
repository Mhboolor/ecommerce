import axios from "axios";

const baseUrl = "http://127.0.0.1:1111";

// Api Post PhoneNumber
// POST : get-otp
export const getOtp = async (mobile) => {
  const response = await axios.post(`${baseUrl}/auth/get-otp`, mobile);
  return response.data;
};

// Api Post CheckOtp
// POST : check-otp
export const checkOtp = async (data) => {
  const response = await axios.post(`${baseUrl}/auth/check-otp`, data);
  return response.data;
};

// Api Get CheckOtp
// GET : get-me
export const getMe = async (token) => {
  const response = await axios.get(`${baseUrl}/auth/get-me`, {
    headers: {
      Authorization: `Bearar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTAzNTQyNTg5MiIsImlhdCI6MTY5Mzk5NDY1MywiZXhwIjoxNjk0MDgxMDUzfQ.5YrcFmMEd-rlS5JMWPEQZJEoqxX7P0fgTU-M1BrjjDM`,
    },
  });
  return response.data;
};
