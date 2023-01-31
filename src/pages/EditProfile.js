import React, { useState } from "react";
import styled from "styled-components";

const EditProfile = () => {
  //편집 미리보기
  const [imageSrc, setImageSrc] = useState();
  const profileImgToBase64 = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
        console.log("setImage", reader.result);
      };
    });
  };

  const onChangeProfileFile = (e) => {
    profileImgToBase64(e.target.files[0]);
  };
  const [inputContent, setInputContent] = useState("");
  // console.log(inputContent);
  const onTextarea = (e) => {
    // console.log(e.target.value);
    setInputContent(e.target.value);
    // console.log(e.target.value.length);
  };
  return (
    <StEditBox>
      <StEdit>
        <StEditTitle>Edit Profile</StEditTitle>
        <StProfile>
          <StProfImg>
            {imageSrc && <StImg src={imageSrc} alt="프로필 이미지" />}
          </StProfImg>
          <StProfInfo>
            <StColumn>
              <h3 style={{ fontWeight: "400", margin: "12px 0px 12px 0px" }}>
                user nickname
              </h3>
              <StInputProfileImg
                accept="image/*"
                multiple=""
                type="file"
                id="profileFile"
                style={{ display: "none" }}
                onChange={onChangeProfileFile}
              />
              <StChangeBtn htmlFor="profileFile">프로필 사진바꾸기</StChangeBtn>
            </StColumn>
          </StProfInfo>
        </StProfile>
        <StInputForm>
          <StContent>
            <StFirst>이름</StFirst>
            <StSecond>
              <input></input>
            </StSecond>
          </StContent>
          <StContent>
            <StFirst>닉네임</StFirst>
            <StSecond>
              <input></input>
            </StSecond>
          </StContent>

          <StContent2>
            <StFixed>
              <StFirstIntro>소개</StFirstIntro>
              <StSecondIntro>
                <form>
                  <StTextarea
                    value={inputContent}
                    onChange={onTextarea}
                    maxLength="50"
                  />
                  <br />
                  <StTextCount>
                    <span id="byteInfo">{inputContent.length}</span> / 50
                  </StTextCount>
                </form>
              </StSecondIntro>
            </StFixed>
          </StContent2>
          <StSubmitBtn>제출</StSubmitBtn>
        </StInputForm>
      </StEdit>
    </StEditBox>
  );
};

export default EditProfile;
const StEditBox = styled.div`
  margin-left: 320px;
  @media screen and (max-width: 1300px) {
    margin-left: 250px;
  }
  @media screen and (max-width: 900px) {
    margin-left: 100px;
  }
`;
const StEdit = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  border-radius: 10px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
`;
const StEditTitle = styled.div`
  font-size: 40px;
  font-weight: 500;

  font-family: "Waterfall", cursive;
  margin-bottom: 20px;
`;
const StProfile = styled.div`
  height: 140px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
  left: 60px;
`;
const StProfImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  overflow: hidden;
`;
const StImg = styled.img`
  height: 100%;
  width: 150%;
`;

const StColumn = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StProfInfo = styled.div`
  width: 300px;
`;
const StInputProfileImg = styled.input``;
const StChangeBtn = styled.label`
  font-size: 12px;
  border: 0px;
  background-color: transparent;
  color: blue;
`;

const StInputForm = styled.div`
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 10px 0px;
`;
const StFirst = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`;
const StSecond = styled.div`
  width: 300px;
`;

const StContent2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 10px 0px;
`;
const StFixed = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const StFirstIntro = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`;
const StSecondIntro = styled.div`
  width: 300px;
`;
const StTextarea = styled.textarea`
  width: 150px;
  height: 120px;
  resize: none;

  padding: 0px;
  box-sizing: border-box;
`;
const StTextCount = styled.div`
  width: 150px;
  color: #d3d3d3;
  display: flex;
  justify-content: flex-end;
`;
const StSubmitBtn = styled.button`
  margin-top: 30px;
  width: 80px;
  height: 60px;

  padding: 4px;
  border: 0px;
  border-radius: 100px;
  background-color: royalblue;
  color: white;
  font-weight: 700;
`;
