import React from "react";
import SkillsCart from "./SkillsCart";
import HTML from "./SkillsImg/html.png";
import CSS from "./SkillsImg/css.png";
import JavaScript from "./SkillsImg/javascript.png";
import TailwindCss from "./SkillsImg/tailwindcss.png";
import react from "./SkillsImg/reactjs.png";
import Redux from "./SkillsImg/redux.png";
import ReduxSage from "./SkillsImg/redux-saga.png";
import typescript from "./SkillsImg/typescript.png";

function Skills() {

    return (
        <div className="py-10 bg-gray-200">
            <h1 className="md:text-6xl text-4xl font-bold text-purple-400 text-center my-20">My Skills</h1>
            <div className="flex flex-wrap max-w-4xl mx-auto gap-8 justify-center items-center">
              <a href="https://www.w3schools.com/html/" target="_black">{<SkillsCart Img={HTML} />}</a>  
              <a href="https://www.w3schools.com/css/default.asp" target="_black">{<SkillsCart Img={CSS} />}</a>  
              <a href="https://www.w3schools.com/js/default.asp" target="_black">{<SkillsCart Img={JavaScript} />}</a>  
              <a href="https://tailwindcss.com/docs/installation" target="_black">{<SkillsCart Img={TailwindCss} />}</a>  
              <a href="https://reactjs.org/" target="_black">{<SkillsCart Img={react} />}</a>  
              <a href="https://react-redux.js.org/" target="_black">{<SkillsCart Img={Redux} />}</a>  
              <a href="https://redux-saga.js.org/" target="_black">{<SkillsCart Img={ReduxSage} />}</a>  
              <a href="https://www.typescriptlang.org/" target="_black">{<SkillsCart Img={typescript} />}</a>  
                
                
                
                
                
                
                
            </div>
        </div>
    );
}

export default Skills
