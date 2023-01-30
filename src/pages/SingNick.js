import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addNick } from "../redux/modules/loginSlice";
export const SingNick = () => {
  const dispatch = useDispatch();
  //닉네임 스테이트 형성
  const [nickInput, setNickInput] = useState("");
  const [nickName, setNickName] = useState("");
  //유효성 검사 영어 숫자로 이루어진 3글자 이상
  const regNick = /^[a-zA-Z0-9]{3,}$/;

  // 유효성 검사 및 유즈스테이트 작성
  const onChangeNick = (e) => {
    setNickName(e.target.value);

    !regNick.test(e.target.value)
      ? setNickInput("3글자 이상의 영어 숫자로만 이루어진 닉네임")
      : setNickInput("");
  };

  //입력받은 닉네임 서버에 보내기
  const onAddNickHandler = (event) => {
    console.log(nickInput);
    event.preventDefault();
    if (nickName.trim() === "") {
      return alert("닉네임을 입력해주세요.");
    }
    dispatch(__addNick({ nickname: nickName }));
  };

  return (
    <>
      <StLayout>
        <StImg src="img/insaneLoginImg_001.png" />
        <StRight>
          <StImg2 src="img/insanegram.png" />
          <StTitle>
            Our features help you express yourself and connect with the people
            you
            <span className="_a6wh _a6wk">
              <StLovSpan>love</StLovSpan>
            </span>
            .<br />
            <StSmallText>Create and share with your friends.</StSmallText>
            <StLine />
          </StTitle>
          <StLoginForm>닉네임을 입력해주세요</StLoginForm>
          <StSignNickInput
            maxLength="11"
            placeholder="11글자까지 가능합니다"
            type="text"
            name="nickName"
            value={nickName}
            onChange={onChangeNick}
          />
          <HelperText id="help-nickName" className="help">
            {nickInput}
          </HelperText>
          <StSignNickButton
            disabled={!regNick.test(nickName)}
            onClick={onAddNickHandler}
          >
            닉네임 입력
          </StSignNickButton>
        </StRight>
      </StLayout>
    </>
  );
};

export default SingNick;

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
const StSignNickInput = styled.input`
  width: 200px;
  height: 40px;
  margin-top: 10px;
  //margin: 20px;
  background-color: #f5f5f5;
  border: 0px;
  border-radius: 5px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
  text-align: center;
  margin: 10px;
`;

const StSignNickButton = styled.button`
  width: 200px;
  height: 40px;
  //margin: 20px;
  background-color: #ffd700;
  border: 0px;
  border-radius: 5px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
  cursor: pointer;
  font-weight: 600;
  :disabled {
    cursor: default;
  }
`;

const HelperText = styled.pre`
  display: flex;
  justify-content: center;
  font-size: smaller;
  color: red;
`;
