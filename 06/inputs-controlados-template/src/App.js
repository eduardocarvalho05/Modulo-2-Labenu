import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import styled from 'styled-components'
import { GlobalStyles } from "./GlobalStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
function App() {
  return (
    <>
    <GlobalStyles/>
    <Container>
      <Header/>
      <MainPage/>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
