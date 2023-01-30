import React, { useEffect } from "react";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI } from "./KakaoData";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postLogin } from "../../redux/modules/loginSlice";
const KakaoLogin = () => {
  // 방법1
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  // const getKakaoToken = () => {
  //   fetch(`https://kauth.kakao.com/oauth/token`, {
  //     method: "POST",
  //     headers: { "Content-type": "application/x-www-form-urlencoded" },
  //     body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}&client_secret=2EMFnKfCXvOfzPHN1SJci1ecUzb1kvOx
  //     `,
  //   });
  // };

  // useEffect(() => {
  //   if (!location.search) return;
  //   getKakaoToken();
  // }, []);

  // console.log(REST_API_KEY);
  // console.log(REDIRECT_URI);

  //방법 2
  // useEffect(() => {
  //   let params = new URL(document.location.toString()).searchParams;
  //   let code = params.get("code"); // 인가코드 받는 부분
  //   let grant_type = "authorization_code";
  //   let client_id = REST_API_KEY;

  //   axios
  //     .post(
  //       `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&client_secret=2EMFnKfCXvOfzPHN1SJci1ecUzb1kvOx&redirect_uri=
  //       ${REDIRECT_URI}&code=${code}`,
  //       {
  //         headers: {
  //           "Content-type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
  //     });
  // }, []);

  // // 방법3

  // useEffect(() => {
  //   const authorizeCodeFromKakao = window.location.search.split("=")[1];
  //   if (authorizeCodeFromKakao !== undefined) {
  //     console.log(`authorizeCodeFromKakao : ${authorizeCodeFromKakao}`);

  //     const body = {
  //       grant_type: "authorization_code",
  //       client_id: REST_API_KEY,
  //       redirect_uri: REDIRECT_URI,
  //       code: authorizeCodeFromKakao,
  //     };

  //     const queryStringBody = Object.keys(body)
  //       .map((k) => encodeURIComponent(k) + "=" + encodeURI(body[k]))
  //       .join("&");

  //     fetch("https://kauth.kakao.com/oauth/token", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //       },
  //       body: queryStringBody,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   } else {
  //     console.log("No AuthorizeCodeFromKakao");
  //   }
  // }, []);

  //q방법4
  // useEffect(() => {
  //   let params = new URL(document.location.toString()).searchParams;
  //   let code = params.get("code"); // 인가코드 받는 부분
  //   let grant_type = "authorization_code";
  //   let client_id = REST_API_KEY;

  //   axios
  //     .post(
  //       `becool0514.shop/kakao/${code}`
  //       // {
  //       //   headers: {
  //       //     "Content-type": "application/x-www-form-urlencoded",
  //       //   },}
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
  //     });
  // }, []);

  // 방법 5
  useEffect(() => {
    console.log(KAKAO_CODE);
    dispatch(__postLogin({ code: KAKAO_CODE }));
  }, [dispatch]);

  return (
    <div>
      kakaoLoginkakaoLoginkakaoLoginkakaoLoginkakaoLoginkakaoLoginkakaoLoginkakaoLogin
      {/* <button onClick={getKakaoToken}>버튼</button> */}
    </div>
  );
};

export default KakaoLogin;
