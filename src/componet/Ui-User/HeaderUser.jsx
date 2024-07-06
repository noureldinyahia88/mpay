import React, { useState } from "react";
import styled from "styled-components";
import eye from "../../assets/eye.png";
import theme from "../Variables";
import { Link, useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import Notification from "./Notfication";

const Wrapper = styled.div`
  background-color: ${theme.Color1};
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: ${theme.Color1};
  color: aliceblue;
`;
const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
`;

const ImgWrapper = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NotifWrapper = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: ${theme.fontsColor};
  cursor: pointer;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  gap: 10px;
`;

const HeaderH2 = styled.h2`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const TimerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  margin-left: 5px;
  font-size: 18px;
  font-weight: 300;
`;

// const Btn = styled(Link)`
//   padding: 10px 20px;
//   background-color: ${theme.color3};
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #1d1f2d67;
//   }
// `;
const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const A = styled(Link)`
background-color: transparent;
  color: ${theme.fontsColor};
  border: none;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    color: #d3dcea88;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const NotifWrapperWindow = styled.div`
  position: absolute;
  top: 100%;
  /* left: 0;
  right: 0; */
  /* background-color: #000; */
  display: none;
  align-items: center;
  justify-content: center;
  &.show {
    display: flex;
  }
`;
const WindowWWrapper = styled.div`
  background-color: #151620;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #f5f5f513;
  width: 200px;
  height: 200px;
`;
const HeaderUser = () => {
  const navigate = useNavigate();
  const [showNoti, setShowNoti] = useState(false);
  const toggleNoti = () => {
    console.log("Toggling notification:", !showNoti);
    setShowNoti(!showNoti);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
    localStorage.clear();
  };

  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <HeaderNav>
            <ImgWrapper>Smart Pay</ImgWrapper>
            <Ul>
              <li>
                <A to="/HomePage">Home</A>
              </li>
              <li>
                <A to="/BuyCrypto">Trade Crypto</A>
              </li>

              <li>
                <A to="/SendMoney">Send Money</A>
              </li>
              <li>
                <A to="/ReceiveMoneyAdress">Receive Money</A>
              </li>
              <li>
                <A to="/Deposit">Deposit</A>
              </li>
              <li>
                <A to="/Deposit">Get Help</A>
              </li>
            </Ul>
          </HeaderNav>

          <HeaderRight>
            <HeaderContent>
              {/* <HeaderH2>Hello, Ali</HeaderH2> */}

              <TimerWrapper>
                {/* <NotifWrapper onClick={toggleNoti}>
                  <IoMdNotificationsOutline />
                </NotifWrapper>

                <NotifWrapperWindow className={showNoti ? "show" : ""}>
                  <WindowWWrapper>
                    <Notification />
                  </WindowWWrapper>
                </NotifWrapperWindow> */}
              </TimerWrapper>
            </HeaderContent>

            <A as="button" onClick={handleLogout}>Log Out</A>
          </HeaderRight>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};

export default HeaderUser;
