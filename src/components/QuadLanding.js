import React from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../static/fontawesome/css/all.css';
import abstract2 from '../static/img/abstract2.jpg';
import mac from '../static/img/mac2.png';
import insider from '../static/img/insider_threat.png';
// import insider_threat5 from '../static/img/insider_threat-5.svg';
import { Fade, Slide, Rotate } from 'react-reveal';
import macpro from '../static/img/macpro.jpg';
import cloud from '../static/img/cloud.svg';
import statistics from '../static/img/statistics.svg';
import clipboard from '../static/img/clipboard.svg';

const LandingTitle = styled.div`
  position: absolute;
  width: 750px;
  max-width: 100%;
  top: 100px;
  /* left: 50%; */
  /* margin-left: calc(750px / -2); */
  opacity: 0.8;
  z-index: 2;
  box-shadow: 3px 3px 10px -15px black;
`;

const LandingDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${palette.gray[4]};
`;

const LandingDescription2 = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: 1.4rem;
  font-weight: 400;
  width: 1030px;
  max-width: 100%;
  margin-top: 430px;
  color: ${palette.gray[5]};
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
const LandingDescription3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.8rem;
  font-weight: 400;
  width: 800px;
  max-width: 100%;
  margin: 100px auto 0 auto;
  color: ${palette.gray[5]};
  @media (max-width: 768px) {
    width: 340px;
    img {
      position: relative;
      margin-right: 80px;
      margin-top: 180px;
      width: 150px;
    }
  }
`;

const IntroduceTextDescription = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${palette.gray[5]};
  text-align: right;
  padding: 1.25rem; //20px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin: 0;
  }
  /* border: 1px solid red; */
`;

const ProductContainer = styled.div`
  height: 550px;
  max-width: 100%;
  z-index: 1;
  outline: none;
  border: 0;
  opacity: 0.7;
`;

const FeaturesContainer = styled.div`
  max-width: 100%;
  height: 300px;
  margin-bottom: 1200px;
  @media (max-width: 768px) {
    margin-bottom: 500px;
  }
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
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const FeatureTitle2 = styled(FeatureTitle)`
  font-size: 4rem;
  display: flex;
  text-align: center;
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
// const FeatureBoxModel = styled.div`
//   border: 1px solid red;
//   height: 120px;
//   max-width: 100%;
//   width: 300px;
//   font-size: 2rem;
//   text-align: center;
//   /* position: absolute; */
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: ${palette.gray[1]};
  opacity: 0.9;
  width: 50rem;
  text-align: center;
  max-width: 100%;
  margin-bottom: 250px;
  @media (max-width: 768px) {
    width: 800px;
    img {
      display: none;
    }
  }
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

const IntroduceText3 = styled.div`
  font-size: 8rem;
  color: ${palette.gray[1]};
  opacity: 0.9;
  width: 54rem;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
`;

const SolutionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* width: 800px; */
  text-align: center;
  max-width: 100%;
  /* position: absolute; */
  /* left: 50%; */
  flex-wrap: wrap;
  /* margin-bottom: 3000px; */
  /* height: 300px; */
  /* border: 1px solid red; */
  /* align-items: center; */
`;
const SolutionDesc = styled.div`
  color: white;
  font-size: 1.3rem;
  font-weight: 200;
  width: 300px;
  margin-bottom: 100px;
  margin-top: 20px;
`;

const MacWrapper = styled.div`
  margin-top: 500px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    width: auto;
    text-align: right;
    margin: 0;
  }
`;

const FeatureList = styled.li`
  list-style: square;
`;

// const ContactWrapper = styled.div`
//   height: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column; /*수직 정렬*/
//   align-items: center;
//   justify-content: center;
// `;

// const Contact = styled.div`
//   color: white;
//   text-align: center;
//   border: 1px solid ${palette.gray[7]};
//   border-radius: 15px;
//   height: 100px;
//   width: 100px;
//   line-height: 100px;
// `;

