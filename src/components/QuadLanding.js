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
import Cyber from '../static/img/cyber_killchain.jpg';
import mac from '../static/img/mac2.png';
import insider from '../static/img/insider_threat.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
// import Wave from 'react-wavify';
// import Reveal from 'react-reveal/Reveal';
// import Spin from 'react-reveal/Spin';
// import Flip from 'react-reveal/Flip';
// import LightSpeed from 'react-reveal/LightSpeed';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Roll from 'react-reveal/Roll';
import datasvg from '../static/img/datasvg.svg';
import macpro from '../static/img/macpro.jpg';
import cloud from '../static/img/cloud.svg';
import statistics from '../static/img/statistics.svg';

const LandingTitle = styled.div`
  position: absolute;
  width: 750px;
  /* width: 46.875rem; */
  max-width: 100%;
  /* top: 200px; */
  top: 100px;
  /* right: 700px; */
  left: 50%;
  margin-left: calc(750px / -2);
  /* font-size: 7rem; */
  /* font-weight: 700; */
  opacity: 0.8;
  /* margin-left: calc(180px / -2); */
  z-index: 2;
  /* color: ${palette.gray[1]}; */
  box-shadow: 3px 3px 10px -15px black;
`;

const LandingDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${palette.gray[4]};
`;

const LandingDescription2 = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  width: 800px;
  max-width: 100%;
  margin-top: 350px;
  color: ${palette.gray[5]};
`;
const LandingDescription3 = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  width: 800px;
  max-width: 100%;
  margin-top: 100px;
  color: ${palette.gray[5]};
`;

const IntroduceTextDescription = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  /* width: 46.875rem; // 750px; */
  color: ${palette.gray[5]};
  text-align: center;
  padding: 1.25rem; //20px;
`;

// const StyledSlider = styled(Slider)`
//   .slick-slide div {
//     position: relative;
//     width: 300px;
//     max-width: 100%;
//     color: black;
//     outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
//     background-color: ${palette.gray[4]};
//     /* z-index: 2; */
//   }
// `;

const ProductContainer = styled.div`
  /* margin-top: 50px; */
  height: 550px;
  max-width: 100%;
  z-index: 1;
  outline: none;
  border: 0;
  /* background-color: ${palette.gray[9]}; */
  /* background-color: red; */
  /* margin-bottom: 10px; */
  opacity: 0.7;
`;

const FeaturesContainer = styled.div`
  /* border: 1px solid red; */
  max-width: 100%;
  height: 300px;
  margin-bottom: 1200px;
`;

const FeatureTitle = styled.div`
  max-width: 100%;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: ${palette.gray[2]};
  opacity: 0.8;
  margin-bottom: 50px;
  background: linear-gradient(to left, coral, lightgray);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
const FeatureTitle2 = styled(FeatureTitle)`
  font-size: 4rem;
  background: linear-gradient(to left, orange, lightgray);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const FeatureTitleDescription = styled.p`
  max-width: 100%;
  font-size: 2rem;
  font-weight: 400;
  text-align: left;
  display: table;
  margin: 30px auto;
  color: ${palette.gray[2]};
  opacity: 0.8;
`;

// const FeatureBoxModel = styled.div`
//   border: 1px solid red;
//   height: 120px;
//   max-width: 100%;
//   width: 300px;
//   font-size: 2rem;
//   text-align: center;
//   position: absolute;
//   border-radius: 10px;
//   background-color: ${palette.orange[2]};
//   box-shadow: 3px 3px 15px -10px black;
//   border: none;
// `;
// const FeatureBoxModel2 = styled(FeatureBoxModel)`
//   left: 30%;
// `;

// const FeatureBoxModel3 = styled(FeatureBoxModel)`
//   right: 30%;
// `;

// const FeatureBoxModel4 = styled(FeatureBoxModel)`
//   right: 0;
// `;

const IntroduceText = styled.div`
  font-size: 8rem;
  color: ${palette.gray[1]};
  opacity: 0.9;
  width: 50rem;
  text-align: center;
  max-width: 100%;
  margin-bottom: 250px;
`;
const IntroduceText2 = styled.div`
  font-size: 7rem;
  position: absolute;
  right: 5rem;
  max-width: 100%;
  color: ${palette.gray[1]};
  text-align: center;
  /* position: absolute; */
  /* float: right; */
`;

