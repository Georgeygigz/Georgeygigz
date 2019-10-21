import React from "react";
import styled from "styled-components";
import { Cambria } from "../styles/type";

import  phone from "../assets/phone.svg";
import  github from "../assets/git.svg";
import  twitter from "../assets/twitter.svg";
import  linkedin from "../assets/linkedin.svg";
import  email from "../assets/email.svg";


class Contacts extends React.Component {
  render() {
    return (
      <PortfolioBody id="portfolio">
        <Heading>Contact me</Heading>
        <Images>
          <div className="interested">
          <img id="gigz" src={phone} alt="george profile pic" />

            <h3>Phone</h3>
            <body>
              Call or text <b>
              +254712423207
              +254789324691</b>
            </body>
          </div>

          <div className="interested">
          <img id="gigz" src={email} alt="george profile pic" />

          <h3>Email </h3>
            <body>
              Feel free to reach me at any Time
              <b>georgeymutti@gmail.com</b> 
            </body>
          </div>
          <div className="interested">
          <img id="gigz" src={twitter} alt="georgey profile pic" />

          <h3>twitter</h3>
            <body>
              Follow me on twitter
             <b>@georgeygigz</b> 
            </body>
          </div>

          <div className="interested">
          <img id="gigz" src={linkedin} alt="georgey profile pic" />

          <h3>Linkedin</h3>
            <body>
             Lets connect on linkedIn.
             Click here to connect with me on linkedin
            </body>
          </div>

          <div className="interested">
          <img id="gigz" src={github} alt="georgey profile pic" />

          <h3>Github</h3>
            <body>
              Lets collaborate to build solutions on existing problem.
              follow me on github. <b> georgeygigz </b> 
            </body>
          </div>

          
        </Images>
      </PortfolioBody>
    );
  }
}

const PortfolioBody = styled.div`
  width: 100%;
  background: #f9f8eb;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  .interested h3{
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .interested img{
    height:20%;
    width:20%;
    margin: 0px 0px 0px 40%;
  }
  .interested {
    width: 100%;
    margin: 0 auto 10px auto;
    height: 10%;
    padding:15px
    border-radius: 5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color:#fff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    text-shadow: 2px 2px 8px #363636;

    @media only screen and (min-width: 768px) {
      width: 30%;
      margin-bottom: 15px;
    }
  }
`;

const Heading = styled.h1`

  font-size: 30px;
  text-align: center;
  font-family: ${Cambria};
  font-weight: 600;
  padding-top: 80px;
  color: #363636;
`;

export default Contacts;
