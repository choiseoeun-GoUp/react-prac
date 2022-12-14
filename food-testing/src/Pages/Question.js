import { QuestionData } from "../assets/data/questionData";
import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();

  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "Drink", score: 0 },
    { id: "Coffee", score: 0 },
    { id: "Sandwich", score: 0 },
    { id: "Kimbab", score: 0 },
    { id: "LunchBox", score: 0 },
    { id: "Salad", score: 0 },
    { id: "Dessert", score: 0 },
    { id: "Snack", score: 0 },
    { id: "Icecream", score: 0 },
    { id: "Munchies", score: 0 },
    { id: "CupRamen", score: 0 },
    { id: "Hamburger", score: 0 },
  ]);
  console.log(totalScore);

  const handleClickBtn = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      //2개이상이 있으면 바로 결과값으로 들어가고
      //1개이상만 있으면 그중에서 랜덤으로 결과값 도출
      const result = totalScore.filter((data) => data.score >= 2);
      const result2 = totalScore.filter((data) => data.score >= 1);
      const result3 = result2[Math.floor(Math.random() * result2.length)];

      if (result.length === 1) {
        navigate({
          pathname: "/result",
          search: `?${createSearchParams({
            mbti: result[0].id,
          })}`,
        });
      } else {
        console.log(result3);
        navigate({
          pathname: "/result",
          search: `?${createSearchParams({
            mbti: result3.id,
          })}`,
        });
      }
    }
  };

  return (
    <div>
      <h2>질문 페이지</h2>
      <h3>{QuestionData[questionNo].QuestionTitle}</h3>
      <button
        onClick={() => handleClickBtn(1, QuestionData[questionNo].answera.type)}
      >
        {QuestionData[questionNo].answera.answerTitle}
      </button>
      <br />
      <button
        onClick={() => handleClickBtn(1, QuestionData[questionNo].answerb.type)}
      >
        {QuestionData[questionNo].answerb.answerTitle}
      </button>{" "}
      <br />
      <button
        onClick={() => handleClickBtn(1, QuestionData[questionNo].answerc.type)}
      >
        {QuestionData[questionNo].answerc.answerTitle}
      </button>
      <br />
      <button
        onClick={() => handleClickBtn(1, QuestionData[questionNo].answerd.type)}
      >
        {QuestionData[questionNo].answerd.answerTitle}
      </button>
    </div>
  );
};
export default Question;