const QuadLanding = () => {
  return (
    <>
      <div>
        <LandingTitle>
          {/* Inspire Threat */}
          <div style={{ textAlign: 'center' }}>
            <img src={insider} alt='ab' width='600px' />
          </div>
          <LandingDescription>
            조직의 임직원이 회사나 정보 통신(IT) 시스템에 보안상 위협을 가하는
            행위 보통 바이러스나 해커의 공격과 같은 외부 위협이 아닌 인가된 내부
            사용자에 대한 위협을 말한다. 인가된 사용자들은 쉽게 비밀 자료에
            접근할 수 있는 점을 이용한다.
          </LandingDescription>
        </LandingTitle>

        <ProductContainer>
          <div style={{ opacity: '0.7' }}>
            <img src={abstract2} alt='ab' width='100%' />
          </div>
        </ProductContainer>
        <FeaturesContainer>
          {/* <div style={{ opacity: '0.2', position: 'absolute' }}>
            <img src={Cyber} alt='ab' width='100%' />
          </div> */}
          {/* <Roll>시나리오 중심의 차단/탐지 방식의 한계</Roll> */}
          <Fade bottom cascade>
            <FeatureTitle>
              시나리오 중심의 차단/탐지 방식의 한계
              <FeatureTitleDescription>
                <li>내부 시스템으로의 자유로운 접근 및 권한 남용</li>
                <li>내부자의 부주의한 행위로 인한 공격 허용</li>
                <li>클라우드 상에 사용자 행위 분석 부재</li>
                <li>MSP 권한 통제 및 모니터링 부재</li>
              </FeatureTitleDescription>
            </FeatureTitle>
          </Fade>

          <div style={{ paddingLeft: '50px' }}>
            <div
              style={{
                position: 'absolute',
                right: '350px',
                width: '400px',
                marginTop: '300px',
                opacity: '0.8',
              }}
            >
              <Fade right>
                <img src={statistics} alt='statistics' width='90%' />
              </Fade>
            </div>
            <LandingDescription2>
              <Fade bottom>
                각종 보안 사고 사례가 증명하듯이 대다수의 보안 사고는 보안의
                틈을 노리는 내부자에 의해 발생합니다. 이러한 내부자에 의한 보안
                사고는 원인 분석이 어려우며 위협 탐지에서부터 증적자료 확보까지
                시간이 과다 소모되어 기업은 막대한 피해를 보게 됩니다
              </Fade>
            </LandingDescription2>
            <LandingDescription3>
              <Fade left>
                <FeatureTitle2>분석/대응의 어려움</FeatureTitle2>
                <li>원인 분석을 위한 증적 자료 부재</li>
                <li>사후 대응에 인력/시간 과다 소모</li>
                <li>클라우드상에 데이터 흐름 가시성 부재</li>
                <li>IT아웃소싱으로 계정/권한 중심 대응법의 한계</li>
                <li>데이터를 분석하는 시스템 부재</li>
              </Fade>
            </LandingDescription3>
          </div>
          {/* <div
            style={{
              opacity: '0.4',
              // position: 'absolute',
              // right: '0',
            }}
            >
            <img src={dataSvg} alt='svg' />
          </div> */}
          {/* <div>
            <FeatureBoxModel>title</FeatureBoxModel>
            <FeatureBoxModel2>title2</FeatureBoxModel2>
            <FeatureBoxModel3>title3</FeatureBoxModel3>
            <FeatureBoxModel4>title4</FeatureBoxModel4>
          </div> */}
        </FeaturesContainer>
        <IntroduceText>
          <div style={{ opacity: '0.6', position: 'absolute', right: '0' }}>
            <img src={mac} alt='ab' width='100%' />
          </div>
          <Slide left>
            Threat Status
            <IntroduceTextDescription>
              보안 담당자 68%는 우리 조직이 Insider Threat에 취약하다고
              생각하며, 53%는 클라우드 도입으로 Insider Threat 대응에 더
              어려움을 느끼고 있습니다. 또한, 우리 내부에서 데이터가 나간 후에
              뒤늦게 발견하고 대응하는 조직은 42%가 넘습니다.
            </IntroduceTextDescription>
            {/* <div style={{ width: '600px', marginLeft: '100px' }}> */}
            <img src={cloud} alt='mp' width='80%' />
            {/* </div> */}
          </Slide>
        </IntroduceText>
        <Slide left>
          <div
            style={{
              position: 'absolute',
              width: '300px',
            }}
          ></div>
        </Slide>

        <IntroduceText2>
          <div
            style={{
              // width: '150px',
              width: '100%',
              position: 'absolute',
              right: '500px',
              textAlign: 'center',
              zIndex: '1',
            }}
          >
            <Slide right>
              <div>Exciting</div>
              <div>Amazing</div>
              <div style={{ marginBottom: '1000px' }}>Innovation</div>
            </Slide>
          </div>
        </IntroduceText2>
        <Slide left>
          <div style={{ marginTop: '500px' }}>
            <img src={macpro} alt='mp' width='80%' />
            {/* <img src={datasvg} alt='asdasd' width='100%' /> */}
          </div>
        </Slide>
      </div>
    </>
  );
};

export default QuadLanding;
