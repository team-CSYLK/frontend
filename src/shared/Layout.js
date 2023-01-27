import styled from "styled-components";
import { useLocation } from "react-router-dom";
function Layout({ children }) {
  const locationNow = useLocation();
  if (locationNow.pathname === "/") return <div>{children}</div>;
  return (
    <div>
      <LayoutStyles>
        <LayoutStyleInside>{children} </LayoutStyleInside>
      </LayoutStyles>
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
  overflow-y: visible;
  display: flex;
  position: relative;
  outline: 1px solid #036cdb !important;
  min-height: calc(100vh - 0px);
  min-height: inherit;
  flex-direction: column;
  overflow-y: scroll !important;
`;
const LayoutStyleInside = styled.div`
  height: 100%;
  overflow-y: visible;
  border-bottom-left-radius: 0;
  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
  display: flex;
  border-bottom-right-radius: 0;
  flex-shrink: 0;
  position: static;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: row;
  overflow-x: visible;
  align-self: auto;
  flex-grow: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;
