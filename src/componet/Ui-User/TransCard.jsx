import React from 'react'
import income from "../../assets/income.png"
import styled from 'styled-components'
import theme from '../Variables'

const TransCard = ({id,from,to,amount,createdAt}) => {
  return (
    <TransCardWrapper>
        <Trans>
            <TransImage>

            <H2><Span>From: </Span>{from}</H2>
            <H2><Span>To: </Span>{to}</H2>
            </TransImage>
            <Wrapper>
            <H5><Span>Amount: </Span>+{amount}</H5>
            <H2><Span>At: </Span>{createdAt}</H2>

            </Wrapper>
        </Trans>
    </TransCardWrapper>
  )
}

export default TransCard

const TransCardWrapper = styled.div`

margin-top: 10px;
margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${theme.color3};

`;

const Trans = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  flex-direction: column;
`;

const TransImage = styled.div`
  margin-bottom: 10px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const Wrapper = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
text-align: start;
`
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const H2 = styled.h2`
  font-size: 18px;
  color: ${theme.fontsColor};
  margin: 10px 0;
  font-weight: 400;
`;

const Span = styled.span`
  font-weight: normal;
  color: #666;
`;

const H5 = styled.h5`
  font-size: 16px;
  color: #00b894;
  margin: 5px 0;
`;