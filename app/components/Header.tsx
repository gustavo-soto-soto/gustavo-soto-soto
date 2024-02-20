"use client"

import { useState, useEffect } from "react";

const Header = () => {

  const [current, setCurrent] = useState("resume")

  useEffect( () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        if (anchor) {
          const targetId = anchor.getAttribute('href')?.substring(1);
          const targetElement = targetId ? document.getElementById(targetId) : null;

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    });
  }, [])

  return (
    <header className="w-full min-w-full h-12 pl-5 flex justify-between items-center bg-zinc-800 sticky top-0 z-50 max-sm:p-0">
      <div className="w-48 h-full flex justify-start items-center max-sm:hidden">
        <h1 className="text-lg text-[#EDEDED]">Gustavo Soto Soto</h1>
      </div>
      <div className="w-auto h-full flex justify-end items-center pr-5 max-sm:w-full max-sm:p-0 max-sm:justify-between">
        <a
          href="#resume"
          className="h-full w-28 text-[#EDEDED] font-extralight border-r text-center grid justify-center items-center transition-all hover:text-emerald-400 hover:scale-110 max-sm:w-1/4"
          onClick={ () => setCurrent("resume" ) }
          style={ { color: current === "resume" ? "rgb(52 211 153)" : "" } }
        >
          Resume
        </a>
        <a
          href="#projects"
          className="h-full w-28 text-[#EDEDED] font-extralight border-r text-center grid justify-center items-center transition-all hover:text-emerald-400 hover:scale-110 max-sm:w-1/4"
          onClick={ () => setCurrent("projects" ) }
          style={ { color: current === "projects" ? "rgb(52 211 153)" : "" } }
        >
          Projects
        </a>
        <a
          href="#about"
          className="h-full w-28 text-[#EDEDED] font-extralight border-r text-center grid justify-center items-center transition-all hover:text-emerald-400 hover:scale-110 max-sm:w-1/4"
          onClick={ () => setCurrent("about" ) }
          style={ { color: current === "about" ? "rgb(52 211 153)" : "" } }
        >
          About
        </a>
        <a
          href="#contact"
          className="h-full w-28 text-[#EDEDED] font-extralight text-center grid justify-center items-center hover:text-emerald-400 hover:scale-110 max-sm:w-1/4"
          onClick={ () => setCurrent("contact" ) }
          style={ { color: current === "contact" ? "rgb(52 211 153)" : "" } }
        >
          Contact
        </a>
      </div>
    </header>
  )
  
}

export default Header
