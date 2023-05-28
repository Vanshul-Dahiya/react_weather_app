import { Box, Typography } from "@mui/material";
import {
  Brightness5,
  Brightness6,
  Cloud,
  Dehaze,
  LocationOn,
  Opacity,
  SettingsBrightness,
} from "@mui/icons-material";
import styled from "@emotion/styled";

const Row = styled(Typography)({
  padding: 10,
  fontSize: 18,
  letterSpacing: 2.2,
  "& > svg": {
    marginRight: 10,
  },
});

const Error = styled(Typography)({
  color: "red",
  margin: 40,
  padding: 20,
});

const Information = ({ result }) => {
  return (
    // result is an object .. if it has no key => null..else returns key
    result && Object.keys(result).length > 0 ? (
      <Box style={{ margin: "40px 60px" }}>
        <Row>
          <LocationOn /> Location : {result.name}, {result.sys.country}
        </Row>
        <Row>
          <SettingsBrightness /> Temperature : {result.main.temp}
        </Row>
        <Row>
          <Opacity /> Humidity : {result.main.humidity}
        </Row>
        <Row>
          <Brightness5 /> Sun Rise :{" "}
          {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
        </Row>
        <Row>
          <Brightness6 /> Sun Set :{" "}
          {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
        </Row>
        <Row>
          <Dehaze /> Condition : {result.weather[0].main}
        </Row>
        <Row>
          <Cloud /> Clouds : {result.clouds.all}%
        </Row>
      </Box>
    ) : (
      <Error>Enter the values to check the weather..</Error>
    )
  );
};

export default Information;
