import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

// in styled components you can do if else / ternerary operators
export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transitionL 0.3s ease-in-out;
  opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #000000;
  width: 15px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1rem;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #000000;
  width: 100%;
  height: 100%;
`;

export const SidebarMenu = styled.ul`
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  padding-top: 100px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .6rem;
  text-decoration: none;
  list-style: none;
  transtion: 0.2s ease-in-out;
  color: #000000;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 8%;
`;

export const SidebarRoute = styled(LinkR)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  color: #010606;
  font-size: .8rem;
  padding: 10px;
`;

export const SidebarRoute2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  color: #010606;
  font-size: .8rem;
  padding: 10px;
`;

export const NavBarImg1 = styled.img`
  width: 50px;
  padding-top: 10px;
`;

export const SignIn = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 30px;

  @media screen and (max-width: 650px) {
    width: 15px;
    height: 15px;
  }

  @media screen and (max-width: 525px) {
    width: 15px;
    height: 15px;
    margin-right: 15px;
  }
`;

export const Button = styled.button`
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden; 
`;
