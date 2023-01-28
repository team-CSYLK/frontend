import React from "react";
import styled from "styled-components";
const Profile = () => {
  return (
    <>
      <ProfileLayoutWrapper>
        <ProfileLayoutContainer>
          <ProfileContentHeader>프로필</ProfileContentHeader>
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
          <ProfileContentDetailBox>카드들</ProfileContentDetailBox>
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

const ProfileContentHeaderInbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
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
  flex-direction: column;
  align-items: stretch;
  min-height: 0;
  min-width: 0;
  display: flex;
  /* align-items: center; */
`;
