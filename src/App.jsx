import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Interests from "./components/interests/Interests";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Tools from "./components/tools/Tools";
import {useState} from "react";
import "./app.scss"

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuActive} setMenuOpen={setMenuActive}/>  
      <Menu menuOpen={menuActive} setMenuOpen={setMenuActive}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Tools/>
        <Portfolio/>
        <Interests/>
        <Contact/>
      </div>
      <div className="footer">
        <div className="wrapper">
          <p>© 2021 - 2022 | Designed & coded with 💙 by Angel Guerrero</p>
        </div>
      </div>
    </div>
  );
}

export default App;
