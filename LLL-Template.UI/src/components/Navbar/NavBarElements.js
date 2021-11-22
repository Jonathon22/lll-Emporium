import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

// eslint-disable-next-line import/prefer-default-export
export const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  height: 100px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  width: 40%;
`;

export const NavItemsLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavBarImg1 = styled.img`
  width: 50px;
  margin-left: 10px;

  @media screen and (min-width: 526px) {
    display: none;
  }
`;

export const NavLink = styled.div`
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;

  @media screen and (max-width: 1150px) {
    font-size: 18px;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 950px) {
    font-size: 15px;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 840px) {
    font-size: 15px;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 720px) {
    font-size: 15px;
    margin-left: 3px;
    margin-right: 3px;
  }

  @media screen and (max-width: 650px) {
    font-size: 12px;
    margin-left: 3px;
    margin-right: 3px;
  }

  @media screen and (max-width: 525px) {
    display: none;
  }
`;

export const NavMiddle = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  align-items: center;
`;

export const NavItemsMiddle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const NavBarImg = styled.img`
  width: 100px;
  align-self: center;
  margin-top: 5px;

  @media screen and (max-width: 950px) {
    width: 75px;
  }

  @media screen and (max-width: 650px) {
    width: 50px;
  }

  @media screen and (max-width: 525px) {
    display: none;
  }
`;

export const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 40%;
`;

export const NavItemsRight = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-right: 10px;
`;

export const NavItemsRightFlexDiv = styled.div`
  display: flex;
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

export const SearchImg = styled.img`
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

export const BagImg = styled.img`
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

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 525px){
    display: flex;
  }
`;

export const HashLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  text-align: center;

  &.activeStyle {
    border-bottom: 3px solid #fff;
  }
`;

export const Button = styled.button`
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden; 
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 10px;
  align-items: center;
  z-index: 1;
`;

export const DropDown = styled.div`
  
  &:hover ${DropDownContent} {
    display: flex;
    flex-direction: column;
    // color: white;
  }
`;

export const Column = styled.div`
  flex-direction: column;
`;
