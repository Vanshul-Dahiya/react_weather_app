import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/weather";
const Key = process.env.REACT_APP_API_KEY;

export const getWeather = async (city, country) => {
  try {
    let res = await axios.get(
      `${URL}?q=${city},${country}&appid=${Key}&units=metric`
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};
