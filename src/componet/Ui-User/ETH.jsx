import React from 'react'
import theme from '../Variables';
import styled from 'styled-components';
import btc from '../../assets/1622032786_ethereum.avif'
import { Link } from 'react-router-dom';

const ETH = () => {
  return (
    <CraptoWrapper>
        <CraptoNameWrapper>
            <CraptoImage>
                <CraptoImg src={btc} alt="coin"/>
            </CraptoImage>

            <NameWrapper>    
            <BigName>Ethereum</BigName>
            <Name>ETH</Name>
            </NameWrapper>
        </CraptoNameWrapper>

        <CraptoPrice>1,931.91 $</CraptoPrice>

        <Button to='/BuyCrypto'>Trad</Button>
    </CraptoWrapper>
  )
}

const CraptoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${theme.color3};
  max-width: 300px;
  margin: 20px auto;
`;

const CraptoNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CraptoImage = styled.div`
  margin-right: 15px;
`;

const CraptoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
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

const Name = styled.span`
  font-size: 16px;
  color: #666;
`;

const CraptoPrice = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #00b894;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  background-color: ${theme.fontsColor};
  color: ${theme.color2};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  transition: all 0.5s ease;
  &:hover {
    background-color: #d3dcea94;
    color: ${theme.fontsColor};
  }
`;

export default ETH