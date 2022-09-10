import React from "react";
import styled from "styled-components";
import { ProgressBar, Button, ButtonGroup } from "react-bootstrap";

import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  return (
    <>
      <Wrapper>
        <ProgressBar
          striped
          variant="danger"
          now={80}
          style={{ marginTop: "20px" }}
        />
        <Title>{QuestionData[0].title}</Title>
        <ButtonGroups>
          <Button
            style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}
          >
            나는 답변1번 입니다
          </Button>
          <Button
            style={{
              width: "40%",
              minHeight: "200px",
              fontSize: "15pt",
              marginLeft: "20px",
            }}
          >
            나는 답변2번 입니다
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
