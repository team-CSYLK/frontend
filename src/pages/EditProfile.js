import React, { useState } from "react";
import styled from "styled-components";

const EditProfile = () => {
  //미리보기
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
  //const [fileImg, setFileImg] = useState();
  const onChangeProfileFile = (e) => {
    profileImgToBase64(e.target.files[0]);
  };

  const onTextarea = () => {};
  return (
    <>
      <StEdit>
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
          <StFixed>
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
          </StFixed>
          <StContent>
            <StFirst>소개</StFirst>
            <StSecond>
              <form>
                <StTextarea onKeyUp={onTextarea} />
                <span id="byteInfo">0</span>/ 50
              </form>
            </StSecond>
          </StContent>
        </StInputForm>
      </StEdit>
    </>
  );
};

export default EditProfile;

const StEdit = styled.div`
  width: 500px;
  height: 800px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin-left: 200px;
`;
const StProfile = styled.div`
  height: 82px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  position: relative;
  left: 40px;
`;
const StProfImg = styled.div`
  width: 80px;
  height: 80px;
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
  height: 82px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StProfInfo = styled.div`
  width: 300px;
`;
const StInputProfileImg = styled.input``;
const StChangeBtn = styled.label`
  border: 0px;
  background-color: transparent;
  color: blue;
`;

const StInputForm = styled.div`
  height: 82px;

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
const StTextarea = styled.textarea`
  width: 156px;
  resize: vertical;
  padding: 0px;
  box-sizing: border-box;
`;
const StFixed = styled.div``;
