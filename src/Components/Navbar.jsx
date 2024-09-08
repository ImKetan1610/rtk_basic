// NavBar.js
import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <Nav>
      <Heading>Admin Table</Heading>
      <Menu isOpen={isOpen}>
        <MenuLink href="#">Home</MenuLink>
        <MenuLink href="#">About</MenuLink>
        <MenuLink href="#">Project</MenuLink>
        <MenuLink href="#">Code</MenuLink>
        <MenuLink href="#">Contact</MenuLink>
      </Menu>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  width: 70%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6a0dad; /* Dark Purple */
  padding: 0 20px;
  position: relative;
  z-index: 1000;
  margin: 10px auto; /* Centers the navbar horizontally */
`;

const Heading = styled.h1`
  color: #f3e5f5; /* Light Violet */
  font-size: 1.8rem;
  font-weight: 700;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  position: absolute;
  right: 20px;

  span {
    height: 4px;
    width: 28px;
    background: #f50057; /* Magenta */
    margin-bottom: 5px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) =>
      isOpen ? "400px" : "0"}; /* Increased max-height */
    transition: max-height 0.3s ease-in-out;
    width: 100%;
    background-color: #6a0dad; /* Dark Purple */
    position: absolute;
    top: 70px; /* Places dropdown below the navbar */
    left: 0;
    right: 0;
  }
`;

const MenuLink = styled.a`
  padding: 10px 20px;
  color: #f3e5f5; /* Light Violet */
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    background-color: #9c27b0; /* Violet */
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #9c27b0; /* Violet */
  }
`;
