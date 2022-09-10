import React from "react";
import styled from "styled-components";
import PageImages from "../assets/ggompang.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img src={PageImages} />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button onClick={handleClickBtn}>테스트 시작</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  /* background-color: pink; */
  height: 100vh;
  width: 100%;
`;
const Contents = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.header`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SimKyungha";
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
  font-family: "SimKyungha";
`;
const LogoImage = styled.div`
  margin-top: 10px;

  img {
    width: 350px;
    border-radius: 50%;
  }
`;
const Desc = styled.div`
  margin-top: 10px;
  font-family: "SimKyungha";
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: skyblue;
  border: none;
  margin-top: 10px;
  font-family: "SimKyungha";
`;
