import React from 'react'
import styled from 'styled-components';
import theme from '../../../componet/Variables';

const PaymentAdress = () => {
  return (
    <FormContainer>
      <FormLabel>
        Payment Address
        <FormInput type="text" name="address" placeholder="Payment Address" />
      </FormLabel>
      <FormLabel>
      Amount
        <FormInput type="password" name="password" placeholder="Amount" id="email" />
      </FormLabel>
      <FormButton type="submit">Save</FormButton>
    </FormContainer>
  )
}


const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
/* margin-top: 20px; */
display: flex;
flex-direction: column;
align-items: start;
  color: white;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  margin-top: 10px;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  font-weight: 600;
  border: 0;
  outline: none;
 border-bottom: 1px solid #fff;
 /* background-color: transparent; */
  width: 290px;
  color: ${theme.color1};

`;

const FormButton = styled.button`
margin-top: 20px;
  padding: 10px 20px;
  background-color: ${theme.fontsColor};
  color: ${theme.color2};
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;

  &:hover {
    background-color: #d3dcea68;
  }
`;

export default PaymentAdress