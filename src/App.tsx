import React, { FC } from 'react';
import ImgPicker from './reusable_functions/ImgPicker';
import './App.css';
import { useRef } from 'react';
import { StarsContainerComponent } from './score_star/StarsContainerComponent';


function App() {
  console.log("Zlo!")

  const mainRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const test = () => {
    console.log(mainRef.current.style.backgroundColor);
  }

  const colorChanger = () => {
    mainRef.current.style.backgroundColor === "white"
      ? mainRef.current.style.backgroundColor = "black"
      : mainRef.current.style.backgroundColor = "white";
  }

  // const intro = "BoSo Company"
  const designer1 = "Bogdan T."
  const designer2 = "Szymon B."

  const backgroundColor1 = "black"
  const backgroundColor2 = "white"


  const default_text = ("Lorem ipsum dolor sit amet consectetur adipisicing elit" +
    "Dignissimos, minima ullam? Tempora minima, dolorem eligendi maiores expedita" +
    "rem quod dignissimos natus! Nisi sed, molestiae voluptatum in minima accusamus autem fugit.")

  return (

    <main ref={mainRef}>
      <button className="color-mode" onClick={() => { colorChanger() }}>Color Mode</button>
      <div className="logoContainer">
        <img className="logotype" src={ImgPicker("bosoreactprojectlogo")} alt="logo">
        </img>
      </div>
      <div className="personal-container">
        <div className="person-one-container">
          <div className="person-one">
            <div className="photo">
              <img className="person-img" src={ImgPicker("default_user")} alt="user_face" />
            </div>
            <div className="personal-info">
              {/* {default_text} */}
            </div>
          </div>
          <div className="personal-bar-one">
            {designer1}
          </div>
        </div>

        <div className="person-two-container">
          <div className="personal-bar-two">
            {designer2}
          </div>
          <div className="person-two">
            <div className="photo">
              <img className="person-img" src={ImgPicker("default_user")} alt="user_face2" />
            </div>
            <div className="personal-info">
              {/* {default_text} */}
              <ul>
                <ol>
                  <StarsContainerComponent skillName={'SCSS/CSS '}
                    numberOfStars={5} numberOfFilledStars={2} />
                </ol>
                <ol><StarsContainerComponent skillName={'CSS/Sass'}
                  numberOfStars={5} numberOfFilledStars={3} />
                </ol>
                <ol><StarsContainerComponent skillName={'React/Typescript'}
                  numberOfStars={5} numberOfFilledStars={2} />
                </ol>
                <ol><StarsContainerComponent skillName={'Node/Express'}
                  numberOfStars={5} numberOfFilledStars={2} />
                </ol>
                <ol> MySQL <StarsContainerComponent skillName={'Node/Express'}
                  numberOfStars={5} numberOfFilledStars={2} />
                </ol>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        logo/contact us/ yt-fb-tweeter
      </div>
    </main>)
}

export default App;
