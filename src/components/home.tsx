import React from "react";
import styled from "styled-components";
import Header from "../assets/Header.jpg";
import { Cambria } from "../styles/type";

class Home extends React.Component {
  render() {
    return (
      <HomeBody id="home">
        <img className="main-img" src={Header} alt="Main" />
        <Hello>Hey Guys</Hello>
        <NameText>My name is George.</NameText>
        <WelcomeText>Welcome to my Portfolio.</WelcomeText>
      </HomeBody>
    );
  }
}

const HomeBody = styled.div`
//   background-image: linear-gradient(to top,#1e353b 0%,rgba(92, 7, 7, 0) 100%), url("../../assets/images/Header.jpg");
    .main-img{
        width: 100%;
        height: 100vh;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(10,10,10,0.65) 100%);
        
    }
`;

const NameText = styled.div`
  position: absolute;
  top: 59%;
  left: 50%;
  text-align: center;
  width: 100%;
  color: #fff;
  font-size: ;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  transform: translate(-50%, -50%);
  @media only screen and (min-width: 600px) {
    font-size: 25px;
  }
`;

const Hello = styled.div`
    position: absolute;
    top: 52%;
    left: 50%;
    color: #fff;
    width: 100%;
    text-align: center
    font-size: 25px;
    font-family: ${Cambria};
    font-weight: 600;
    transform: translate(-50%, -50%);
    @media only screen and (min-width: 600px) {
        font-size: 40px;
    }
`;

const WelcomeText = styled.div`
  position: absolute;
  top: 66%;
  left: 50%;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 100%;
  font-weight: 500;
  font-family: ${Cambria};
  transform: translate(-50%, -50%);
  @media only screen and (min-width: 600px) {
    font-size: 25px;
  }
`;

export default Home;
