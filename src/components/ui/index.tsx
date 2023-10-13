import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const NavItem = styled.span<{ color: string }>`
  font-family: sans-serif;
  line-height: 40px;
  margin-left: 20px;
  color: ${({ color }) => color};
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 20px;
    margin-left: 10px;
  }
`;

export const Button = styled.button<{ bgColor?: string }>`
  cursor: pointer;
  margin: 10px 0;
  height: 40px;
  width: 240px;
  border: none;
  background-color: ${({ bgColor }) => bgColor || "darkgrey"};
  color: white;
  font-size: 18px;
  border-radius: 10px;
`;
