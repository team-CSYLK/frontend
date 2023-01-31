import React, { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import {
  __getEditFormData,
  __putEditFormData,
} from "../redux/modules/editSlice";
import { useDispatch, useSelector } from "react-redux";

const config = {
  allowedFileFormats: ["image/jpeg", "image/jpg", "image/png"],
  fileSizeMBLimit: 20,
  filesLimit: 1,
};
export const fileValidator = (files, config) => {
  const { allowedFileFormats, fileSizeMBLimit, filesLimit } = config;
  const { length } = files;
  const { size, type } = files[0];
  let err = false;
  let result = {
    isValidFile: false,
    errVal: err,
  };
  if (length === 0) {
    return result;
  } else if (length > filesLimit) {
    err =
      filesLimit > 1
        ? `Only ${filesLimit} files are allowed to upload`
        : `Only one file is allowed to upload`;
  } else if (!allowedFileFormats.includes(type)) {
    err = "File format must be either png or jpg";
  } else if (size / 1024 / 1024 > fileSizeMBLimit) {
    err = `File size exceeded the limit of ${fileSizeMBLimit}MB`;
  } else {
    result.isValidFile = true;
  }
  result.errVal = err;
  return result;
};

const EditProfile = () => {
  // 서버에서 데이터 가져올때
  const { editProfiles } = useSelector((state) => state.editSlice);
  const [name, setName] = useState(editProfiles?.name);

  console.log("name", name);
  const onSetName = (e) => {
    setName(e.target.value);
  };

  const [nickname, setNickname] = useState(editProfiles?.nickname);
  const onSetNickame = (e) => {
    setNickname(e.target.value);
  };

  //편집 미리보기
  const [imageUrl, setImageUrl] = useState(false);
  const profileImgToBase64 = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageUrl(reader.result);
        resolve();
        //console.log("setImageUrl", reader.result);
      };
    });
  };

  const [fileImg, setFileImg] = useState();

  // let formData;
  const formData = new FormData();
  const onChangeProfileFile = (e) => {
    profileImgToBase64(e.target.files[0]);
    const formImg = e.target.files[0];
    setFileImg(formImg);
    //console.log("이미지파일전송", formImg);
    formData.append("file", formImg);
    //콘솔찍어보기
    // for (const key of formData.keys()) {
    //   console.log("key", key);
    // }
  };

  // 소개 상태
  const [introduce, setIntroduce] = useState(editProfiles?.introduce);

  //소개 글자수세기
  const onTextarea = (e) => {
    setIntroduce(e.target.value);
  };

  const dispatch = useDispatch();
  const onEdithandler = (e) => {
    e.preventDefault();

    const newList = {
      imageUrl,
      introduce,
      nickname,
      name,
    };

    // 이미지데이터, 게시글내용, 위치
    formData.append("imageUrl", fileImg);
    formData.append("introduce", introduce);
    formData.append("nickname", nickname);
    formData.append("name", name);

    // for (const form of formData) {
    //   console.log("form최종", form);
    // }

    dispatch(__putEditFormData(formData));
  };

  useEffect(() => {
    dispatch(__getEditFormData());
  }, [dispatch]);

  return (
    <StEditBox>
      <StEdit>
        <StEditTitle>Edit Profile</StEditTitle>
        <StEditform onSubmit={onEdithandler}>
          <StProfile>
            <StProfImg>
              {fileImg ? (
                <StImg src={imageUrl} />
              ) : (
                <StImg src={editProfiles?.imageUrl} alt="프로필 이미지" />
              )}
            </StProfImg>
            <StProfInfo>
              <StColumn>
                <StNicknameSpan>{editProfiles?.nickname}</StNicknameSpan>
                <StInputProfileImg
                  accept="image/*"
                  multiple=""
                  type="file"
                  id="profileFile"
                  style={{ display: "none" }}
                  onChange={onChangeProfileFile}
                />
                <StChangeBtn htmlFor="profileFile">
                  프로필 사진바꾸기
                </StChangeBtn>
              </StColumn>
            </StProfInfo>
          </StProfile>
          <StInputData>
            <StContent>
              <StFirst>name</StFirst>
              <StSecond>
                <StName value={name} onChange={onSetName}></StName>
              </StSecond>
            </StContent>
            <StContent>
              <StFirst>nickname</StFirst>
              <StSecond2>
                <StNickname
                  value={nickname}
                  onChange={onSetNickame}
                ></StNickname>
              </StSecond2>
            </StContent>

            <StContent2>
              <StFixed>
                <StFirstIntro>소개</StFirstIntro>
                <StSecondIntro>
                  <StTextarea
                    value={introduce}
                    onChange={onTextarea}
                    maxLength="50"
                  >
                    {editProfiles?.introduce}
                  </StTextarea>
                  <br />
                  <StTextCount>
                    <span id="byteInfo">{introduce?.length}</span> / 50
                  </StTextCount>
                </StSecondIntro>
              </StFixed>
            </StContent2>
            <StSubmitBtn type="submit">제출</StSubmitBtn>
          </StInputData>
        </StEditform>
      </StEdit>
    </StEditBox>
  );
};

export default EditProfile;
const StEditBox = styled.div`
  /* margin-left: 320px;
  @media screen and (max-width: 1300px) {
    margin-left: 250px;
  }
  @media screen and (max-width: 900px) {
    margin-left: 100px;
  } */
  margin: "auto";
  border: "0px";
  border-radius: "20px";
`;
const StEdit = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 85px;
  border-radius: 20px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
`;
const StEditTitle = styled.div`
  font-size: 40px;
  font-weight: 500;

  font-family: "Waterfall", cursive;
  margin-bottom: 20px;
`;
const StEditform = styled.form``;
const StName = styled.input``;
const StNickname = styled.input``;
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
  position: relative;
  top: 20px;
`;

const StProfInfo = styled.div`
  width: 300px;
`;
const StNicknameSpan = styled.span`
  margin-bottom: 4px;
`;
const StInputProfileImg = styled.input``;
const StChangeBtn = styled.label`
  font-size: 12px;
  border: 0px;
  background-color: transparent;
  color: blue;

  cursor: pointer;
`;

const StInputData = styled.div`
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
const StSecond2 = styled.div`
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
  cursor: pointer;
`;
