import React from "react";
import HTML from "./SkillsImg/html.png";

function SkillsCart({ Img }) {

  return (
    <div className="h-40 w-40 hover:drop-shadow-xl flex justify-center items-center bg-white rounded-full p-4">
      <img src={Img} className="w-24 mt-3" />
    </div>
  );
}

export default SkillsCart
