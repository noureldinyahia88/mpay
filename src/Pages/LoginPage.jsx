import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../componet/Variables";
import { useMutation } from "@tanstack/react-query";
import { LoginFun } from "../Http/Login";
import { useForm } from "react-hook-form";


const LoginPage = () => {
  const [showloginForm, setLoginForm] = useState(true);
  const [showSignUpForm, setSignUpForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const navigate = useNavigate();

  // login
  const [profileType, setProfileType] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: LoginFun,
    onSuccess: (data) => {
      // to refetch the data
      // queryClient.invalidateQueries({ queryKey: ["data"] });
      console.log("success");
      console.log(data);
      console.log(localStorage.getItem("role"))
      if(localStorage.getItem("role") === "USER"){
        navigate("/HomePage")
      }
    },
  });

  async function handleSubmitLogin(formData) {
    mutate({
      phone: formData.phoneNumber,
      password: formData.password,
    });
  }


  const showOrHideLoginForm = () => {
    setLoginForm(!showloginForm);
    setSignUpForm(!showSignUpForm);
    console.log("showSignUpForm");
  };

  return (
    <Wrapper>
      {/* Login Form */}
      <LoginPageWrapper onSubmit={handleSubmit(handleSubmitLogin)}>
        <LogoWrapper>
          {/* <Img src="logo.png" alt="Logo" /> */}
          <ImgWrapper>Smart Pay</ImgWrapper>
        </LogoWrapper>
        <LoginFormWrapper>
          <FormRow>
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Please Enter Valid Phone Number",
              })}
            />
            <Span>{errors.phoneNumber?.message}</Span>
          </FormRow>
          <FormRow>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              {...register("password", {
                required:
                  "Please Enter Valid password which contains upper case and lower case letters, numbers, and special characters",
              })}
            />
            <Span>{errors.password?.message}</Span>
          </FormRow>
          <SubmitButton type="submit">Login</SubmitButton>
        </LoginFormWrapper>
        <LinksWrapper>
          <StyledLink to="/SignUp">Create Account</StyledLink>
          <StyledLink to="/">Forgot password?</StyledLink>
        </LinksWrapper>
      </LoginPageWrapper>

      {/* Login Form end */}
      
    </Wrapper>
  );
};

export default LoginPage;

const Span = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const LoginPageWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  border: 1px solid #2b3139;
  border-radius: 25px;
  &.showOrHide {
    display: none;
  }
`;
const ImgWrapper = styled.div`
  font-size: bold;
  color: ${theme.gray};
  font-size: 35px;
`;
const SignUpPageWrapper = styled.form`
  display: none;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  border: 1px solid #2b3139;
  border-radius: 25px;
  &.showOrHide {
    display: flex;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 20px;
`;

// const Img = styled.img`
//   width: 100px;
//   height: auto;
// `;

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
