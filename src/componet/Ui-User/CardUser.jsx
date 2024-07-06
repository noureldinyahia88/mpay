import React from 'react'
import styled from 'styled-components';
import theme from '../Variables';
import { Link } from 'react-router-dom';
import qnb from "../../assets/qnb.png";

const CardUser = () => {
  const smartEmail = localStorage.getItem('smartEmail');
  const defaultCard = JSON.parse(localStorage.getItem('defaultCard')) || {};
  // const defaultCardBalance = JSON.parse(localStorage.getItem('defaultCard')) || {};
  const { balance, number, _id } = defaultCard;
  const lastFourDigits = number ? number.slice(-4) : ''; 
  const firstNineDigitsBalance = balance ? balance.toString().slice(0, 9) : '';
  localStorage.setItem('cardId', _id);

  return (
    <CardWrapper>
          <Card>
            <CardWrapperConatiner>
            <CardContainer>
              <BankLogo>
                <ImageBank src={qnb} alt="Bank Logo" />
              </BankLogo>
              <CardInfo>
                <H3>{localStorage.getItem('smartEmail')}</H3>
                <CardNum>•••• {lastFourDigits}</CardNum>
              </CardInfo>
            </CardContainer>
            <ManageBtn to='/ManageCards'>Manage</ManageBtn>

            </CardWrapperConatiner>
            <BalanceWrapper>
              <BalanceH3>Your Balance</BalanceH3>
              <BalanceH4>{firstNineDigitsBalance} EGP</BalanceH4>
            </BalanceWrapper>
          </Card>

        </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  border: 1px solid ${theme.color3};
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  /* max-width: 400px; */
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BankLogo = styled.div`
  margin-right: 20px;
`;

const ImageBank = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const CardInfo = styled.div`
  flex-grow: 1;
`;

const H3 = styled.h3`
  font-size: 20px;
  color: ${theme.fontsColor};
`;

const CardNum = styled.span`
  color: #777;
  font-size: 18px;
`;
const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BalanceH3 = styled.h3`
  font-size: 24px;
  color: ${theme.fontsColor};
  text-align: right;
`;
const BalanceH4 = styled.h4`
  font-size: 24px;
  color: ${theme.fontsColor};
  text-align: right;
`;
const CardWrapperConatiner = styled.div`
display: flex;
align-items: start;
justify-content: space-between;
`

const ManageBtn = styled(Link)`
border-bottom: 1px solid ${theme.fontsColor};
color: ${theme.fontsColor};
`
export default CardUser