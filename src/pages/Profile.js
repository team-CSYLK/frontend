import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getProfile } from "../redux/modules/profileSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  // 프로필 편집으로 이동
  const navigate = useNavigate();
  const onEditProfileHandler = () => {
    navigate("/Edit");
  };

  const param = useParams();
  //url값을 통해서 param
  console.log(param.nickName);
  // 본인 확인을 위해서 nickName 불러오기
  const nickName = sessionStorage.getItem("nickname");

  // url에 있는 nickname과 동일한 프로필 불러오기
  useEffect(() => {
    dispatch(__getProfile(param.nickName));
  }, [dispatch]);
  const profileUser = useSelector((state) => state.profile.profiles);
  console.log(profileUser);
  return (
    <>
      <ProfileLayoutWrapper>
        <ProfileLayoutContainer>
          <ProfileContentHeader>
            <ProfileContentHeaderImageBox>
              <ProfileContentHeaderImageSize>
                <ProfileContentHeaderImage
                  src={profileUser.imageProfile}
                ></ProfileContentHeaderImage>
              </ProfileContentHeaderImageSize>
            </ProfileContentHeaderImageBox>
            <ProfileContentHeaderTextBox>
              <ProfileHeaderNicknameBox>
                <div> {profileUser.nickname} </div>
                <div>
                  {param.nickName === nickName && (
                    <button onClick={onEditProfileHandler}>프로필 편집</button>
                  )}
                </div>
              </ProfileHeaderNicknameBox>

              <div> 게시글 : {profileUser.postsCount}</div>
            </ProfileContentHeaderTextBox>
          </ProfileContentHeader>
          <ProfileContentTitle>
            <ProfileContentTitleBorder>
              <svg
                aria-label=""
                color="#262626"
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <rect
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  width="18"
                  x="3"
                  y="3"
                ></rect>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="9.015"
                  x2="9.015"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="14.985"
                  x2="14.985"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="21"
                  x2="3"
                  y1="9.015"
                  y2="9.015"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="21"
                  x2="3"
                  y1="14.985"
                  y2="14.985"
                ></line>
              </svg>
              <ProfileContentTitleText>게시물</ProfileContentTitleText>
            </ProfileContentTitleBorder>
          </ProfileContentTitle>
          <ProfileContentDetailBox>
            {profileUser.userPosts?.map((post) => (
              <InProfileCardImage key={post.postid} src={post.image} />
            ))}
          </ProfileContentDetailBox>
        </ProfileLayoutContainer>
        <div></div>
      </ProfileLayoutWrapper>
    </>
  );
};

export default Profile;
const ProfileLayoutWrapper = styled.div`
  background-color: rgb(250, 250, 250);
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  /* position: relative; */
  margin-left: 320px;
  @media screen and (max-width: 1300px) {
    margin-left: 250px;
  }
  @media screen and (max-width: 900px) {
    margin-left: 100px;
  }
`;

const ProfileLayoutContainer = styled.div`
  padding: 30px 20px 0;
  box-sizing: content-box;
  width: calc(100% - 40px);
  flex-grow: 1;
  margin: 0 auto 30px; //footer 넣을 공간

  width: 70%;
`;

const ProfileContentHeader = styled.div`
  margin-bottom: 44px;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ProfileContentHeaderImageBox = styled.div`
  margin-right: 30px;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  flex-direction: column;
  display: flex;
  position: relative;
`;
const ProfileContentHeaderImageSize = styled.div`
  margin-right: auto;
  margin-left: auto;
  border: 0;
  box-sizing: border-box;
  /* height: 100%; */
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  height: 150px;
  border-radius: 50%;
  /* width: 150px; */
`;

const ProfileContentHeaderTextBox = styled.div`
  flex-grow: 2;
  flex-basis: 30px;
  flex-shrink: 1;
  gap: 20px;
  font-size: 100%;
  min-width: 0;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
  color: rgb(38, 38, 38);
  align-items: stretch;
  position: relative;
  vertical-align: baseline;
`;

const ProfileHeaderNicknameBox = styled.div`
  flex-shrink: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  font-size: 18px;
  color: rgb(38, 38, 38);
  gap: 20px;
  div {
    flex-shrink: 1;
    /* background-color: red; */
    display: flex;
    align-items: center;
    flex-direction: row;
    position: relative;
  }
`;

const ProfileContentHeaderImage = styled.img`
  /* height: 150px; */
  height: 100%;
  object-fit: contain;
`;
const ProfileContentTitle = styled.div`
  font-weight: 700;
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  border-top: 1px solid rgb(219, 219, 219);
  letter-spacing: 1px;
  flex-direction: row;
  /* font-size: 0.75rem; */
  position: relative;
  /* color: #8e8e8e; */
  vertical-align: baseline;
`;
const ProfileContentTitleBorder = styled.div`
  border-top: 2px solid rgb(38, 38, 38);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin: 0 0 20px;
  padding-top: 15px;
`;
const ProfileContentTitleText = styled.div`
  text-align: center;
`;
const ProfileContentDetailBox = styled.div`
  direction: ltr;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
`;

const InProfileCardImage = styled.img`
  object-fit: contain;
  max-width: 350px;
  min-width: 300px;
  width: 100%;
`;
