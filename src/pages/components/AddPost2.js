import React, { useState } from "react";
import styled from "styled-components";
import AddPost from "./AddPost";

const AddPost2 = () => {
  const onClickFormData = () => {};
  return (
    <>
      <StLayout>
        <StBox>
          <StTitleBox>
            <button>뒤로</button>새 게시물 만들기 <button>공유하기</button>
          </StTitleBox>
          <StFormData>
            <StInputImg>
              <StLeft></StLeft>
              <StRight>
                <StMyProfile>내 프로필자리</StMyProfile>
                <StText
                  placeholder="text"
                  method="post"
                  action="uploadForm"
                  onSubmit={onClickFormData}
                />
                <StLoca>위치추가</StLoca>
              </StRight>
            </StInputImg>
          </StFormData>
        </StBox>
      </StLayout>
    </>
  );
};

export default AddPost2;

const StLayout = styled.div`
  max-width: 1920px;
  min-width: 800px;
  height: 800px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StBox = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 10px;
`;
const StTitleBox = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 10px 10px 0px 0px;
`;
const StFormData = styled.form``;

const StInputImg = styled.div`
  width: 800px;
  height: 550px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StLeft = styled.div`
  width: 500px;
  height: 550px;
  border: 1px solid gray;
`;
const StRight = styled.div`
  width: 300px;
  height: 550px;
`;
const StMyProfile = styled.div``;
const StText = styled.input`
  width: 291px;
  height: 300px;
`;
const StLoca = styled.button`
  width: 291px;
  color: gray;
  background-color: transparent;
  border: 0px;
`;
