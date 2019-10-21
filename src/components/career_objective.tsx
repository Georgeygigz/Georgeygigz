import React from "react";
import styled from "styled-components";
import { Cambria } from "../styles/type";
import  career from "../assets/career.svg";
import  skills from "../assets/skills.svg";
import  job from "../assets/job.svg";


class   CareerObjective extends React.Component {
  render() {
    return (
      <PortfolioBody id="career-objective">
        <Heading>Career Objective </Heading>
        <Images>
          <div className="interested">
          <img id="gigz" src={skills} alt="george profile pic" />

            <h3>Skills</h3>
            <body className="article-body">
            Good interpersonal skills and communication skills, ability
             and willingness to work flexibly, quick learner, team player.
              Software developer proficient in Python, React js, Node js with an interest in Data Science.
            </body>
          </div>

          <div className="interested">
          <img id="gigz" src={career} alt="george profile pic" />

          <h3>Career Objective </h3>
            <body className="article-body">
            To utilize proficient skills and techniques to the
             best of my ability in any institution that is competitive,
              growth oriented and that demands total dedication, hard work
               to cause emphasize application of knowledge for personal growth 
               and advancement and for the benefit of the institution.

            </body>
          </div>
          <div className="interested">
          <img id="gigz" src={job} alt="george profile pic" />

          <h3>Current Job</h3>
            <body className="article-body">
            Software developer At Andela. Working on internal product to deliver
            new features, writing unitest and fixing existing bugs.
            </body >
          </div>
        </Images>
      </PortfolioBody>
    );
  }
}

const PortfolioBody = styled.div`
  width: 100%;
  background: #fff;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: ${Cambria};
  .interested h3{
    text-align: center;
  font-family: ${Cambria};
    text-shadow: 2px 2px 8px #363636;
  }
  .interested img{
    height:20%;
    width:20%;
    margin: 0px 0px 0px 40%;
  }
  .interested {
    width: 100%;
    margin: 0 auto 15px auto;
    height: 10%;
    padding:15px
    border-radius: 5px;
  font-family: ${Cambria};
    background-color:#f9f8eb;
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

export default CareerObjective;
