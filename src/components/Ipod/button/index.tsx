import styled from "styled-components";
import wheelImage from "@/assets/images/Ipod/wheel.png";
import centerButtonImage from "@/assets/images/Ipod/button/center.png";
import menuButtonImage from "@/assets/images/Ipod/button/menu.png";
import nextButtonImage from "@/assets/images/Ipod/button/next.png";
import playButtonImage from "@/assets/images/Ipod/button/play.png";
import prevButtonImage from "@/assets/images/Ipod/button/prev.png";

const Button = () => {
  return (
    <ButtonContainer>
      <Wheel>
        <CenterButton />
        <MenuButton />
        <NextButton />
        <PlayButton />
        <PrevButton />
      </Wheel>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  left: 75px;
  top: 320px;
`;

const Wheel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${wheelImage});
  background-size: cover;
  z-index: 10;
  border-radius: 50%;
`;

const CenterButton = styled.div`
  position: relative;
  background-image: url(${centerButtonImage});
  background-size: cover;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 88px;
  height: 88px;
`;

const MenuButton = styled.div`
  position: absolute;
  background-image: url(${menuButtonImage});
  background-size: cover;
  top: 20%;
  left: 50%;
  translate: -50% -50%;
  width: 32px;
  height: 16px;
`;

const NextButton = styled.div`
  position: absolute;
  background-image: url(${nextButtonImage});
  background-size: cover;
  top: 50%;
  left: 80%;
  translate: -45% -50%;
  width: 32px;
  height: 16px;
`;

const PlayButton = styled.div`
  position: absolute;
  background-image: url(${playButtonImage});
  background-size: cover;
  top: 80%;
  left: 50%;
  translate: -50% -50%;
  width: 32px;
  height: 16px;
`;

const PrevButton = styled.div`
  position: absolute;
  background-image: url(${prevButtonImage});
  background-size: cover;
  top: 50%;
  left: 20%;
  translate: -65% -50%;
  width: 32px;
  height: 16px;
`;
