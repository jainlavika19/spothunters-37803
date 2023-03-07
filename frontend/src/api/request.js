import axios from "axios"
import {
  APP_JSON_HEADER,
  BASE_URL,
  successStatusCode
} from "./config"

import EndPoints  from "./endPoints"

const GET = "GET"
const POST = "POST"
const PUT = "PUT"
const DELETE = "DELETE"

export async function request(endPoint, method, body) {
  console.log(BASE_URL + endPoint)
  const header = await APP_JSON_HEADER()
  return await axios({
    method: method,
    url: BASE_URL + endPoint,
    data: body,
    headers: header,
    timeout: 150000
  })
    .then(function (response) {
      console.log(BASE_URL + endPoint)
      console.log(JSON.stringify(response?.data))
      if (successStatusCode.includes(response?.status))
        return response?.data
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function login(params) {
  return request(EndPoints.login, POST, params );
}

export async function logout() {
  return request(EndPoints.logout, POST );
}

export async function registerByEmail(params) {
  return request(EndPoints.registerByEmail, POST, params );
}

export async function registerByPhone(params) {
  return request(EndPoints.registerByPhone, POST, params );
}

export async function registerOtpEmail(params) {
  return request(EndPoints.registerOtpEmail, POST, params );
}

export async function registerOtpPhone(params) {
  return request(EndPoints.registerOtpPhone, POST, params );
}

export async function createPassword(params) {
  return request(EndPoints.createPassword, POST, params );
}

export async function plaidCallToken() {
  return request(EndPoints.plaidCallToken, GET );
}