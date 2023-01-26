import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutSection>
            <MainDetailWrapper>
              <MainDetailContainer>
                안녕하세요
                <div>안녕하세요1</div>
                <div>안녕하세요</div>
                <div>안녕하세요</div>
                <div>안녕하세요</div>
                <div>안녕하세요</div>
                <div>안녕하세요</div>
                <div>안녕하세요7</div>
              </MainDetailContainer>
            </MainDetailWrapper>
          </MainLayoutSection>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </>
  );
};

export default Main;

const MainLayoutWrapper = styled.div`
  margin-left: auto;
  display: block;
  width: calc(100% -0px);
`;

const MainLayoutContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
  flex-grow: 1;
`;

const MainLayoutSection = styled.section`
  padding-top: 0;
  display: flex;
  flex-flow: row nowrap;
  max-width: calc(470px+ 64px + 319px);
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
`;

const MainDetailWrapper = styled.div`
  background: rgb(255, 255, 255);
  margin-top: 10px;
  transform: translateY(-56px);
  flex-shrink: 0;
  transition: transform 0.3s ease-out 0.2s;
  float: left;
  margin-right: 64px;
  max-width: 470px;
  width: 100%;
  display: block;
  font: inherit;
  font-size: 100%;
`;

const MainDetailContainer = styled.div`
  margin-top: calc(4px * 4);
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;
