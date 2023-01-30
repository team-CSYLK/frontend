import React from "react";
import styled from "styled-components";

const MainCard = ({ post }) => {
  return (
    <>
      <MainArticle>
        <MainArticleDiv>
          <MainArticleHeader>
            <MainArticleProfile>
              {/* TODO: 이미지 받고 해봄 */}
              <div />
              <div> 닉네임</div>
            </MainArticleProfile>
          </MainArticleHeader>
          <MainArticleBody>
            <CardImg
              alt="kimdami"
              src="img/271606564_330827408893207_6648318583164176157_n.jpg"
            />
          </MainArticleBody>
          <MainArticleFooter>
            <CardFooterSection>
              <span>
                <CardFooterButton>
                  <div>
                    <CardFooterSvg
                      aria-label="좋아요"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                    </CardFooterSvg>
                  </div>
                </CardFooterButton>
              </span>
              <span>
                <CardFooterButton>
                  <div>
                    <CardFooterSvg
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
            </CardFooterSection>
            <CardFooterLikeCount>좋아요 수</CardFooterLikeCount>
            <CardFooterContent>
              내용 들 김다미가 김다미 궁시렁 궁시렁내용 들 김다미가 김다미
              궁시렁 궁시렁내용 들 김다미가 김다미 궁시렁
              궁시렁ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </CardFooterContent>
          </MainArticleFooter>
        </MainArticleDiv>
      </MainArticle>
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
