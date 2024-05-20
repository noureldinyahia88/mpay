import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../Variables";
import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon2.png";
import icon3 from "../../assets/Icon3.png";
import icon4 from "../../assets/Icon4.png";
import icon5 from "../../assets/Icon5.png";

const Button = styled(NavLink)`
  margin-top: 10px;
  width: 53px;
  height: 53px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: ${theme.color3};
    color: ${theme.white};
  }

  &:hover {
    background-color: ${theme.color3};
  }
`;
const Img = styled.img``;

const Wrapper = styled.div`
  background-color:#151620;
  width: 60px;
  height:90vh;
  padding: 5px;
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarWrapper>
        <Button
          className="navLink"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <Img src={icon1} style={{ fontSize: "20px" }} />
        </Button>

        <Button
          className="navLink"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <Img src={icon2} style={{ fontSize: "20px" }} />
        </Button>

        <Button
          className="navLink"
          to="/StaticsPage"
          style={{ textDecoration: "none" }}
        >
          <Img src={icon3} style={{ fontSize: "20px" }} />
        </Button>

        <Button
          className="navLink"
          to="/addnewadmin"
          style={{ textDecoration: "none" }}
        >
          <Img src={icon4} style={{ fontSize: "20px" }} />
        </Button>

        <Button
          className="navLink"
          to="/MyProfile"
          style={{ textDecoration: "none" }}
        >
          <Img src={icon5} style={{ fontSize: "20px" }} />
        </Button>
      </SidebarWrapper>
    </Wrapper>
  );
};

export default Sidebar;
