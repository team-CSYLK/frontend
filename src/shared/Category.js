import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import ReactModal from "react-modal";
import { useState } from "react";
import AddPost from "../pages/components/AddPost";
import AddPost2 from "../pages/components/AddPost2";
const Category = () => {
  // 로그인 페이지에서만 카테고리 보이지 않기
  const locationNow = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(modalIsOpen);
  if (locationNow.pathname === "/") return null;
  // url 은 일반적으로 소문자로 인식되는데, relocation의 경우 대문자로 보낼 수 있음.
  if (locationNow.pathname === "/SignNick") return null;
  if (locationNow.pathname === "/signnick") return null;
  if (locationNow.pathname === "/kakaologin") return null;
  const logOut = () => {
    sessionStorage.clear();
    // dispatch(checkLogout());
    window.location.href = "/";
  };
  const nickName = sessionStorage.getItem("nickname");
  console.log(nickName);

  return (
    <>
      <CategoryWrapper>
        <Logo />
        {/* TODO: 로고 컴퍼넌트에  직접가서 사이즈 조절해야 함. */}
        <CategoryOutBox>
          <CategoryBox>
            <CategoryEachBox>
              <CategoryEachLink href="/Main" role="link" tabindex="0">
                <CategoryInLink>
                  <div>
                    <CategoryInDiv>
                      <CategoryDbInDiv>
                        <CategorySvg
                          aria-label="홈"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
                        </CategorySvg>
                      </CategoryDbInDiv>
                    </CategoryInDiv>
                  </div>
                  <CategoryWordBox>
                    <div>
                      <CategoryEachWord>홈</CategoryEachWord>
                    </div>
                  </CategoryWordBox>
                </CategoryInLink>
              </CategoryEachLink>
            </CategoryEachBox>
          </CategoryBox>
          {/* 만들기 */}
          <CategoryBox>
            <CategoryEachBox>
              <CategoryEachLink onClick={() => setModalIsOpen(true)}>
                <CategoryInLink>
                  <div>
                    <CategoryInDiv>
                      <CategoryDbInDiv>
                        <CategorySvg
                          aria-label="새로운 게시물"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                          <line
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="6.545"
                            x2="17.455"
                            y1="12.001"
                            y2="12.001"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="12.003"
                            x2="12.003"
                            y1="6.545"
                            y2="17.455"
                          ></line>
                        </CategorySvg>
                      </CategoryDbInDiv>
                    </CategoryInDiv>
                  </div>
                  <CategoryWordBox>
                    <div>
                      <CategoryEachWord>만들기</CategoryEachWord>
                    </div>
                  </CategoryWordBox>
                </CategoryInLink>
              </CategoryEachLink>
            </CategoryEachBox>
          </CategoryBox>
          <CategoryBox>
            <CategoryEachBox>
              <CategoryEachLink role="link" tabindex="0">
                {/*TODO: 여기다 메시지 주소 달아야 함  */}
                <CategoryInLink>
                  <div>
                    <CategoryInDiv>
                      <CategoryDbInDiv>
                        <CategorySvg
                          aria-label="Direct"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <line
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="22"
                            x2="9.218"
                            y1="3"
                            y2="10.083"
                          ></line>
                          <polygon
                            fill="none"
                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polygon>
                        </CategorySvg>
                      </CategoryDbInDiv>
                    </CategoryInDiv>
                  </div>
                  <CategoryWordBox>
                    <div>
                      <CategoryEachWord>메시지</CategoryEachWord>
                    </div>
                  </CategoryWordBox>
                </CategoryInLink>
              </CategoryEachLink>
            </CategoryEachBox>
          </CategoryBox>
          <CategoryBox>
            <CategoryEachBox>
              <CategoryEachLink
                href={`/Main/${nickName}`}
                role="link"
                tabindex="0"
              >
                {/*TODO: 여기다 href 주소 수정.. 닉네임을 로컬로 받아야함 */}
                <CategoryInLink>
                  <div>
                    <CategoryInDiv>
                      <CategoryDbInDiv>
                        <CategorySvg>
                          {/* <span class="xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x9f619 x1lliihq x2lah0s x6ikm8r x10wlt62 x1n2onr6 x1ykvv32 xougopr x159fomc xnp5s1o x194ut8o x1vzenxt xd7ygy7 xt298gk x1xrz1ek x1s928wv x162n7g1 x2q1x1w x1j6awrg x1n449xj x1m1drc7" role="link" tabindex="-1" style="width: 24px; height: 24px;"><img alt="duroomee님의 프로필 사진" class="x6umtig x1b1mbwd xaqea5y xav7gou xk390pu x5yr21d xpdipgo xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3" crossorigin="anonymous" draggable="false" src="https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&amp;_nc_cat=1&amp;_nc_ohc=Wss0mqAzjA4AX9oEzty&amp;edm=AB11_MABAAAA&amp;ccb=7-5&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&amp;oh=00_AfDEtq5sVG0nH143f_oRqy5SELaNvc4vESNEXWd2OyCPSw&amp;oe=63D5D68F&amp;_nc_sid=ccd4cc"></span> */}
                        </CategorySvg>
                      </CategoryDbInDiv>
                    </CategoryInDiv>
                  </div>
                  <CategoryWordBox>
                    <div>
                      <CategoryEachWord>프로필</CategoryEachWord>
                    </div>
                  </CategoryWordBox>
                </CategoryInLink>
              </CategoryEachLink>
            </CategoryEachBox>
          </CategoryBox>
        </CategoryOutBox>
        <LogOutButton onClick={logOut}> 로그아웃</LogOutButton>
      </CategoryWrapper>

      <ReactModal
        style={{
          content: {
            position: "fixed",
            // marginLeft: "auto",
            // marginRight: "auto",
            // marginTop: "250px",
            margin: "auto",
            border: "0px",
            width: "806px",
            height: "620px",
            borderRadius: "20px",
            padding: "10px",
            display: "flex",
          },
        }}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        {/* TODO: 여기다가 add넣어주세요 */}
        <AddPost />
      </ReactModal>
    </>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  transform: translateX(0px);
  z-index: 1; // 먼저 보이게 하는거
  max-width: 320px;
  position: fixed;
  top: 0px;
  @media screen and (max-width: 1300px) {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    width: 100px;
  }
  padding-bottom: 20px;
  background-color: rgb(255, 255, 255);
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 8px;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box; //안에 넣기
  display: flex;
  height: 100vh;
  border-right: 1px solid rgb(219, 219, 219);
`;
const CategoryOutBox = styled.div`
  width: 100%;
  flex-grow: 1;
  display: block;
`;
const CategoryBox = styled.div`
  border-bottom-left-radius: 24px;
  padding-right: 12px;
  margin-top: 4px;
  align-items: center;
  padding-top: 12px;
  padding-left: 12px;
  padding-bottom: 12px;
  box-sizing: border-box;
  display: inline-flex;
  margin-bottom: 4px;
  width: 100%;
  border-bottom-right-radius: 24px;
  border-top-right-radius: 24px;
  flex-direction: row;
`;

const CategoryEachBox = styled.div`
  position: relative;
`;

const CategoryEachLink = styled.a`
  text-decoration: none;
  color: rgb(0, 55, 107);
  display: inline; //같은 줄 차지가능
  /* padding-left: 0; */
  background-color: transparent;
  touch-action: manipulation;
  /* padding-top: 0; */
  list-style: none;
  /* margin-top: 0; */
  /* border-left: 0; */
  /* margin-bottom: 0; */
  /* border-bottom: 0; */
  box-sizing: border-box; //경계선 안쪽
  /* border-top: 0; */
  /* padding-right: 0; */
  cursor: pointer;
  /* margin-left: 0; */
  /* margin-right: 0; */

  /* -webkit-tap-highlight-color: transparent; */
  border-right: 0;
  outline: none;
  padding-bottom: 0;
  text-align: inherit;
`;

const CategoryInLink = styled.div`
  border-bottom-left-radius: 24px;
  padding-right: 12px;
  margin-top: 4px;
  align-items: center;
  padding-top: 12px;
  margin-bottom: 4px;
  width: 100%;
  border-top-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-right-radius: 24px;
  flex-direction: row;
  padding-left: 12px;
  padding-bottom: 12px;
  box-sizing: border-box;
  display: inline-flex;
`;

const CategoryInDiv = styled.div`
  position: relative;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;
const CategoryDbInDiv = styled.div`
  height: 24px;
  width: 24px;
  transition-duration: 200ms;
  display: flex;
  box-sizing: border-box;
  transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);
  transition-property: transform;
`;

const CategoryWordBox = styled.div`
  opacity: 1;
  display: flex;
  height: 24px;
  width: fit-content;
  box-sizing: border-box;
  align-items: center;
  overflow-x: hidden;
  padding-left: 16px;
`;

const CategoryEachWord = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(38, 38, 38);
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin: -6px 0 -6px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const CategorySvg = styled.svg`
  display: block;
  position: relative;
`;

const LogOutButton = styled.button`
  margin-left: 60px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(38, 38, 38);
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  @media screen and (max-width: 900px) {
    font-size: 10px;
    margin-left: 9px;
  }
`;
