import React from "react";
import styled from "styled-components";
import theme from "../../componet/Variables";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { LoginFun } from "../../Http/Login";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm();

//   login function
  const { mutate, isPending } = useMutation({
    mutationFn: LoginFun,
    onSuccess: (data) => {
      // to refetch the data
      // queryClient.invalidateQueries({ queryKey: ["data"] });
      console.log("success");
      console.log(data);
      console.log(localStorage.getItem("role"));
      if (localStorage.getItem("role") === "USER") {
        navigate("/HomePage");
      }
    },
  });

  async function handleSubmitOto(formData) {
    mutate({
        otp: formData.VerifyOtp,
    });
  }

//   sign Up function
const { mutate:signUpMutate, isPending:signUpPending } = useMutation({
    mutationFn: LoginFun,
    onSuccess: (data) => {
      // to refetch the data
      // queryClient.invalidateQueries({ queryKey: ["data"] });
      console.log("success");
      console.log(data);
      console.log(localStorage.getItem("role"));
      if (localStorage.getItem("role") === "USER") {
        navigate("/HomePage");
      }
    },
  });

  async function handleSubmitOto(formData) {
    mutate({
        otp: formData.VerifyOtp,
    });
  }
  const VerifyOtp = watch("VerifyOtp", "");

  return (
    <Warpper>
    <VerifyOtpWrapper onSubmit={handleSubmit(handleSubmitOto)}>
      <LogoWrapper>
        {/* <Img src="logo.png" alt="Logo" /> */}
        <ImgWrapper>Verify Your Number <br/> <SmallSpan><A>Get Code?</A>{localStorage.getItem("phone")}</SmallSpan></ImgWrapper>
      </LogoWrapper>
      <LoginFormWrapper>
        <FormRow>
          <Label htmlFor="VerifyOtp">Otp</Label>
          <Input
            type="text"
            id="VerifyOtp"
            {...register("VerifyOtp", {
              required: "Wrong Number",
            })}
          />
          <Span>{errors.VerifyOtp?.message}</Span>
        </FormRow>
        <SubmitButton type="submit" disabled={!VerifyOtp}>Submit</SubmitButton>
      </LoginFormWrapper>
      <LinksWrapper>
        <StyledLink to="/">Resend?</StyledLink>
      </LinksWrapper>
    </VerifyOtpWrapper>
    </Warpper>
  );
};

const Span = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
const A = styled.button`
  font-size: 12px;
  margin-top: 5px;
  background-color: transparent;
  color: #fff;
  text-decoration: underline;
  border: none;
  cursor: pointer;
`;
const SmallSpan = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;
const Warpper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`
const VerifyOtpWrapper = styled.form`
height: 500px;
max-width: 500px;
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const LinksWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled.button`
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
export default VerifyOtp;
