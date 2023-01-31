import React, { useState, useRef } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addPostFormData } from "../../redux/modules/addPostSlice";

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

export const preventBrowserDefaults = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const AddPost = () => {
  const dispatch = useDispatch();
  const { editProfiles } = useSelector((state) => state.editSlice);
  const [nickname, setNickname] = useState(editProfiles?.nickname);

  // 파일첨부 기능
  //미리보기
  const [imageUrl, setImageUrl] = useState();
  const encodeFileToBase64 = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageUrl(reader.result);
        resolve();
        console.log("setImageUrl", reader.result);
      };
    });
  };

  const [fileImg, setFileImg] = useState();

  // let formData;
  const formData = new FormData();
  const onChangeFile = (e) => {
    encodeFileToBase64(e.target.files[0]);
    const formImg = e.target.files[0];
    setFileImg(formImg);
    console.log("이미지파일전송", formImg);
    formData.append("file", formImg);
    //콘솔찍어보기
    // for (const key of formData.keys()) {
    //   console.log("key", key);
    // }
  };

  const onClickFormData = (e) => {
    e.preventDefault();

    const newList = {
      imageUrl,
      postContent,
      place,
    };

    // 이미지데이터, 게시글내용, 위치
    formData.append("imageUrl", fileImg);
    formData.append("postContent", postContent);
    formData.append("place", place);

    // for (const form of formData) {
    //   console.log("form최종", form);
    // }

    dispatch(__addPostFormData(formData));
  };
  //드래그앤드롭 기능 // DragZone이라는 라이브러리가 있음(참고)
  let [dragOverlay, setDragOverlay] = useState(false);
  let dragCounter = useRef(0);

  const handleDrag = (e) => {
    preventBrowserDefaults(e);
  };
  const handleDragIn = (e) => {
    preventBrowserDefaults(e);
    dragCounter.current++;
    if (get(e, "dataTransfer.items.length") > 0) {
      setDragOverlay(true);
    }
  };
  const handleDragOut = (e) => {
    preventBrowserDefaults(e);
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setDragOverlay(false);
    }
  };
  const handleDrop = (e) => {
    const files = get(e, "dataTransfer.files");
    preventBrowserDefaults(e);
    setDragOverlay(false);
    dragCounter.current = 0;

    fileReader(files);
  };

  const fileReader = (files) => {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (loadEvt) => {
      setImageUrl(loadEvt.target.result);
    };
  };

  const dragOverlayClass = dragOverlay ? "overlay" : "";

  // next 버튼 눌렀을 때
  const [sendPost, setSendPost] = useState(false);
  const onChangePost = (imageUrl) => {
    if (imageUrl) {
      setSendPost(!sendPost);
    }
  };

  // textarea  상태
  const [postContent, setPostContent] = useState("");
  //글자수 세기
  const onTextarea = (e) => {
    setPostContent(e.target.value);
  };

  // 위치 상태
  const [place, setPlace] = useState("");

  // 위치 입력 숫자, 특수문자제외 유효성
  const onInputPlace = (e) => {
    //e.preventDefault();
    const curValue = e.currentTarget.value;
    const notPlace = /[~!@#$%";'^,&*()_+|</>=>`?:{[\\}0-9]/g;
    setPlace(curValue.replace(notPlace, ""));
  };

  //세션에서 닉네임과 프로필사진 가져오기
  const nickName = sessionStorage.getItem("nickname");
  // console.log(nickName);
  const myImg = sessionStorage.getItem("myimg");
  return (
    <>
      {!sendPost && (
        <StAddPost>
          <StModal>
            <StBoxSize
              role="dialog"
              className="x1ja2u2z x1afcbsf x1a2a7pz x6ikm8r x10wlt62 x71s49j x78zum5 xdt5ytf x1n2onr6 xl56j7k x6s0dn4"
            >
              <div
                className="x7r02ix xf1ldfh x131esax xdajt7p xxfnqb6 xb88tzc xw2csxc x1odjw0f x5fp0pe"
                role="dialog"
              >
                <StBox>
                  <StAddTitle className="_ac78" tabindex="-1">
                    <StTitleRow>
                      {/* 뒤로가기는 나중에 구현 */}
                      <StGoBack
                      // onClick={onGoBackMain}
                      // style={{ display: "none" }}
                      >
                        {/* <svg
                          aria-label="돌아가기"
                          className="_ab6-"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <line
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="2.909"
                            x2="22.001"
                            y1="12.004"
                            y2="12.004"
                          ></line>
                          <polyline
                            fill="none"
                            points="9.276 4.726 2.001 12.004 9.276 19.274"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polyline>
                        </svg> */}
                      </StGoBack>

                      <StAddText>새 게시물 만들기</StAddText>
                      <StSend onClick={onChangePost} disabled={!imageUrl}>
                        Next
                      </StSend>
                    </StTitleRow>
                  </StAddTitle>
                  {/* 파일첨부버튼이랑  */}
                  <StDnDContainer
                    className={`drag-container ${dragOverlayClass}`}
                    onDragEnter={handleDragIn}
                    onDragLeave={handleDragOut}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <StInputImg className="x15wfb8v x3aagtl x6ql1ns x1iyjqo2 xs83m0k xdl72j9 xqbdwvv x1cwzgcd">
                      <StForm
                        enctype="multipart/form-data"
                        method="POST"
                        role="presentation"
                        //onSubmit={onClickFormData}
                      >
                        {/* 이미지넣는 아이콘 */}
                        {!imageUrl && (
                          <StSvg
                            aria-label="이미지나 동영상과 같은 미디어를 나타내는 아이콘"
                            className="_ab6-"
                            role="img"
                            viewBox="0 0 97.6 77.3"
                            width="96"
                            height="77"
                          >
                            <path
                              d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                              fill="currentColor"
                            ></path>
                          </StSvg>
                        )}
                        {/* 파일첨부 버튼 */}
                        <StClickImg>
                          {/* 버튼클릭시 이미지 미리보기 */}
                          <StPrivew>
                            {imageUrl && (
                              <StImg src={imageUrl} alt="preview-img" />
                            )}
                          </StPrivew>

                          <StInput
                            accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime"
                            className="_ac69"
                            multiple=""
                            type="file"
                            id="preview"
                            style={{ display: "none" }}
                            onChange={onChangeFile}
                          />
                          {!imageUrl && (
                            <StBlueBtn
                              htmlFor="preview"
                              className="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p _ab9x _aba7 _abcm"
                            >
                              컴퓨터에서 선택
                            </StBlueBtn>
                          )}
                        </StClickImg>

                        {!imageUrl && (
                          <Stdiv>사진과 동영상을 여기에 끌어다 놓으세요</Stdiv>
                        )}
                      </StForm>
                    </StInputImg>
                  </StDnDContainer>
                </StBox>
              </div>
            </StBoxSize>
          </StModal>
        </StAddPost>
      )}
      {sendPost && (
        <StAddPost2>
          <StBox2>
            <StAddTitle2>
              <StTitleRow2>
                <StGoBack onClick={onChangePost}>
                  <svg
                    aria-label="돌아가기"
                    className="_ab6-"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="2.909"
                      x2="22.001"
                      y1="12.004"
                      y2="12.004"
                    ></line>
                    <polyline
                      fill="none"
                      points="9.276 4.726 2.001 12.004 9.276 19.274"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polyline>
                  </svg>
                </StGoBack>
                <StAddText>새 게시물 만들기</StAddText>
                <StSend2 htmlFor="submit">Upload</StSend2>
              </StTitleRow2>
            </StAddTitle2>
            <StFormData
              method="post"
              action="uploadForm"
              enctype="multipary/form-data"
              target="_blank"
              onSubmit={onClickFormData}
            >
              <StSubmitBtn
                id="submit"
                type="submit"
                style={{ display: "none" }}
              >
                Upload
              </StSubmitBtn>
              <StInputImg2>
                <StLeft>
                  <StPrivew>
                    <StImg2 src={imageUrl} alt="preview-img" />
                  </StPrivew>
                </StLeft>
                <StRight>
                  <StMyProfile>
                    <StProfileImg src={`${myImg}`} />
                    <StProfileNicknname>{nickName}</StProfileNicknname>
                  </StMyProfile>
                  <StTextarea
                    type="text"
                    placeholder="문구입력..."
                    value={postContent}
                    onChange={onTextarea}
                    maxLength="2200"
                  />
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
                    >
                      <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                    </StSvgEmoji>
                    <StTextCount>
                      <span>{postContent.length}</span> / 2200
                    </StTextCount>
                  </StEmojiRow>
                  <StLoca>
                    <StLocaInput
                      style={{ border: "0px" }}
                      placeholder="위치 추가"
                      type="text"
                      height="24"
                      width="130"
                      value={place}
                      onChange={onInputPlace}
                    />

                    <StLocaSvg height="24" width="24">
                      <path
                        fill="gray"
                        d="M12.053 8.105a1.604 1.604 0 1 0 1.604 1.604 1.604 1.604 0 0 0-1.604-1.604Zm0-7.105a8.684 8.684 0 0 0-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 0 0 1.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0 0 12.053 1Zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0 1 13.417 0c0 3.985-3.944 8.538-6.709 11.002Z"
                      ></path>
                    </StLocaSvg>
                  </StLoca>
                </StRight>
              </StInputImg2>
            </StFormData>
          </StBox2>
        </StAddPost2>
      )}
    </>
  );
};

