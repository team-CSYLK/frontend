import React, { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import {
  __getEditFormData,
  __putEditFormData,
} from "../redux/modules/editSlice";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

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
  //초기값 설정
  const [name, setName] = useState(editProfiles.name);

  // console.log("name", name);
  const onSetName = (e) => {
    setName(e.target.value);
  };

  const [nickname, setNickname] = useState(editProfiles?.nickname);
  const onSetNickame = (e) => {
    setNickname(e.target.value);
  };

  //편집 미리보기
  const [imageProfile, setImageProfile] = useState(false);
  const profileImgToBase64 = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageProfile(reader.result);
        resolve();
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
  const [introduce, setIntroduce] = useState("");

  //소개 글자수세기
  const onTextarea = (e) => {
    setIntroduce(e.target.value);
  };

  const dispatch = useDispatch();
  const onEdithandler = (e) => {
    e.preventDefault();

    // 이미지데이터, 게시글내용, 위치
    formData.append("imageProfile", fileImg);
    formData.append("introduce", introduce);
    formData.append("nickname", nickname);
    formData.append("name", name);

    // for (const form of formData) {
    //   console.log("form최종", form);
    // }

    dispatch(__putEditFormData(formData));
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    dispatch(__getEditFormData());
  }, [dispatch]);
  useEffect(() => {
    setName(editProfiles.name);
    setNickname(editProfiles.nickname);
    setIntroduce(editProfiles.introduce || "");
  }, [editProfiles]);
  //의존성 배열 dependency array

  return (
    <StEditBox>
      <StEdit>
        <StEditTitle>Edit Profile</StEditTitle>
        <StEditform onSubmit={onEdithandler}>
          <StProfile>
            <StProfImg>
              {fileImg ? (
                <StImg src={imageProfile} alt="new 프로필 이미지" />
              ) : (
                <StImg src={editProfiles?.imageProfile} alt="프로필 이미지" />
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
                <StP> * 영어, 숫자 3글자 이상</StP>
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
                  <StEmojiRow>
                    <StSvgEmoji
                      aria-label="이모티콘"
                      className="_ab6-"
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="20"
                      role="img"
                      viewBox="0 0 24 24"
                      width="20"
                      onClick={() => setModalIsOpen(true)}
                    >
                      <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                    </StSvgEmoji>

                    <StTextCount>
                      <span id="byteInfo">{introduce?.length}</span> / 50
                    </StTextCount>
                  </StEmojiRow>
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
  height: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
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
  position: relative;
  top: 20px;
`;
const StP = styled.p`
  font-size: 10px;
  color: gray;
  position: relative;
  top: -10px;
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
const StEmojiRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 6px;
  margin-left: 0px;
`;
const StSvgEmoji = styled.svg``;
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
