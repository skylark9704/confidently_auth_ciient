import Api from "./Api";
import * as jwt_decode from "jwt-decode";

export function isLoggedIn() {
  if (window.localStorage.getItem("access")) {
    return true;
  } else {
    return false;
  }
}

export function getAccessToken() {
  return window.localStorage.getItem("access");
}

export function getRefreshToken() {
  return window.localStorage.getItem("refresh");
}

export function setAccessToken(token) {
  window.localStorage.setItem("access", token);
}

export function setRefreshToken(token) {
  window.localStorage.setItem("refresh", token);
}

export function getUser() {
  try {
    return jwt_decode(getAccessToken());
  } catch (error) {
    return null;
  }
}

export function logout() {
  window.localStorage.removeItem("access");
  window.localStorage.removeItem("refresh");
  window.location.href = "/login";
}

export async function login(username, password) {
  let result = await Api.post("http://localhost:8000/api/v1/auth/login", {
    username,
    password,
  });
  console.log(result);
  if (!result.data.error) {
    window.localStorage.setItem("access", result.data.access);
    window.localStorage.setItem("refresh", result.data.refresh);
    window.location.href = "/dashboard";
  }
  return result;
}
