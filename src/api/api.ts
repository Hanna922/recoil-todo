import axios from "axios";
import { ACCESS_TOKEN_KEY } from "./../const";
import token from "./token";

const BASE_URL = "https://pre-onboarding-selection-task.shop";
const getToken = token.getToken(ACCESS_TOKEN_KEY);

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${getToken}` : "",
  },
});

export default api;
