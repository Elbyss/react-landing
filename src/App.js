import './App.css';
import QuadLanding from './components/QuadLanding';
import { createGlobalStyle } from 'styled-components';
import palette from './static/palette';

const GlobalStyle = createGlobalStyle`
@media (max-width: 768px) {
  html {
    font-size: 0.5rem;
  }
  img {
    max-width: 100%;
    /* width: 200px; */
  }
}

    html {
    margin: 0;
    padding: 0;
    /* background-color: ${palette.gray[9]}; */
    background-color: black;
    width: 100%;
    height: 100%;
  }
  .slick-slide div {
    position: relative;
    height: 550px;
    max-width: 100%;
    color: black;
    /* background-color: black; */
    z-index: 1;
  }
  .test {
    color: red;
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