export default AddPost;

const StAddPost = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
const StModal = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;
const StBoxSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 585px;
  height: 620px;
`;
const StBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //border: 1px solid gray;
  border-radius: 20px;
  height: 550px;
  width: 500px;
  max-width: 800px;
  min-width: 428px;
  min-height: 340px;
  max-height: 620px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
`;
const StAddTitle = styled.div`
  height: 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #a9a9a9;
`;
const StTitleRow = styled.div`
  width: 460px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  right: 10px;
`;

const StAddText = styled.div`
  font-size: 16px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//Next 버튼
const StSend = styled.button`
  border: 0px;
  background-color: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
  :disabled {
    cursor: default;
    opacity: 0.3;
    color: black;
  }
  color: blue;
  font-weight: 600;
`;

const StInputImg = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StForm = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: inherit;
`;
const StSvg = styled.svg`
  color: #262626;
  fill: #262626;

  position: relative;
  top: -60px;
  z-index: 0;
`;

const StBlueBtn = styled.label`
  background-color: #3399ff;
  border: 0px;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  position: relative;
  top: 20px;

  padding: 10px 20px;
  z-index: 9;

  cursor: pointer;
`;
const StInput = styled.input`
  /* position: relative;
  top: 26px; */
`;

const StClickImg = styled.div``;
const Stdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -60px;
`;
const StDnDContainer = styled.div`
  border-radius: 20px;
  object-fit: cover;
  background-color: #fffafa;
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
`;
const StPrivew = styled.div`
  border-radius: 20px;
