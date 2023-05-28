import { Box, styled } from "@mui/material";
import bg from "../bg.jpg";
import Form from "../components/Form";
import Information from "../components/Result";
import { useState } from "react";

const Component = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  width: "70%",
});

const Image = styled(Box)({
  width: "45%",
  height: "80%",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  borderRadius: "20px 0 0 20px",
});

export const Home = () => {
  const [result, setResult] = useState({});
  return (
    <Component>
      <Image></Image>
      <Box style={{ width: "55%", height: "80%" }}>
        <Form setResult={setResult} />
        <Information result={result} />
      </Box>
    </Component>
  );
};

// export default Home;
