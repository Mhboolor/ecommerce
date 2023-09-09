import axios from "axios";

const baseUrl = "http://127.0.0.1:1111";
const accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;

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
export const getMe = async () => {
  const response = await axios.get(`${baseUrl}/auth/get-me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

// Api Add Category
// POST : admin/category/add
export const addCategory = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/admin/category/add`, data, {
      headers: {
        Accept: "aplication/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
