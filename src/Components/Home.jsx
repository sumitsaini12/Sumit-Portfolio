import React from "react";

function Home() {

  return (

    <div name="home" className="bg-slate-100 md:h-screen  md:flex justify-center items-center p-4 flex-row-reverse ">
      <div className="m-auto mb-6 flex flex-1 shrink-0 items-center justify-center p-8">
        <img className="md:mt-6 mt-20" src="https://media.discordapp.net/attachments/937339895591079957/1004612274356486216/20220802_235829_229.png?width=386&height=385" />
      </div>
      <div className="md:w-3/5 md:py-5 md:pl-16 md:pr-8 ">
        <h1 className="mt-5 text-4xl lg:text-6xl text-center md:text-left sm:text-5xl font-bold">Hi, I am  <span className="text-purple-600">Sumit</span></h1>
        <h2  className="mt-3 flex flex-col text-center text-4xl font-bold md:text-left sm:text-5xl">Frontent React Developer</h2>
        <p className="mt-5 text-center text-xl text-gray-600 md:text-left">I'm a frondend react developer and this is my official portfolio website to showes all details and work exprins web development.</p>
        <div className="mt-7 flex justify-center md:justify-start">
          <a className="inline-block rounded-md bg-purple-500 drop-shadow-lg hover:drop-shadow-2xl px-5 py-2 font-medium text-white" href="https://drive.google.com/file/d/1-0YEP1QIx4y37K7UeBd-bvtmbwhktBVb/view?usp=sharing" target="_blank">download Resume</a>
        </div>
      </div>
    </div>

  );
}

export default Home
