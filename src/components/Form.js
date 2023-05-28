import styled from "@emotion/styled";
import { Box, Button, InputBase } from "@mui/material";
import { useState } from "react";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  backgroundColor: "#445A6f",
  padding: 10,
  borderRadius: '0 12px 12px 0',
});
const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
});
const GetButton = styled(Button)({
  backgroundColor: "peachpuff",
  color: "darkblue",
  borderRadius:12
});
const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = (e) => {
    // can't use city or country directly
    // key is variable here => use square brackets when ,in object,  key is a variable
    // use spread operator to append data or else new data will override previous data
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const getWeatherInfo = async () => {
    let res = await getWeather(data.city, data.country);
    setResult(res);
  };

  return (
    <Container>
      <Input placeholder="City" onChange={(e) => handleChange(e)} name="city" />
      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="country"
      />
      <GetButton variant="outlined" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
