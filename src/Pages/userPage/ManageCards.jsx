import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../componet/Variables";
import HeaderUser from "../../componet/Ui-User/HeaderUser";
import Card from "../../componet/Ui-User/Card";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { fetchCards } from "../../Http/Get";
import { useForm } from "react-hook-form";
import { AddNewCard } from "../../Http/AddNewCard";

const ManageCards = () => {
  const [FormCard, setShowFormCard] = useState(false)
  const [FormMessage, setFormMessage] = useState(false)
  const [FormMessage2, setFormMessage2] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
    staleTime: 5000,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  // add new card

  const addNewCard = () => {
    setShowFormCard(!FormCard)
    setFormMessage(false)
    setFormMessage2(false)
  }

const { mutate, isPending } = useMutation({
    mutationFn: AddNewCard,
    onSuccess: (data) => {
      // to refetch the data
      console.log("success");
      setFormMessage(true);
      setTimeout(()=>{
        reset();
        setShowFormCard(false)
      }, 1000)
    },
    onError: (error) => {
      console.error("error", error);
      setFormMessage2(true)
    }
  });
  async function handleSend(formData) {
    mutate({
      name: formData.name,
      number: formData.number,
    });
  }
  return (
    <Page>
      <HeaderUser />
      <ManageCardsWrapper>
        <Container>
          <TopPage>
            <Wrapper>
              <Title>Manage Cards</Title>
              <Description>Manage your payment cards</Description>
            </Wrapper>
            <Button onClick={addNewCard}>Add Card</Button>
          </TopPage>
          <CardsContainer>
            {data?.map((card) => (
              <Card
                key={card._id}
                id={card._id}
                name={card.name}
                number={card.number}
                balance={card.balance}
              />
            ))}
          </CardsContainer>
        </Container>

        <FormWarpper className={`${FormCard ? 'show': ''}`}>
          <FormContainer onSubmit={handleSubmit(handleSend)}>
            <H2>Add A New Card</H2>
            <FormLabel>
              Name on the card
              <FormInput
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", {
                  required: "Not Valid",
                })}
              />
            </FormLabel>
            <Span>{errors.name?.message}</Span>
            <FormLabel>
              Card number
              <FormInput
                type="number"
                placeholder="Number"
                name="number"
                id="number"
                {...register("number", {
                  required: "Please Enter Valid number",
                })}
              />
            </FormLabel>
            <Span>{errors.number?.message}</Span>
            <BtnWrapper>
            <FormButton type="submit">Send</FormButton>
            <CanaclButton onClick={addNewCard} type="button">Cancel</CanaclButton>
            </BtnWrapper>
            <PGreen className={`${FormMessage ? 'show': ''}`}>Card added successfully</PGreen>
            <PRed className={`${FormMessage ? 'show': ''}`}>Try Again</PRed>
          </FormContainer>
        </FormWarpper>
      </ManageCardsWrapper>
    </Page>
  );
};
const PGreen = styled.p`
  color: green;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  display: none;
  &.show{
    display: block;
  }
`
const PRed = styled.p`
  color: red;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  display: none;
  &.show{
    display: block;
  }
`
const TopPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled.div``;
const H2 = styled.h2`
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;
`;
const Page = styled.div`
  min-height: 100vh;
`;
const ManageCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: ${theme.Color2};
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${theme.fontsColor};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: ${theme.fontsColor};
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${theme.color3};
  color: ${theme.fontsColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color4};
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

// form Style
const BtnWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
`

const FormWarpper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000088;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: none;
  align-items: center;
  justify-content: center;

  &.show{
    display: flex;
  }
`;

const FormContainer = styled.form`
  padding: 50px;
  border-radius: 15px;
  background-color: ${theme.color2};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 350px;
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
const CanaclButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid ${theme.fontsColor};
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;

  &:hover {
    background-color: #d3dcea68;
  }
`;
export default ManageCards;
