import React from "react";
import styled from "styled-components";

const zenklubPurple = "#7c4dff";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Bem-vindo ao Zenklub</Title>
      <Subtitle>Escolha um médico e agende sua consulta.</Subtitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  text-align: center;
  padding: 20px 0;
  background-color: ${zenklubPurple};
  color: white;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-top: 20px;
`;
