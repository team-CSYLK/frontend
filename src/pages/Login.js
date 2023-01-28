import React from "react";

import styled from "styled-components";

const Login = () => {
  return (
    <>
      <StLayout>
        <StImg src="img/insaneLoginImg_001.png" />
        <StRight>
          <StImg2 src="img/insanegram.png" />
          <StTitle className="_a8td _a6sv _a4kl _a4kh">
            Our features help you express yourself and connect with the people
            you
            <span className="_a6wh _a6wk">
              <StLovSpan>love</StLovSpan>
            </span>
            .<br />
            <StSmallText>Create and share with your friends.</StSmallText>
            <StLine />
          </StTitle>
          <StLoginForm>
            <StGoogleBtn>Google Login</StGoogleBtn>
            <br />
            <StKakaoBtn>
              <a href="http://becool0514.shop/auth/login/kakao">Kakao Login</a>
            </StKakaoBtn>
          </StLoginForm>
        </StRight>
      </StLayout>
    </>
  );
};

export default Login;

const StLayout = styled.div`
  max-width: 1920px;
  min-width: 800px;
  height: 800px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const StImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 100px;

  scale: 90%;
`;
const StRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 400px;
  top: -20px;
  width: 300px;
  height: 800px;
  z-index: 99;
`;
const StImg2 = styled.img`
  scale: 60%;
`;
const StTitle = styled.h5`
  font-weight: 500;
  margin-bottom: 50px;
  margin-left: 10px;
`;
const StLovSpan = styled.span`
  margin-left: 2px;
  background-image: linear-gradient(
    72.44deg,
    #ff7a00 11.92%,
    #ff0169 51.56%,
    #d300c5 85.69%
  );
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  color: transparent;
  display: inline;
  font-weight: 700;
`;
const StSmallText = styled.span`
  font-weight: 700;
`;
const StLine = styled.hr`
  margin-top: 40px;
  width: 20px;
  position: relative;
  left: -10px;
`;
const StLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StGoogleBtn = styled.button`
  width: 200px;
  height: 40px;
  //margin: 20px;
  background-color: #f5f5f5;
  border: 0px;
  border-radius: 30px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
  cursor: pointer;
`;
const StKakaoBtn = styled.button`
  width: 200px;
  height: 40px;
  //margin: 20px;
  background-color: #ffd700;
  border: 0px;
  border-radius: 30px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
  cursor: pointer;
`;
