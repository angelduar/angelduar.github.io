 import "./intro.scss"
 import { init } from "ityped";
import { useEffect, useRef } from "react";
 
 export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Astrophile", "Adventurer", "Movie Enthusiast"], //remember to add emojies
    });
  }, []);
   

   return ( 
      <div className="intro" id="intro">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Angel Guerrero</h1>
            <h3>Software Developer</h3> 
            <h4>and <span ref={textRef}></span></h4>
          </div>
          <a href="#about">
            <img src="assets/down.png" alt=""/>
          </a>
        </div>
   )
 }
 