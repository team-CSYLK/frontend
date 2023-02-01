import React from "react";
import styled from "styled-components";
import Like from "./Like";
import { useState } from "react";
import { useNavigate } from "react-router";
import ReactModal from "react-modal";
import Detail from "../pages/Detail";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost } from "../redux/modules/postsSlice";
const MainCard = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteBtn = (e) => {
    e.preventDefault();
    dispatch(__deletePost(post.postId));
  };
  //데이터 예시
  const [totalLike, setTotalLike] = useState(post.likes);

  const moveToProfile = () => {
    navigate(`/Main/${post.nickname}`);
  };

  // console.log(post.isLiked, post.postId);
  // {postId: 2, userId: 1, nickname: '김동동', imageProfile: 'https://insanegram.s3.ap-northeast-2.amazonaws.com/users-image/1675151031209.jpg', imageUrl: 'https://insanegram.s3.ap-northeast-2.amazonaws.com/posts-image/1675151844196.png', …}

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <MainArticle>
        <MainArticleDiv>
          <MainArticleHeader>
            <MainArticleProfile>
              <ProfileContentHeaderImageBox>
                <ProfileContentHeaderImageSize>
                  <ProfileContentHeaderImage src={post.imageProfile} />
                </ProfileContentHeaderImageSize>
              </ProfileContentHeaderImageBox>

              <PostNickName onClick={moveToProfile}>
                {post.nickname}
              </PostNickName>
              <PostCreatAt>{post.createdAt}</PostCreatAt>
            </MainArticleProfile>
          </MainArticleHeader>
          <MainArticleBody>
            <CardImg alt="대충 이미지 불러오기 실패" src={post.imageUrl} />
          </MainArticleBody>
          <MainArticleFooter>
            <CardFooterSection>
              <span>
                <CardFooterButton>
                  <div>
                    <Like
                      isLiked={post.isLiked}
                      postId={post.postId}
                      setTotalLike={setTotalLike}
                      likes={post.likes}
                    />
                    {/* <CardFooterSvg
                      aria-label="좋아요"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                    </CardFooterSvg> */}
                  </div>
                </CardFooterButton>
              </span>
              <span>
                <CardFooterButton>
                  <div>
                    <CardFooterSvg
                      onClick={() => setModalIsOpen(true)}
                      aria-label="댓글 달기"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </CardFooterSvg>
                  </div>
                </CardFooterButton>
              </span>
              <span>
                <CardFooterButton>
                  <div>
                    <DeleteBtn onClick={onDeleteBtn}>
                      <Deletesvg
                        aria-label="삭제"
                        height="24"
                        role="img"
                        width="24"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                          fillRule="nonzero"
                        />
                      </Deletesvg>
                    </DeleteBtn>
                  </div>
                </CardFooterButton>
              </span>
            </CardFooterSection>
            <CardFooterLikeCount>좋아요 {totalLike}개</CardFooterLikeCount>
            <CardFooterContent>{post.postContent}</CardFooterContent>
          </MainArticleFooter>
        </MainArticleDiv>
      </MainArticle>
      <ReactModal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(100, 100, 100, 0.45)",
            zIndex: 10,
          },
          content: {
            position: "fixed",
            // marginLeft: "auto",
            // marginRight: "auto",
            // marginTop: "250px",
            margin: "auto",
            border: "0px",
            width: "1000px",
            height: "820px",
            borderRadius: "4px",
            padding: "0px",
            display: "flex",
            // backgroundColor: "transparent",

            // marginLeft: "100px",
          },
        }}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <Detail postId={post.postId} />
      </ReactModal>
    </>
  );
};

export default MainCard;

const MainArticle = styled.article`
  z-index: 1;
  margin-bottom: 12px;
  padding-bottom: 20px !important;
  border-radius: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  /* border-bottom: 1px solid rgb(var(--ig-separator)); */
  border-bottom: 1px solid rgb(219, 219, 219);
  max-height: inherit;
  max-width: inherit;
  margin-left: 350px;
  margin-right: 350px;
  @media screen and (max-width: 900px) {
    margin-left: 100px;
    margin-right: 100px;
  }
  /* background-color: red; */
  /* position: relative; */
`;

const MainArticleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  position: relative;
  /* max-width: 600px; */
`;

const MainArticleHeader = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom: none;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;

const MainArticleProfile = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: calc(100% - 48px);
  position: relative;
  padding: unset;
  margin: 8px 4px 8px 5px;
  gap: 5px;
`;

const MainArticleBody = styled.div`
  /* background-color: rgb(255, 255, 255); */
`;

const MainArticleFooter = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  position: relative;
  border-radius: 8px;

  /* background-color: rgb(255, 255, 255); */
  /* width: 100%; */
`;

const CardImg = styled.img.attrs((props) => ({
  src: `${props.src}`,
  alt: `${props.alt}`,
}))`
  object-fit: contain;
  max-width: 800px;
  min-width: 400px;
  width: 100%;
  border-radius: 5px;
  /* width: 500px;
  height: 300px; */
  /* border-radius: 20px; */
  margin-bottom: 10px;
`;

const CardFooterSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  padding-bottom: 6px;
`;
const CardFooterButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 8px;
`;
const CardFooterSvg = styled.svg`
  color: rgb(38, 38, 38);
  fill: rgb(38, 38, 38);
  &:hover {
    color: rgb(142, 142, 142);
    fill: rgb(142, 142, 142);
  }
`;
const DeleteBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0px;
  width: 24px;
  height: 24px;
  position: relative;
  left: 280px;
`;
const Deletesvg = styled.svg`
  position: relative;
  top: -3px;
  left: -8px;
  scale: 110%;
  color: rgb(38, 38, 38);
  fill: rgb(38, 38, 38);
  &:hover {
    color: rgb(63, 75, 255);
    fill: rgb(63, 75, 255);
  }
`;

const CardFooterLikeCount = styled.div`
  font-weight: 900;
  font-size: 14px;
  line-height: 18px;
  padding-left: 7px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif; ;
`;

const CardFooterContent = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding-left: 7px;
  padding-right: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  word-break: break-all; // 줄 바꿈 시키는 css
`;
const ProfileContentHeaderImageBox = styled.div`
  margin-right: 10px;
  margin-left: 5px;
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
  height: 40px;
  border-radius: 50%;
  /* width: 150px; */
`;
const ProfileContentHeaderImage = styled.img`
  /* height: 150px; */
  height: 100%;
  object-fit: contain;
`;

const PostNickName = styled.div`
  font-weight: 700;
  cursor: pointer;
`;

const PostCreatAt = styled.div`
  font-size: 12x;
  font-weight: 300;
`;
