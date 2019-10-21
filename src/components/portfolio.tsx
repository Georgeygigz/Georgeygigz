import React from "react";
import styled from "styled-components";
import { Cambria } from "../styles/type";
import  education from "../assets/education.svg";
import  goals from "../assets/goals.svg";
import  fun from "../assets/fun.svg";


class Portfolio extends React.Component {
  render() {
    return (
      <PortfolioBody id="portfolio">
        <Heading>About Gigz.</Heading>
        <Images>
          <div className="interested">
          <img id="gigz" src={education} alt="georgey profile pic" />

            <h3>Education</h3>
            <body>
              Went to Machakos University and graduated with a Bachelor of
              science in Computer Science Currently a software developer
            </body>
          </div>

          <div className="interested">
          <img id="gigz" src={goals} alt="georgey profile pic" />

          <h3>Goals </h3>
            <body>
              I would like to be a world-class developer who contributes in solving
              real life problem using tech solutions.
            </body>
          </div>
          <div className="interested">
          <img id="gigz" src={fun} alt="georgey profile pic" />

          <h3>Fun fact In</h3>
            <body>
              Socializing and hanging around with friends. I am a lover of
              soccer, music instruments, pool, and exploring the Nature
              and its wonder
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
  font-family: ${Cambria};

`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  .interested h3{
    text-align: center;
  font-family: ${Cambria};

    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-shadow: 2px 2px 8px #363636;
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
  font-family: ${Cambria};
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color:#fff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

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

export default Portfolio;
