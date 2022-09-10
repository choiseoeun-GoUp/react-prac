import React, { useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  console.log(questionNo);
  const handleClickBtn = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      // 다음문제로 문제수 증가
      setQuestionNo(questionNo + 1);
    } else {
      // 결과 페이지 이동
      navigate("/result");
    }
  };

  return (
    <>
      <Wrapper>
        <ProgressBar
          striped
          variant="danger"
          now={(questionNo / QuestionData.length) * 100}
          style={{ marginTop: "20px" }}
        />
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroups>
          <Button
            style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}
            onClick={() => handleClickBtn(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            style={{
              width: "40%",
              minHeight: "200px",
              fontSize: "15pt",
              marginLeft: "20px",
            }}
            onClick={() => handleClickBtn(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroups>
      </Wrapper>
    </>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  font-family: "SimKyungha";
`;

const ButtonGroups = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "SimKyungha";
`;
