import styled from "styled-components";
import { useLocation } from "react-router-dom";
function Layout({ children }) {
  const locationNow = useLocation();
  // layout 로그인 페이지에만 다르게 하기
  if (locationNow.pathname === "/") return <div>{children}</div>;
  return (
    <div>
      <LayoutStyles>{children} </LayoutStyles>
    </div>
  );
}

export default Layout;

const LayoutStyles = styled.div`
  background: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  overflow-y: none;
  display: flex;
  position: relative;
  outline: 1px solid 036cdb !important;
  min-height: 100vh;
  flex-direction: column;
  min-width: 100vw;
  /* margin-right: 2000000px; */
  /* overflow-y: scroll !important; */
`;
const LayoutStyleInside = styled.div`
  height: 100%;
  /* overflow-y: scroll; */
  border-bottom-left-radius: 0;
  /* background-color: rgb(250, 250, 250); */
  background: rgb(255, 255, 255);
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  position: static;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  overflow-x: none; // 넘치는 거 그냥 보이기
  align-self: auto;
  flex-grow: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  /* position: fixed; */
`;
