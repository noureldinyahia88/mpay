import React, { useState } from "react";
import HeaderUser from "../../componet/Ui-User/HeaderUser";
import styled from "styled-components";
import theme from "../../componet/Variables";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { BuyCryptofun } from "../../Http/Send";
import successImage from "../../assets/check.png";
import FailedImage from "../../assets/remove.png";
import { Link } from "react-router-dom";

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const BuyCryptoWrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

// Sidebar styles
const TabListSidebar = styled.div`
  background-color: #151620;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  border-radius: 15px;
  color: ${theme.fontsColor};
  max-width: 50%;
  width: 20%;
`;

const TabTitle = styled(Link)`
  color: ${theme.fontsColor};
  font-weight: bold;
  font-size: 20px;
`;
const BuyCrypto = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: BuyCryptofun,
    onSuccess: (data) => {
      // to refetch the data
      // queryClient.invalidateQueries({ queryKey: ["data"] });
      console.log("success");
      setShowSuccess(true);
      reset();
    },
    onError: (error) => {
      console.error("error", error);
      setShowFailed(true);
    },
  });

  const hideMessage = () => {
    setShowSuccess(false);
    setShowFailed(false);
  };

  async function handleSend(formData) {
    console.log(formData);
    mutate({
        crypto: formData.buyCrypto,
        type: formData.type,
        cryptoAmount: formData.amount,
    });
  }
  return (
    <BuyCryptoWrapper>
      <HeaderUser />
      <Container>
        <Wrapper>
          <TabsContainer>
            <FormContainer onSubmit={handleSubmit(handleSend)}>
              <FormLabel>
                Select Crypto
                <FormSelect
                  name="buyCrypto"
                  {...register("buyCrypto", {
                    required: "Not Valid",
                  })}
                >
                  <option value="">Select a Payment Address</option>
                  <option value="bitcoin">bitcoin</option>
                  <option value="ethereum">ETH</option>
                  <option value="tether">Tether</option>
                  <option value="binancecoin">Binance Coin</option>
                  <option value="solana">Solana</option>
                  <option value="staked_ether">staked ether</option>
                  <option value="usd_coinr">usd</option>
                  <option value="ripple">ripple</option>
                </FormSelect>
              </FormLabel>
              <Span>{errors.buyCrypto?.message}</Span>

              <FormLabel>
                Type
                <FormSelect
                  name="type"
                  {...register("type", {
                    required: "Not Valid",
                  })}
                >
                  <option value="">Select a Payment Address</option>
                  <option value="buy-crypto">Buy-crypto</option>
                  <option value="sell-crypto">Sell-crypto</option>
                </FormSelect>
              </FormLabel>
              <Span>{errors.type?.message}</Span>

              <FormLabel>
                Amount
                <FormInput
                  type="number"
                  placeholder="Amount of Crytpo"
                  name="amount"
                  id="amount"
                  {...register("amount", {
                    required: "Please Enter Valid number",
                  })}
                />
              </FormLabel>
              <Span>{errors.amount?.message}</Span>
              {isPending ? (
                "Pending"
              ) : (
                <FormButton type="submit">Confirm</FormButton>
              )}
            </FormContainer>
          </TabsContainer>
        </Wrapper>
      </Container>
      <MessageWrapper className={`${showSuccess ? "show" : ""}`}>
        <SuccessMessage>
          <ImageStatus src={successImage} alt="/" />
          <H3>Success</H3>
          <Btn onClick={hideMessage}>Done</Btn>
        </SuccessMessage>
      </MessageWrapper>

      <MessageWrapperFailed className={`${showFailed ? "show" : ""}`}>
        <SuccessMessage>
          <ImageStatus src={FailedImage} alt="/" />
          <H3>Failed</H3>
          <Btn onClick={hideMessage}>Try Again</Btn>
        </SuccessMessage>
      </MessageWrapperFailed>
    </BuyCryptoWrapper>
  );
};
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  width: 100%;
`;
const FormSelect = styled.select`
  width: 300px;
  padding: 10px;
  margin-top: 5px;
  font-size: 16px;
  color: ${theme.fontsColor};
  background-color: ${theme.Color1};
  border: 1px solid ${theme.color3};
  border-radius: 5px;

  &:focus {
    border-color: ${theme.color4};
    outline: none;
  }
`;
const Span = styled.span`
  color: red;
`;
const FormLabel = styled.label`
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

const MessageWrapperFailed = styled.div`
position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #151620b2;
  justify-content: center;
  align-items: center;
  display: none;
  &.show {
    display: flex;
  }
`;

const MessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #151620b2;
  justify-content: center;
  align-items: center;
  display: none;
  &.show {
    display: flex;
  }
`;
const SuccessMessage = styled.div`
  width: 300px;
  height: 300px;
  background-color: #151620;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const ImageStatus = styled.img`
  width: 100px;
  height: 100px;
`;

const H3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
const Btn = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: ${theme.color2};
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export default BuyCrypto;
