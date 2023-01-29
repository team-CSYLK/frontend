import React from "react";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../redux/modules/postsSlice";
const Main = () => {
  const dispatch = useDispatch();
  // const { list } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  return (
    <>
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutSection>
            <MainDetailWrapper>
              <MainDetailContainer>
                {/* TODO: 여기다 맵 돌릴 것 */}
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
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
  /* z-index: 1; // 먼저 보이게 하는거 */
  /* height: 100vh; */
  /* background-color: red; */
  /* margin-left: auto; */
  /* display: block; */
  /* width: 100% -0px; */
`;

const MainLayoutContainer = styled.div`
  min-height: 100vh;
  min-width: 80vw;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
  flex-grow: 1;
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
  background: rgb(255, 255, 255);
  flex-flow: row nowrap;
  flex-shrink: 1;
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
