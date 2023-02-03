import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Ipod from "@/components/Ipod";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Ipod />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
