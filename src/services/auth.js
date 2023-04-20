import axios from "axios";
import { rootApi } from "../api";

export const authServices = () => {
  const registration = (userData) => {
    return axios.post(`${rootApi}/auth/register`, userData);
  };
  return {
    registration,
  }
};
export const authServicesLogin = () => {
  const login = (loginData) => {
    return axios.post(`${rootApi}/auth/login`, loginData);
  };
  return {
    login,
  }
}