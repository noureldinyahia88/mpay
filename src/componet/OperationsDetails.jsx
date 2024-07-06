import React, { useState } from "react";
import styled from "styled-components";

const OpeartionsDestailsWrapper = styled.div`
  margin-top: 20px;
  background-color: transparent;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #23253530;
`;

const P = styled.p`
  font-size: 19px;
  font-weight: 200;
  color: #d9d9d9;
  &.succeeded {
    color: #165e3d;
  }
`;
const PRed = styled.div`
  font-size: 19px;
  font-weight: 200;
  color: #165e3d;
  &.succeeded {
    color: #165e3d;
  }
`;

const OperationsDetails = ({id,to,from,amount,createdAt}) => {

  let conent = "loading..."
  const [fraud, setFraud] = useState("loading...")
  const handleFraud = () => {
    setTimeout(() => {
      setFraud('Not Fraud')
    }, 5000)

  };
  handleFraud()
  return (
    <OpeartionsDestailsWrapper>
      <P>{id}</P>
      <P className="succeeded">Succeeded</P>
      <P>{amount} USD</P>
      {/* <P>•••• 4242</P> */}
      <P>{createdAt}</P>
      <PRed>{fraud}</PRed>
    </OpeartionsDestailsWrapper>
  );
};

export default OperationsDetails;
