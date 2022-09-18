import React from "react";
import { useNavigate } from "react-router-dom";

import PageImages from "../assets/convenient-store.webp";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>편의점 음식 취향 판별기</h2>
      <h3>나의 취향인 편의점 음식은 무엇일까?</h3>
      <img src={PageImages} />
      <div>본 테스트는 사이트에서 자체적으로 제작한 테스터입니다.</div>
      <button onClick={() => navigate("/question")}>테스트 시작</button>
      <button>결과 공유하기</button>
    </div>
  );
};

export default Home;
