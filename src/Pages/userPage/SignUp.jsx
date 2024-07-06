import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import theme from "../../component/Variables";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SignFun } from "../../Http/SignUp";
import theme from "../../componet/Variables";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: SignFun,
    onSuccess: (data) => {
      console.log("success");
      console.log(data);
      console.log(localStorage.getItem("role"));
      if (localStorage.getItem("role") === "USER") {
        navigate("/VerifyOtp");
      }
    },
  });

  const handleSubmitSignUp = (formData) => {
    mutate({
      name: formData.name,
      phone: formData.phoneNumber,
      email:formData.email,
      birthDate:formData.birthday,
      gender:formData.gender,
      city:formData.city,
      password: formData.password,
    });
  };

  return (
    <Wrapper>
      <SignUpPageWrapper onSubmit={handleSubmit(handleSubmitSignUp)}>
        <LogoWrapper>
          <ImgWrapper>Smart Pay</ImgWrapper>
        </LogoWrapper>
        <SignUpFormWrapper>
          <FormRow>
            <Label htmlFor="signUpPhoneNumber">Name</Label>
            <Input
              type="text"
              id="name"
              {...register("name", {
                required: "Please Enter Valid Name",
              })}
            />
            {errors.name && <Span>{errors.name.message}</Span>}
          </FormRow>

          <FormRow>
            <Label htmlFor="signUpPhoneNumber">Phone number</Label>
            <Input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Please Enter Valid Phone Number",
              })}
            />
            {errors.phoneNumber && <Span>{errors.phoneNumber.message}</Span>}
          </FormRow>
          <FormRow>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              {...register("email", {
                required: "Please Enter Valid Email",
              })}
            />
            {errors.email && <Span>{errors.email.message}</Span>}
          </FormRow>
          <FormRow>
            <Label htmlFor="birthday">Birth Date</Label>
            <Input
              type="text"
              id="birthday"
              {...register("birthday", {
                required: "Please Enter Birth Date",
              })}
            />
            {errors.birthday && <Span>{errors.birthday.message}</Span>}
          </FormRow>
          <FormRow>
            <Label htmlFor="gender">Select your gender</Label>
            {/* <Select
              id="gender"
              {...register("gender", {
                required: "Please select your gender",
              })}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select> */}
            <Input
              type="text"
              id="gender"
              {...register("gender", {
                required: "Please select your gender",
              })}
            />
            {errors.gender && <Span>{errors.gender.message}</Span>}
          </FormRow>
          <FormRow>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              id="city"
              {...register("city", {
                required: "Please Enter Your City",
              })}
            />
            {errors.city && <Span>{errors.city.message}</Span>}
          </FormRow>
          <FormRow>
            <Label htmlFor="signUpPassword">Password</Label>
            <Input
              type="password"
              id="signUpPassword"
              {...register("password", {
                required: "Please Enter Password",
              })}
            />
            {errors.password && <Span>{errors.password.message}</Span>}
          </FormRow>
          <FormRow>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please Confirm Your Password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <Span>{errors.confirmPassword.message}</Span>
            )}
          </FormRow>
          <SubmitButton type="submit" disabled={isLoading}>
            SignUp
          </SubmitButton>
        </SignUpFormWrapper>

        <LinksWrapper>
          <StyledLink to="/">Login</StyledLink>
        </LinksWrapper>
      </SignUpPageWrapper>
    </Wrapper>
  );
};

export default SignUp;

const Span = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ImgWrapper = styled.div`
  font-weight: bold;
  color: ${theme.gray};
  font-size: 35px;
`;

const SignUpPageWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  border: 1px solid #2b3139;
  border-radius: 25px;
`;

const LogoWrapper = styled.div`
  margin-bottom: 20px;
`;

const LoginFormWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SignUpFormWrapper = styled(LoginFormWrapper)``;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${theme.gray};
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 8px;
  background-color: transparent;
  border: 1px solid #2b3139;
  border-radius: 4px;
  color: black;
  &:focus {
    border: 1px solid #687788;
    outline: 0;
  }
`;

const Option = styled.option`
  color: black;
`;

const Input = styled.input`
  padding: 8px;
  background-color: transparent;
  border: 1px solid #2b3139;
  border-radius: 4px;
  color: ${theme.gray};
  &:focus {
    border: 1px solid #687788;
    outline: 0;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 16px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: #1d1f2d;
  color: ${theme.gray};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #1d1f2d67;
  }

  &:disabled {
    background-color: #1d1f2d99;
    cursor: not-allowed;
  }
`;

const LinksWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  margin: 0 auto;
  color: #fff;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    text-decoration: underline;
  }
`;
