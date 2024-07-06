import React from "react";
import theme from "../Variables";
import styled from "styled-components";

import btc from "../../assets/btg.png";

const CryptoPortifilo = ({ crypto, amount, totalAmount }) => {
  return (
    <CraptoWrapper>
      <CraptoNameWrapper>
        <NameWrapper>
          <BigName>{crypto}</BigName>
        </NameWrapper>
      </CraptoNameWrapper>

      <PriceAndAmountWrapper>
        <Amount>Amount : {amount}</Amount>
        <CraptoPrice>
          total Amount : {totalAmount.toString().slice(0, 4)}$
        </CraptoPrice>
      </PriceAndAmountWrapper>
    </CraptoWrapper>
  );
};

export default CryptoPortifilo;

const CraptoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid ${theme.color3};
  margin: 20px auto;
`;

const CraptoNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BigName = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.fontsColor};
`;

const CraptoPrice = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #00b894;
  margin-bottom: 20px;
`;

const PriceAndAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const Amount = styled.h4`
  color: ${theme.fontsColor};
  font-weight: 500;
`;
