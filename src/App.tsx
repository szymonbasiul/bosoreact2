import * as React from 'react';
import { useState } from 'react';
import './App.css';
import { useRef } from 'react';

export interface testProps {
  event: React.MouseEvent<HTMLButtonElement>;
}
interface starGeneratorTypes {
  text: string[];
}




function App() {

  console.log("Zlo!")
  // const [backgroundColorState, setBackgroundColorState] = useState("white");

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

  const imgPicker = (imgName: string) => {
    return require("./img/" + imgName + ".png").default;
  }
  const starGenerator = (count: number) => {
    let starContainer: Array<React.HTMLProps<(imgName: string) => {}> | null | string> = [];
    for (let i = count; i > 0; i--) {
      starContainer = [...starContainer, <img key={`${i}star_skill`}
        src={imgPicker("star_skill")} alt="star" />]
    }
    for (let i = 5 - count; i > 0; i--) {
      starContainer = [...starContainer, <img key={`${i}png_skill`}
        src={imgPicker("png_star")} alt="star" />]
    }
    return starContainer
  }

  ///starGenerator(3);
  const starVariable = (<><img src={imgPicker("star_skill")} alt="star" />
    <img src={imgPicker("png_star")} alt="star" />
    <img src={imgPicker("png_star")} alt="star" />
    <img src={imgPicker("png_star")} alt="star" />
    <img src={imgPicker("png_star")} alt="star" /></>)

  return (

    <main ref={mainRef}>
      <button className="color-mode" onClick={() => { colorChanger() }}>Color Mode</button>
      <div className="logoContainer">
        <img className="logotype" src={imgPicker("bosoreactprojectlogo")} alt="logo">
        </img>
      </div>
      <div className="personal-container">
        <div className="person-one-container">
          <div className="person-one">
            <div className="photo">
              <img className="person-img" src={imgPicker("default_user")} alt="user_face" />
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
              <img className="person-img" src={imgPicker("default_user")} alt="user_face2" />
            </div>
            <div className="personal-info">
              {/* {default_text} */}
              <ul>
                <ol>
                  <div className="stars">SCSS/CSS {starGenerator(2)}</div>
                </ol>
                <ol> Canvas {starVariable}
                </ol>
                <ol> React/Typescript {starVariable}
                </ol>
                <ol> Node/Express {starVariable}
                </ol>
                <ol> MySQL {starVariable}
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
