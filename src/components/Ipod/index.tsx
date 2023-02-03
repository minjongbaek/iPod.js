import styled from "styled-components";
import caseImage from "@/assets/images/Ipod/case.png";
import Button from "./button";

const Ipod = () => {
  return (
    <Container>
      <Screen>iPod...</Screen>
      <Button />
    </Container>
  );
};

export default Ipod;

const Container = styled.div`
  position: relative;
  width: 370px;
  height: 100%;
  max-height: 590px;
  background-image: url(${caseImage});
  background-size: cover;
`;

const Screen = styled.div`
  position: absolute;
  background-color: skyblue;
  width: 310px;
  height: 250px;
  left: 30px;
  top: 30px;
  z-index: 0;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #fff;
  box-sizing: border-box;
`;
