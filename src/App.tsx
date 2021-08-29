import React, { FC } from 'react';
import ImgPicker from './reusable_functions/ImgPicker';
import './styles/App.css';
import './styles/Footer.css';
import { useRef, useEffect } from 'react';
import PersonalContainer from './appDivComponents/PersonalContainer';

function App() {
  console.log(1)
  useEffect(() => {
    console.log(mainRef.current.style);
  });

  const mainRef = useRef() as React.MutableRefObject<HTMLDivElement>

  // setTimeout(() => {
  //   console.log(mainRef.current.style);
  // }, 2000);

  const colorChanger = () => {
    
    const refShortcut = mainRef.current;
    refShortcut.style.backgroundColor === "rgb(255, 255, 255)"
      ? refShortcut.style.backgroundColor = "rgb(0, 0, 0)"
      : refShortcut.style.backgroundColor = "rgb(255, 255, 255)";
  }

  const backgroundColor1 = "black"
  const backgroundColor2 = "white"

  const default_text = ("Lorem ipsum dolor sit amet consectetur adipisicing elit" +
    "Dignissimos, minima ullam? Tempora minima, dolorem eligendi maiores expedita" +
    "rem quod dignissimos natus! Nisi sed, molestiae voluptatum in minima accusamus autem fugit.")

  return (

    <main ref={mainRef}>
      <button className="color-mode" onClick={ colorChanger }>Color Mode</button>
      <div className="logoContainer">
        <img className="logotype" src={ImgPicker("bosoreactprojectlogo")} alt="logo">
        </img>
      </div>
      <PersonalContainer />
      <div className="footer">
        logo/contact us/ yt-fb-tweeter
      </div>
    </main>)
}

export default App;
