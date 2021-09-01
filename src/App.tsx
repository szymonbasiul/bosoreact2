import ImgPicker from './reusable_functions/ImgPicker';
import './styles/App.css';
import { useRef, useState } from 'react';
import PersonalContainer from './appDivComponents/PersonalContainer';
import Footer from './appDivComponents/Footer';
import ProjectContainer from './appDivComponents/ProjectContainer';

function App() {
  const mainRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const [mainClassColor, setMainClassColor] = useState("mainWhite");


  const colorChanger = () => {
    // const refShortcut = mainRef.current;
    mainClassColor === "mainWhite"
      ? setMainClassColor("mainBlack")
      : setMainClassColor("mainWhite")
  }

  const default_text = ("Lorem ipsum dolor sit amet consectetur adipisicing elit" +
    "Dignissimos, minima ullam? Tempora minima, dolorem eligendi maiores expedita" +
    "rem quod dignissimos natus! Nisi sed, molestiae voluptatum in minima accusamus autem fugit.")

  
  return (
    <main className={mainClassColor} ref={mainRef}>
      <button className="color-mode" onClick={colorChanger}>Color Mode</button>
      <div className="logoContainer">
        <img className="logotype" src={ImgPicker("bosoreactprojectlogo")} alt="logo">
        </img>
      </div>
      <PersonalContainer />
      <ProjectContainer />
      <Footer />
    </main>)
}
export default App;
