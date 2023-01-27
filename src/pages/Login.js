import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <StLayout>
        <StImg src="img/insaneLoginImg_001.png" />

        <StLoginForm>
          <StGoogleBtn>Google Login</StGoogleBtn>
          <br />
          <StKakaoBtn>Kakao Login</StKakaoBtn>
        </StLoginForm>
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

const StLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  right: 400px;
  width: 300px;

  z-index: 99;
`;
const StGoogleBtn = styled.button`
  width: 200px;
  height: 40px;
  margin: 20px;
  background-color: #f5f5f5;
  border: 0px;
  border-radius: 30px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
  cursor: pointer;
`;
const StKakaoBtn = styled.button`
  width: 200px;
  height: 40px;
  margin: 20px;
  background-color: #ffd700;
  border: 0px;
  border-radius: 30px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
  cursor: pointer;
`;
