import React, { useState, useEffect } from "react";
import { ResultData } from "../assets/data/resultdata";

import { useSearchParams, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = useState({});
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);
  return (
    <div>
      <h2>결과보기</h2>
      <img
        alt="결과이미지"
        src={resultData.image}
        className="rounded-circle"
        width={350}
      />
      <div>당신과 찰떡궁합인 음식은 {resultData.name}입니다</div>
      <button onClick={() => navigate("/")}>테스트 다시하기</button>
      <button>결과 공유하기</button>
    </div>
  );
};

export default Result;
