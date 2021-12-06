import axios from "axios";

export const baseUrl = process.env.API_BASE_URL;

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": process.env.API_HOST,
      "x-rapidapi-key": process.env.API_KEY,
    },
  });
  return data;
};
