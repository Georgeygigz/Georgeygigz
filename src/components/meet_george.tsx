import React from "react";
import styled from "styled-components";
import { Cambria } from "../styles/type";
import George from "../assets/George.jpg";

class About extends React.Component {
  render() {
    return (
      <MainBody id="meet-george">
        <AboutBody>
          <MyImage>
            <img id="gigz" src={George} alt="georgey profile pic" />
          </MyImage>
          <TextArea>
            <Title>Meet Georgey Gigz.</Title>
            <Description>TECH ENTHUSIAST / PROFICIENT IN WEB DEVELOPMENT AND DATA ANALYSIS</Description>
            <TextBody>
              Meet Georgey Gigz, Software developer at Andela, most passionate
              about technology. Inspired by solving real life problem using tech
              solution.
            </TextBody>
            <ContactButton>
              <a href="#contact" className="contact-btn">
                Contact Me
              </a>
            </ContactButton>
          </TextArea>
        </AboutBody>
      </MainBody>
    );
  }
}

const MainBody = styled.div`
  background: #fff;
  max-width: 100%;
`;

const AboutBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding-top: 80px;
`;

const Description = styled.p`
  color: #9999;
  font-size: 14px;
  font-family: ${Cambria};
`;

const TextArea = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const MyImage = styled.div`
  width: 100%;
  margin: 0;
  #gigz {
    width: 80%;
    height: auto;
    border-radius: 2000px;
    border: 3px solid #363636;
 
  }
  @media only screen and (min-width: 600px) {
    #gigz {
      width: 50%;
      height: auto;
      border-radius: 2000px;
      border: 3px solid #363636;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    #gigz {
      width: 45%;
      height: auto;
      border-radius: 2000px;
      border: 3px solid #363636;
    }
  }
`;

const Title = styled.span`
  font-size: 40px;
  font-family: ${Cambria};
  font-weight: 900;
  color: #333;
`;

const TextBody = styled.p`
  font-size: 20px;
  color: #748182;
  font-family: ${Cambria};
  line-height: 1.6;
`;

const ContactButton = styled.div`
  margin-top: 40px;
  .contact-btn {
    background: white;
    padding: 5px 30px 5px 30px;
    font-family: ${Cambria};
    border-radius: 4px;
    border: 2px solid #363636;
    text-decoration: none;
    font-size: 20px;
    color: #363636;
  }

  .contact-btn:hover {
    background: #746353;
    color: #fff;
    padding: 5px 40px 5px 40px;

  }
`;

export default About;
