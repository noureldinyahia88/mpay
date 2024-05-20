import React, { useState } from "react";
import styled from "styled-components";
import theme from "../componet/Variables";
import { useForm } from "react-hook-form";
import Header from "../componet/Ui/Header";
import Sidebar from "../componet/Ui/Sidebar";


const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
`;

// form style
const FormWrapper = styled.div`
  display: flex;
`;
const Form = styled.form`
  padding: 30px;
  margin: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${theme.color3};
  border-radius: 20px;
`;
const InputsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-top: 30px;
`;
const InputWrapper = styled.div`
  width: 50%;
`;

const FormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: start;
  border: 2px solid #6b7280;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const FormLabel = styled.label`
  margin-top: -10px;
  margin-left: 15px;
  background-color: ${theme.color2};
  width: fit-content;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.fontsColor};
`;
const FormInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 14px;
  &:focus {
    outline: none;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 20px;
  margin-top: 30px;
`;
const Button2 = styled.button`
  background-color: transparent;
  color: ${theme.fontsColor};
  border: 1px solid ${theme.fontsColor};
  font-size: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &.gray {
    background-color: #d1d5db;
    color: #374151;
  }
  &:hover {
    background-color: #d1d5db;
    color: white;
  }
`;
const H1 = styled.h1`
  color: ${theme.fontsColor};
  margin: 30px 30px;
`;
const Span = styled.span`
  color: #c90808;
  font-size: 14px;
  font-weight: 500;
  padding: 0 5px 5px 5px;
`;
// const StyledEyeSlashIcon = styled(FaEyeSlash)`
//   position: absolute;
//   right: 2%;
//   top: 41%;
//   color: #374151;
//   cursor: pointer;
// `;

const MyProfileWrapper = styled.div``;

const MyProfile = () => {
  const [showPass, setShowPass] = useState(false);
  const showPassFun = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  return (
    <MyProfileWrapper>
      <Header />
      <FormWrapper>
        <Sidebar />
        <Container>
          <H1>My Profile</H1>
          <Form>
            <InputsWrapper>
              <InputWrapper>
                <FormRow>
                  <FormLabel>First Name</FormLabel>
                  <FormInput
                    type="text"
                    placeholder="EX: JHONAS"
                    id="firstName"
                    name="firstName"
                    {...register("firstName", {
                      required:
                        "Please Enter Valid firstName Not Contain Space And not leave Empty",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message:
                          "Please Enter Valid firstName Not Contain Space And not leave Empty",
                      },
                    })}
                  />
                  <Span>{errors.firstName?.message}</Span>
                </FormRow>

                <FormRow>
                  <FormLabel className="email">Email</FormLabel>
                  <FormInput
                    type="email"
                    placeholder="EX: Example@gmail.com"
                    id="email"
                    name="email"
                    {...register("email", {
                      required: "Please Enter Valid email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please Enter Valid email",
                      },
                    })}
                  />
                  <Span>{errors.email?.message}</Span>
                </FormRow>

                <FormRow>
                  <FormLabel>Password</FormLabel>
                  <FormInput
                    type={`${showPass ? "text" : "password"}`}
                    placeholder="0216a5416qasdq"
                    id="password"
                    name="password"
                    {...register("password", {
                      required:
                        "Please Enter Valid password which contains upper case and lower case letters, numbers, and special characters",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                        message:
                          "Please Enter Valid password which contains upper case and lower case letters, numbers, and special characters",
                      },
                    })}
                  />
                  {/* <StyledEyeSlashIcon onClick={showPassFun} /> */}
                  <Span>{errors.password?.message}</Span>
                </FormRow>
              </InputWrapper>

              <InputWrapper>
                <FormRow>
                  <FormLabel>Last Name</FormLabel>
                  <FormInput
                    type="text"
                    placeholder="EX: JHONAS"
                    id="lastName"
                    name="lastName"
                    {...register("lastName", {
                      required:
                        "Please Enter Valid firstName Not Contain Space And not leave Empty",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message:
                          "Please Enter Valid firstName Not Contain Space And not leave Empty",
                      },
                    })}
                  />
                  <Span>{errors.lastName?.message}</Span>
                </FormRow>

                <FormRow>
                  <FormLabel>Number</FormLabel>
                  <FormInput
                    type="text"
                    placeholder="0211581385"
                    id="phoneNo"
                    name="phoneNo"
                    {...register("phoneNo", {
                      required: "Please Enter Valid phoneNo",
                      // pattern: {
                      //   value: /^(?:\+?88)?01[3-9]\d{8}$/,
                      //   message: "Please Enter Valid phoneNo",
                      // },
                    })}
                  />
                  <Span>{errors.phoneNo?.message}</Span>
                </FormRow>

                <FormRow>
                  <FormLabel className="confirmPass">
                    Confirm Password{" "}
                  </FormLabel>
                  <FormInput
                    type={`${showPass ? "text" : "password"}`}
                    placeholder="0216a5416qasdq"
                    id="confirmPass"
                    {...register("confirmPass", {
                      required: "Confirm Password is required",
                      validate: {
                        matchesPassword: (value) =>
                          value === getValues("password") ||
                          "The passwords do not match",
                      },
                    })}
                  />
                  {/* <StyledEyeSlashIcon onClick={showPassFun} /> */}
                  <Span>{errors.confirmPass?.message}</Span>
                </FormRow>
              </InputWrapper>
            </InputsWrapper>

            <BtnsWrapper>
              {/* {isPending ? (<h3>Submiting...</h3>):(<Button2>Submit</Button2>)} */}
              <Button2>Submit</Button2>
              <Button2 className="gray" type="reset">
                Cancel
              </Button2>
            </BtnsWrapper>
          </Form>
        </Container>
      </FormWrapper>
    </MyProfileWrapper>
  );
};

export default MyProfile;
