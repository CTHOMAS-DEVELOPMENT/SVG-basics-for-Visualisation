import React from "react";
import LinkButton from "./LinkButton";
import styled from "styled-components";

const Wrapper = styled.header`
  display: grid;
  place-items: center;
  margin-top: 2rem;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1> SVG basics for Visualisation </h1>
      <h2>With D3 helping</h2>
      <ButtonContainer>
        <LinkButton name="Basic" url="/basic"/>
        <LinkButton name="Line Chart" url="/line-chart"/>
        <LinkButton name="Bar Chart" url="/bar-chart"/>
        <LinkButton name="Candlestick Chart" url="/candlestick-chart"/>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Header;