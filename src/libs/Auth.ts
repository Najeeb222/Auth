import axios from "axios";

const API_BASE_URL = "https://os-project-server.vercel.app";

export const signupUser = async (data: {
  email: string;
  password: string;
  username: string;
}) => {
  const res = await axios.post(`${API_BASE_URL}/auth/newuser`, data);
  return res.data;
};

export const loginUser = async (data: { username: string; password: string }) => {
  const res = await axios.post(`${API_BASE_URL}/auth/existinguser`, data);
  return res.data;
};
export const PasswordOtp = async (data: { email: string }) => {
  const res = await axios.post(`${API_BASE_URL}/auth/send-otp`, data);
  return res.data;
};
export const ResetPassword = async (data: {
  email: string;
  otp: string;
  newPassword: string;
}) => {
  const res = await axios.post(`${API_BASE_URL}/auth/reset-password`, data);
  return res.data;
};
