import React from "react";

function Home() {

  return (

    <div name="home" class="bg-slate-100 sm:h-screen  sm:flex justify-center items-center p-4 flex-row-reverse ">
      <div class="m-auto mb-6 flex flex-1 shrink-0 items-center justify-center p-8">
        <img class="sm:mt-6 mt-20" src="https://media.discordapp.net/attachments/937339895591079957/1004612274356486216/20220802_235829_229.png?width=386&height=385" />
      </div>
      <div class="sm:w-3/5 sm:py-5 sm:pl-16 sm:pr-8">
        <p class="mt-5 flex flex-col text-center text-3xl font-bold sm:text-left sm:text-4xl md:text-5xl">Hi, I am <span className="text-purple-500">Sumit,</span> <span>Frontent React Developer</span></p>
        <p class="mt-5 text-center text-xl text-gray-600 sm:text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <div class="mt-7 flex justify-center sm:justify-start">
          <a class="inline-block rounded-md bg-purple-500 px-5 py-2 font-medium text-white" href="https://drive.google.com/file/d/1-0YEP1QIx4y37K7UeBd-bvtmbwhktBVb/view?usp=sharing" target="_blank">download Resume</a>
        </div>
      </div>
    </div>
  
  );
}

export default Home


{/* // <div class="bg-slate-100 h-screen p-4">
</div> */}