import ImgPicker from './reusable_functions/ImgPicker';
import './styles/App.css';
import { useRef } from 'react';
import PersonalContainer from './appDivComponents/PersonalContainer';
import Footer from './appDivComponents/Footer';

function App() {
  const mainRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const colorChanger = () => {
    const refShortcut = mainRef.current;
    refShortcut.style.backgroundColor !== "rgb(0, 0, 0)"
      ? refShortcut.style.backgroundColor = "rgb(0, 0, 0)"
      : refShortcut.style.backgroundColor = "rgb(252, 252, 252)";
  }

  const default_text = ("Lorem ipsum dolor sit amet consectetur adipisicing elit" +
    "Dignissimos, minima ullam? Tempora minima, dolorem eligendi maiores expedita" +
    "rem quod dignissimos natus! Nisi sed, molestiae voluptatum in minima accusamus autem fugit.")

  return (
    <main ref={mainRef}>
      <button className="color-mode" onClick={colorChanger}>Color Mode</button>
      <div className="logoContainer">
        <img className="logotype" src={ImgPicker("bosoreactprojectlogo")} alt="logo">
        </img>
      </div>
      <PersonalContainer />
      <Footer />
    </main>)
}
export default App;
