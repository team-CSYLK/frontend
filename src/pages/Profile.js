import React from "react";
import styled from "styled-components";
const Profile = () => {
  return (
    <>
      <ProfileLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutSection>
            <MainDetailWrapper>
              <MainDetailContainer>dd</MainDetailContainer>
            </MainDetailWrapper>
          </MainLayoutSection>
        </MainLayoutContainer>
      </ProfileLayoutWrapper>
    </>
  );
};

export default Profile;
const ProfileLayoutWrapper = styled.div`
  background-color: rgb(250, 250, 250);
`;

const MainLayoutContainer = styled.div`
  min-height: 100vh;
  min-width: 80vw;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
  flex-grow: 1;
  /* background-color: red; */
`;

const MainLayoutSection = styled.div`
  padding-top: 0;
  display: flex;
  flex-flow: row nowrap; //row 와 nowrp을 합침
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  vertical-align: baseline;
  width: 100%;
  height: 100vh;
  /* background: rgb(255, 255, 255); */
  flex-flow: row nowrap;
  /* flex-shrink: 1; */
`;

const MainDetailWrapper = styled.div`
  background: rgb(255, 255, 255);
  margin-top: 10px;
  transform: translateY(0px);
  flex-shrink: 1;
  transition: transform 0.3s ease-out 0.2s;
  float: left;
  margin-right: 64px;
  max-width: 470px;
  width: 100%;
  display: flex;
  font: inherit;
  font-size: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  /* overflow-x: none; */
`;

const MainDetailContainer = styled.div`
  margin-top: 16px;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;
