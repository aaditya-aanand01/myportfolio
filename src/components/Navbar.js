import React, { useState} from 'react';
// import {Link as LinkR} from 'react-router-dom';
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import MyLogo from "../images/MyLogo.png";

const Nav = styled.div`
  background-color: ${({theme}) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;




const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

// const NavLogo = styled(LinkR)`
const NavLogo = styled.a`
  width: 80%;
  padding: 38px 6px;
  display: flex;
  justify-self: flex-start:
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px){
    padding: 0 0px;
  }
`;

const Logo = styled.img`
  height: 95px;
  width: 95px;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;


const NavLink = styled.a`
  color: ${({theme}) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({theme}) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  heigth: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const GithubButton = styled.a`
  background-color: transparent;
  color: ${({theme}) => theme.primary};
  border: 1.8px solid ${({theme}) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content : center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  text-decoration: none;
  &:hover {
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.text_primary};
  }

  @media screen and (max-width: 768px){
    font-size: 0.8rem;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px){
    display: block;
    position: absolute:
    top: 0;
    right: 0:
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({theme}) => theme.text_primary};
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ open }) =>
    open ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "1000" : "-1000")};
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo href="#">
            <Logo src={MyLogo} alt="Logo"/>
        </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>w
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="display">Github Profile</GithubButton>
        </ButtonContainer>
        {open && (
          <MobileMenu open={open}>
            <NavLink onClick={() => setOpen(!open)} href="#about">
              About
            </NavLink>
            <NavLink onClick={() => setOpen(!open)} href="#skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setOpen(!open)} href="#experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setOpen(!open)} href="#projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setOpen(!open)} href="#education">
              Education
            </NavLink>
            <GithubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GithubButton>
          </MobileMenu>
        )}
      </NavContainer>

    </Nav>
  )
}

export default Navbar
