import React from "react";
import styled from "@emotion/styled";
import { Nav, NavItem } from "../ui";

const Footer = () => (
  <Wrap>
    <Nav>
      <NavItem color="white">Terms and Conditions</NavItem>
      <NavItem color="white">Privacy Policy</NavItem>
    </Nav>
  </Wrap>
);
export default Footer;

const Wrap = styled.footer`
  background: #3c3f43;
  display: flex;
  justify-content: center;
  align-items: center;
`;
