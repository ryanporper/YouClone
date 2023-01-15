import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    // '76589c97f8msh6251dc4843f3462p150fb9jsnb44f69e8b108'
    // process.env.RAPID_API_KEY will not work with env file keeps saying unidentified
    "X-RapidAPI-Key": "76589c97f8msh6251dc4843f3462p150fb9jsnb44f69e8b108",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
