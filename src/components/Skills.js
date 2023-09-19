import React, { useEffect } from 'react';
import colorSharp from "../assets/img/color-sharp.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, []);  

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-md-4">
                  <div className="card1" data-aos="fade-up" data-aos-duration="1000">
                    <h5>Languages</h5>
                    <p>Python<br></br>
                      Java<br></br>
                      C and C++<br></br>
                      HTML/CSS<br></br>
                      JavaScript<br></br>
                      Bash<br></br>
                    </p>
                  </div>
                  <br></br>
                </div>
                <div className="col-md-4">
                  <div className="card1" data-aos="fade-up" data-aos-duration="1000">
                    <h5>Developer Tools</h5>
                    <p>
                      GitHub<br></br>
                      VS Code<br></br>
                      PyCharm<br></br>
                      JavaFX Scene Builder<br></br>
                      Unity<br></br>
                      Canva<br></br>
                      Figma<br></br>
                      Jupyter Notebook<br></br>
                    </p>
                  </div>
                  <br></br>
                </div>
                <div className="col-md-4">
                  <div className="card1" data-aos="fade-up" data-aos-duration="1000">
                    <h5>Technologies/Frameworks</h5>
                    <p>
                      Linux/Unix (Shell)<br></br>
                      JUnit<br></br>
                      ReactJS<br></br>
                      NextJS<br></br>
                      Bootstrap<br></br>
                      JavaFX<br></br>
                      Pandas<br></br>
                      Streamlit<br></br>
                      OpenCV<br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
