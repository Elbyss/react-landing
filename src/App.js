import './App.css';
import QuadLanding from './components/QuadLanding';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
  }
  .slick-slide div {
    position: relative;
    height: 550px;
    max-width: 100%;
    color: black;
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    /* background-color: black; */
    z-index: 1;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <QuadLanding />
    </>
  );
}

export default App;