`;
const StImg = styled.img`
  position: relative;
  top: 2px;

  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 500px;
`;
//
//
//
//
//
// addPost2 스타일
const StAddPost2 = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;
const StBox2 = styled.div`
  width: 800px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 1px solid gray;
  border-radius: 20px;
  box-shadow: 1px 2px 4px 1px #dcdcdc;
`;
const StAddTitle2 = styled.div`
  border-bottom: 1px solid #a9a9a9;

  border-radius: 20px 20px 0px 0px;
  height: 50px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StTitleRow2 = styled.div`
  width: 760px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  right: 10px;
`;
// 뒤로가기버튼
const StGoBack = styled.button`
  height: 24px;

  cursor: pointer;
  border: 0px;
  background-color: transparent;
`;
//Upload 버튼
const StSend2 = styled.label`
  border: 0px;
  background-color: transparent;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
  color: blue;
  font-weight: 600;
`;
const StSubmitBtn = styled.button``;
const StFormData = styled.form``;

const StInputImg2 = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StLeft = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fffafa;
  border-right: 1px solid #a9a9a9;
  border-radius: 0px 0px 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const StImg2 = styled.img`
  position: relative;
  top: 3px;
  /* border-radius: 0px 0px 0px 20px; */
  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 500px;
  object-fit: cover;
`;
const StRight = styled.div`
  width: 300px;
  height: 500px;
`;

const StMyProfile = styled.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
`;
const StProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid gray;
  border-radius: 100px;
`;
const StProfileNicknname = styled.div`
  height: 24px;
  margin-left: 20px;
`;
const StTextarea = styled.textarea`
  width: 296px;
  height: 300px;
  border: 0px;

  resize: none;
`;
const StEmojiRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 6px;
`;
const StSvgEmoji = styled.svg`
  cursor: pointer;
`;
const StTextCount = styled.div`
  color: #d3d3d3;
  font-size: 13px; ;
`;
const StLoca = styled.label`
  width: 286px;
  height: 30px;
  color: gray;
  background-color: transparent;
  border: 0px;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px;
`;
const StLocaInput = styled.input`
  width: 130px;
`;
const StLocaSvg = styled.svg`
  scale: 90%;
`;
