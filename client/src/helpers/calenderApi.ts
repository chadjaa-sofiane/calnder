import axios from "axios";

export const calenderApi = axios.create({
  baseURL: "http://localhost:5000/api/calender",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
