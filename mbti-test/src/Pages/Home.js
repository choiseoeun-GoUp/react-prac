import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Title>나에게 맞는 주인님은?</Title>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  /* background-color: pink; */
  height: 100vh;
  width: 100%;
`;

const Header = styled.header`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;
