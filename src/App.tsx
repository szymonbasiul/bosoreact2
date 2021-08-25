import React, { FC } from 'react';
import ImgPicker from './reusable_functions/ImgPicker';
import './App.css';
import { useRef } from 'react';
import PersonalObject from './appDivComponents/PersonalObject';



function App() {

  const mainRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const test = () => {
    console.log(mainRef.current.style.backgroundColor);
  }

  const colorChanger = () => {
    mainRef.current.style.backgroundColor === "white"
      ? mainRef.current.style.backgroundColor = "black"
      : mainRef.current.style.backgroundColor = "white";
  }

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
        <PersonalObject personalPhoto={ImgPicker("default_user")} writtenClassNumber={"one"} designer={"Bogdan T."}/>
        <PersonalObject personalPhoto={ImgPicker("default_user")} writtenClassNumber={"two"} designer={"Szymon B."}/>
      </div>
      <div className="footer">
        logo/contact us/ yt-fb-tweeter
      </div>
    </main>)
}

export default App;
