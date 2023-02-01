import React from "react";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../redux/modules/postsSlice";
const Main = () => {
  const dispatch = useDispatch();
  // // 서버에서 받아오는것
  const { list } = useSelector((state) => state.post);
  const lists = list;
  // console.log(lists, "main에서 내려주는 좋아요 상태");
  // 임시 데이터
  // const lists = [
  //   {
  //     postId: 2,
  //     userId: 1,
  //     nickname: "김동동",
  //     imageProfile:
  //       "https://insanegram.s3.ap-northeast-2.amazonaws.com/users-image/1675151031209.jpg",
  //     imageUrl:
  //       "https://insanegram.s3.ap-northeast-2.amazonaws.com/posts-image/1675151844196.png",
  //     postContent: "오늘 여기서 밥을 먹었다",
  //     likes: 22,
  //     isLiked: true,
  //     place: "경리단",
  //     createdAt: "1분전",
  //   },
  //   {
  //     postId: 3,
  //     userId: 1,
  //     nickname: "김동동",
  //     imageProfile:
  //       "https://insanegram.s3.ap-northeast-2.amazonaws.com/users-image/1675151031209.jpg",
  //     imageUrl:
  //       "https://insanegram.s3.ap-northeast-2.amazonaws.com/posts-image/1675151844196.png",
  //     postContent: "오늘 여기서 bob을 먹었다",
  //     likes: 22,
  //     isLiked: true,
  //     place: "경리단",
  //     createdAt: "10분전",
  //   },
  //   {
  //     postId: 4,
  //     userId: 1,
  //     nickname: "김동동",
  //     imageProfile:
  //       "https://insanegram.s3.ap-northeast-2.amazonaws.com/users-image/1675151031209.jpg",
  //     imageUrl:
  //       "https://insanegram.s3.ap-northeast-2.amazonaws.com/posts-image/1675151844196.png",
  //     postContent: "오늘 여기서 죽었다",
  //     likes: 22,
  //     isLiked: true,
  //     place: "경리단",
  //     createdAt: "20분전",
  //   },
  // ];

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
                {lists?.map((post) => (
                  <MainCard key={post.postId} post={post} />
                ))}
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
