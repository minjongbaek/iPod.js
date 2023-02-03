import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <h1>iPod.js</h1>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
