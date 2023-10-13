import React from "react";
import styled from "@emotion/styled";
import { Nav, NavItem } from "../ui";

const navArr = ["About us", "What we do", "Our staff", "Contact u"];
const Header = () => (
  <Wrap>
    <Logo src="/icons/Logo.png" alt="logo" />
    <Nav>
      {navArr.map((text, id) => (
        <NavItem key={id} color="black">
          {text}
        </NavItem>
      ))}
    </Nav>
  </Wrap>
);
export default Header;

const Wrap = styled.header`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: auto;
  height: 40px;
  @media (max-width: 600px) {
    height: 20px;
  }
`;
