import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav, Card, Button } from "react-bootstrap";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import boggle from "../assets/img/boggle.png"
import JavaFX from "../assets/img/JavaFX_Logo.png"
import git from "../assets/img/git.png"
import tetris from "../assets/img/tetris.png"
import portfolio from "../assets/img/portfolio.png"
import react from "../assets/img/react.png"
import C from "../assets/img/C.png"
import chatserver from "../assets/img/chat-server.png"
import artblog from "../assets/img/art-blog.png"
import html from "../assets/img/html.png"
import jquery from "../assets/img/jquery.png"
import python from "../assets/img/python.png"
import food from "../assets/img/food.png"

export const Projects = () => {
  
  useEffect(() => {
    AOS.init();
  }, []); 

  return (
    <section className="project" id="project">
      <Container>
      <h2>Projects</h2>
      <br></br><br></br><br></br>
        <Row className="project-card"  data-aos="fade-up" data-aos-duration="1000">
          <Col lg={6} xs={12} className="project-card__img">
            <img src={boggle} alt="" />
          </Col>
          <Col lg={6} xs={12}className="project-card__content">
            <h3>Boggle</h3>
            <div className="project-contributors">Other Contributors: Mamoon Akhtar, Haris Rao, Vanshika Vanshika</div>
            <Row>    
                <img src={JavaFX} alt="JavaFX" className='tools'></img>
                <img src={git} alt="Git" className='tools-git'></img>    
            </Row>
            <ul>
              <li>Developed Boggle game following Scrum and Agile methodology and SOLID design principles.</li>
              <li>Implemented a dynamic scoreboard, an eye care mode (warm color scheme), and a backtracking algorithm for word validation.</li>
              <li>Customizable gameplay: users can enter their own letters or use computer-generated ones on 4x4 or 5x5 boards.</li>
              <li>Utilized design patterns: Singleton (scoreboard), MVC (game board), Observer (timer feature), and Factory (hint feature).</li>
            </ul>
          <p>Code is available on request.</p>            
          </Col>
        </Row>

        <Row className="project-card"  data-aos="fade-up" data-aos-duration="1000">
          <Col lg={6} xs={12} className="project-card__img">
            <img src={tetris} alt="Tetris" />
          </Col>
          <Col lg={6} xs={12} className="project-card__content">
            <h3>Tetris</h3>  
            <img src={JavaFX} alt="JavaFX" className='tools'></img>
            <ul>
              <li>Created a Java-based Tetris game using JavaFX and OOP principles, featuring an interactive GUI.</li>
              <li>Implemented core gameplay mechanics, such as piece rotation, pause/play functionality, and saving/replaying boards.</li>
              <li>Designed a slider feature to adjust the game's speed.</li>
              <li>Developed a scoring system to track and display players' scores and progress in real-time.</li>
            </ul>
          <p>Code is available on request.</p>           
          </Col>
        </Row>

        <Row className="project-card"  data-aos="fade-up" data-aos-duration="1000">
          <Col lg={6} xs={12} className="project-card__img">
            <img src={chatserver} alt="Chat Server" />
          </Col>
          <Col lg={6} xs={12} className="project-card__content">
            <h3>Chat Server</h3>  
            <img src={C} alt="C" className='tools'></img>
            <ul>
              <li>Developed using non-blocking sockets and the select() call to handle up to 32 simultaneous client connections.</li>
              <li>Created a process that listens for incoming connections and creates a new socket for each client.</li>
              <li>Used dynamic memory management and data structures to handle client information and message queues.</li>
              <li>Implemented functions to send and receive partial and complete messages between the clients.</li>
              <li>Added error checks and functionality to handle disconnections gracefully.</li>
            </ul>
          <p>Code is available on request.</p>           
          </Col>
        </Row>

        <Row className="project-card"  data-aos="fade-up" data-aos-duration="1000">
          <Col lg={6} xs={12} className="project-card__img">
            <img src={artblog} alt="art blog" />
          </Col>
          <Col lg={6} xs={12} className="project-card__content">
            <h3>Art Portfolio & Blog</h3>
            <Row>    
                <img src={html} alt="JavaFX" className='tools'></img>
                <img src={jquery} alt="Git" className='tools-git'></img>    
            </Row>
            <ul>
              <li>Created a personal website to showcase my artwork.</li>
              <li>Implemented responsive design using W3.CSS.</li>
              <li>Utilized AOS (Animate on Scroll) library to add animations.</li>
              <li>Employed design techniques including artistic typography and parallax effect.</li>
            </ul>
            <Row>
              <Col lg={4} xs={6}>
                <a href="https://github.com/inaas7/art-by-inaas" target="_blank">
                  <button className='source-code'><span>Source Code</span></button>
                </a>
              </Col>
              <Col lg={4} xs={6}>
                <a href="https://inaas7.github.io/art-by-inaas/" target="_blank">
                  <button className='source-code'><span>Demo</span></button>
                </a>
              </Col>
            </Row>                        
          </Col>
        </Row>

        <Row className="project-card"  data-aos="fade-up" data-aos-duration="1000">
          <Col lg={6} xs={12} className="project-card__img">
            <img src={food} alt="food recommendation system" />
          </Col>
          <Col lg={6} xs={12} className="project-card__content">
            <h3>Food Recommendation System</h3>    
              <img src={python} alt="python" className='tools-python'></img>
            <ul>
              <li>Developed for a hackathon under "randomness" theme in beginner category.</li>
              <li>Used OOP principles to recommend random recipes from a CSV file.</li>
              <li>Allows users to add custom recipes for personalized suggestions.</li>
              <li>Offers three main options: get a random recommended recipe; find recipes containing specific ingredient(s); discover recipes that can be made with only the input ingredients.</li>
            </ul>
            <Row>
              <Col lg={4} xs={6}>
                <a href="https://github.com/inaas7/food-recommender" target="_blank">
                  <button className='source-code'><span>Source Code</span></button>
                </a>
              </Col>
              <Col lg={4} xs={6}>
                <a href="https://devpost.com/software/food-recommender" target="_blank">
                  <button className='source-code'><span>Demo</span></button>
                </a>
              </Col>
            </Row>                        
          </Col>
        </Row>

        <Row className="project-card"  data-aos="fade-up" data-aos-duration="1000">
          <Col lg={6} xs={12} className="project-card__img">
            <img src={portfolio} alt="personal-portfolio" />
          </Col>
          <Col lg={6} xs={12} className="project-card__content">
            <h3>This Website</h3>
            <img src={react} alt="HTML/CSS and React" className='tools'></img>
            <ul>
              <li>Implemeted a responsive design using React Bootstrap.</li>
              <li>Utilized AOS (Animate on Scroll) and Animate.css libraries to add animations.</li>
            </ul>
              <a href="" target="_blank">
                <button className='source-code'><span>Source Code</span></button>
              </a> 
                        
          </Col>
        </Row>
        
      </Container>
    </section>
  )
}
