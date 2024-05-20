import React from "react";
import styled from "styled-components";
import eye from "../../assets/eye.png";
import theme from "../Variables";

const Wrapper = styled.div`
  background-color: ${theme.Color1};
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: ${theme.Color1};
  color: aliceblue;
`;
const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
`;

const ImgWrapper = styled.div`

`;

const Img = styled.img`
width: 100%;
  max-width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.color3};
  padding: 15px;
  border-radius: 10px;
  gap: 10px;
`;

const HeaderH2 = styled.h2`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const P = styled.p`
  margin-left: 5px;
  font-size: 18px;
  font-weight: 300;
`;

const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${theme.color3};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <ImgWrapper>M-Pay</ImgWrapper>

          <HeaderContent>
            <HeaderH2>Hello, Ali</HeaderH2>

            <TimerWrapper>
              <ImgWrapper>
                <Img src={eye} alt=""  style={{marginTop:'8px'}}/>
              </ImgWrapper>
                <P>14:40:30</P>
            </TimerWrapper>
          </HeaderContent>

          <Btn>Log Out</Btn>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