const QuadLanding = () => {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <LandingTitle>
          <Rotate top left>
            <div>
              <img src={insider} alt='ab' width='600px' />
            </div>
            <LandingDescription>
              조직의 임직원이 회사나 정보 통신(IT) 시스템에 보안상 위협을 가하는
              행위 보통 바이러스나 해커의 공격과 같은 외부 위협이 아닌 인가된
              내부 사용자에 대한 위협을 말한다. <br />
              인가된 사용자들은 쉽게 비밀 자료에 접근할 수 있는 점을 이용한다.
            </LandingDescription>
          </Rotate>
        </LandingTitle>
      </div>
      <ProductContainer>
        <div style={{ opacity: '0.7' }}>
          <img src={abstract2} alt='ab' width='100%' />
        </div>
      </ProductContainer>
      <FeaturesContainer>
        <Fade bottom cascade>
          <FeatureTitle>시나리오 중심의 차단/탐지 방식의 한계</FeatureTitle>
          <FeatureTitleDescription>
            <FeatureList>
              내부 시스템으로의 자유로운 접근 및 권한 남용
            </FeatureList>
            <FeatureList>내부자의 부주의한 행위로 인한 공격 허용</FeatureList>
            <FeatureList>클라우드 상에 사용자 행위 분석 부재</FeatureList>
            <FeatureList>MSP 권한 통제 및 모니터링 부재</FeatureList>
          </FeatureTitleDescription>
        </Fade>
        <LandingDescription2>
          <Fade bottom>
            각종 보안 사고 사례가 증명하듯이 대다수의 보안 사고는 보안의 틈을
            노리는 내부자에 의해 발생합니다. 이러한 내부자에 의한 보안 사고는
            원인 분석이 어려우며 위협 탐지에서부터 증적자료 확보까지 시간이 과다
            소모되어 기업은 막대한 피해를 보게 됩니다
          </Fade>
        </LandingDescription2>

        {/* <div style={{ paddingLeft: '50px' }}> */}
        <LandingDescription3>
          <div
            style={{
              position: 'absolute',
              right: '100px',
              overflowX: 'hidden',
            }}
          >
            <Fade right>
              <img src={statistics} alt='statistics' width='70%' />
            </Fade>
          </div>
          <Fade left>
            <FeatureTitle2>분석/대응의 어려움</FeatureTitle2>
            <FeatureList>원인 분석을 위한 증적 자료 부재 </FeatureList>
            <FeatureList>사후 대응에 인력/시간 과다 소모 </FeatureList>
            <FeatureList>클라우드상에 데이터 흐름 가시성 부재</FeatureList>
            <FeatureList>
              IT아웃소싱으로 계정/권한 중심 대응법의 한계
            </FeatureList>
            <FeatureList>
              모든 패킷-대용량 데이터를 분석하는 시스템 부재
            </FeatureList>
          </Fade>
        </LandingDescription3>
        {/* </div> */}
        {/* <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
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
            보안 담당자 68%는 우리 조직이 Insider Threat에 취약하다고 생각하며,
            &nbsp;&nbsp;53%는 클라우드 도입으로 Insider Threat 대응에 더
            어려움을 느끼고 &nbsp;&nbsp;&nbsp;있습니다. 또한, 우리 내부에서
            데이터가 나간 후에 뒤늦게 발견하고 대응하는 조직은 42%가 넘습니다.
          </IntroduceTextDescription>
          <img src={cloud} id='cloud' alt='mp' width='70%' />
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
            width: '200px',
            position: 'absolute',
            right: '500px',
            zIndex: '1',
          }}
        >
          <Slide right>
            <div style={{ fontSize: '5rem' }}>
              <div>68%</div>
              <div>14.5</div>
              <div>42%</div>
              <div>$11.45M</div>
              <div>53%</div>
            </div>
          </Slide>
        </div>
      </IntroduceText2>
      <Slide left>
        <MacWrapper>
          <img src={macpro} alt='mp' width='80%' />
        </MacWrapper>
      </Slide>
      <Fade top>
        <IntroduceText3>
          Solution
          <IntroduceTextDescription>
            고도화된 Insider Threat을 탐지/대응하기 위해서는 제로트러스트 보안
            관점을 네트워크에 적용하여 모든 패킷을 다양한 탐지 방식으로
            전수조사하고 다양한 증적자료를 제공해 줄 수 있는 시스템이
            필요합니다.
          </IntroduceTextDescription>
          <hr />
        </IntroduceText3>

        <SolutionContainer>
          <i class='far fa-folder-open'>
            <SolutionDesc>컨텐츠 추출</SolutionDesc>
          </i>
          <i class='fab fa-searchengin'>
            <SolutionDesc>
              다양한 탐지방식을 활용한 <br /> <br /> 모든 패킷 전수조사
            </SolutionDesc>
          </i>
          <i class='fas fa-code-branch'>
            <SolutionDesc>
              머신 러닝/인공지능을 활용한 <br /> <br />
              내부위협 탐지
            </SolutionDesc>
          </i>
          <i class='fas fa-poll'>
            <SolutionDesc>이상 트래픽 모니터링</SolutionDesc>
          </i>
        </SolutionContainer>
        <SolutionContainer>
          <i class='fas fa-wifi'>
            <SolutionDesc>
              네트워크 포렌식 <br />
              <br />
              증적 자료 확보
            </SolutionDesc>
          </i>
          <i class='far fa-eye'>
            <SolutionDesc>
              데이터 흐름의 100% <br />
              <br />
              가시성 확보
            </SolutionDesc>
          </i>
          <i class='fas fa-microchip'>
            <SolutionDesc>
              3rd Party 연동을 통한 고도화된 <br />
              <br />
              분석 프로세스 확립
            </SolutionDesc>
          </i>
        </SolutionContainer>
      </Fade>
    </>
  );
};

export default QuadLanding;
