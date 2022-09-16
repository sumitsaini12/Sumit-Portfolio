import React from "react";
import facebook from "./IconsImg/facebook.png";
import instagram from "./IconsImg/instagram.png";
import linkedin from "./IconsImg/linkedin.png";
import twitter from "./IconsImg/twitter.png";

function ContectIcons() {

    return (

        <div class="flex space-x-4 justify-center items-center ">
          <a href="https://www.instagram.com/official_sumitsaini__170/" target="_black"><img src={instagram} className="w-7 h-7" /></a>  
          <a href="https://www.facebook.com/sumit.singhsaini.334" target="_black"><img src={facebook} className="w-10 h-10" /></a>  
          <a href="https://twitter.com/sumitsa1234" target="_black"><img src={twitter} className="w-7 h-7" /></a>  
          <a href="https://www.linkedin.com/in/sumit-kumar-728468244/" target="_black"><img src={linkedin} className="w-7 h-7" /></a> 

        </div>
    )
}

export default ContectIcons
