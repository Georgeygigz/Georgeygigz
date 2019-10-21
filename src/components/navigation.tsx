import React from 'react'
import styled from 'styled-components';
import { Cambria } from '../styles/type';

class Navigation extends React.Component {
    render() {
        return (
            <Header>
                  <HeaderLogo>
                      <a className="logo-item" href="#home">Gigz</a>
                  </HeaderLogo>
                  <NavigationBody>
                    <NavItem >
                        <a className="nav-item" href="#meet-george">Home</a>
                    </NavItem>
                    <NavItem >
                        <a className="nav-item" href="#portfolio">About</a>
                    </NavItem>
                    <NavItem >
                        <a className="nav-item" href="#career-objective">Career objectives</a>
                    </NavItem>
                    <NavItem >
                        <a className="nav-item" href="#contact">Contact</a>
                    </NavItem>
                </NavigationBody>
            </Header>
        )
    }
}


const HeaderLogo = styled.p`
    font-size: 20px;
    color: #fff;
    font-family: ${Cambria};
    font-weight: 800;
    text-align: center;
    margin: 0;
    padding: 5px;
    .logo-item{
      text-decoration: none;
      color: #fff;
    }
    @media only screen and (min-width: 768px) {
      margin-left: 150px;
      
    }
`;

const Header = styled.div`
  width: 100%;
  background: rgba(54, 54, 54, 1);
  position: fixed;
  z-index: 1000;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
`;

const NavigationBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 5px 20px;
  margin: 0 auto;
  background: rgba(54, 54, 54, 1);
  width: 90%;
  @media only screen and (min-width: 768px) {
    width: 40%;
    background: rgba(54, 54, 54, 1);
  }
`;

const NavItem = styled.li`
  list-style: none;
  .nav-item{
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    font-family: ${Cambria};
  }
  .nav-item:hover{
    color: #748182;
  }
`;


export default Navigation;