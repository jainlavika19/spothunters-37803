
// Base Url for api requests
export const BASE_URL = "https://hamiltons-33335-staging.botics.co/"

// successStatusCodes
export const successStatusCode = [200, 201, 202]

export const APP_JSON_HEADER = async () => {
  const token = sessionStorage.getItem("Token")
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization : 'Token '
  }
  if (token) {
    header.Authorization = `Token ${token}`
  }
  return header
}
