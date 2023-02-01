import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getDetail } from "../redux/modules/detailSlice";
const Detail = ({ postId }) => {
  console.log(postId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getDetail(postId));
  }, [dispatch]);

  return (
    <>
      <DetailWrapper>
        <ImageBox>
          <DeatailImage src="logo192.png" />
        </ImageBox>
        <DetailTextBox>
          <div>머릿글</div>
          <div> 댓글공간</div>
          <div> 댓글작성</div>
        </DetailTextBox>
      </DetailWrapper>
    </>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  /* z-index: ; */
  height: 820px;
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ImageBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: black;
  height: 100%;
`;

const DetailTextBox = styled.div`
  width: 40%;
`;

const DeatailImage = styled.img`
  background-color: rgb(255, 255, 255);
  width: 100%;
`;
