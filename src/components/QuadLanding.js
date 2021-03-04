import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import palette from '../static/palette';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../static/fontawesome/css/all.css';
import abstract from '../static/img/abstract.jpg';
import abstract2 from '../static/img/abstract2.jpg';
import abstract4 from '../static/img/abstract4.jpg';
import abs from '../static/img/abs.jpg';
import Wave from 'react-wavify';

const LandingTitle = styled.div`
  position: absolute;
  width: 180px;
  max-width: 100%;
  /* height: 100%; */
  top: 150px;
  left: 50%;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin-left: calc(-180px / 2);
  z-index: 2;
  color: ${palette.gray[2]};
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    position: relative;
    width: 300px;
    max-width: 100%;
    color: black;
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    background-color: ${palette.gray[4]};
    /* z-index: 2; */
  }
`;

const Test = styled.div`
  margin-top: 50px;
  height: 550px;
  max-width: 100%;
  z-index: 1;
  outline: none;
  border: 0;
  background-color: ${palette.gray[8]};
`;

const QuadLanding = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
  };

  return (
    <>
      <LandingTitle>Product</LandingTitle>

      <Test>
        <Slider {...settings}>
          <div>
            <Wave
              fill={palette.gray[9]}
              // paused={false}
              options={{
                height: 300,
                amplitude: 50,
                speed: 0.15,
                points: 5,
              }}
            />
          </div>
          <div>
            <img src={abstract2} alt='ab' width='100%' />
          </div>
          <div>
            <img src={abs} alt='ab' width='100%' />
          </div>
          <div>
            <img src={abstract} alt='ab' width='100%' />
          </div>
          <div>
            <img src={abstract4} alt='ab' width='100%' />
          </div>
        </Slider>
      </Test>
    </>
  );
};

export default QuadLanding;
