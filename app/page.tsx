import Image from "next/image";
import Header from "./components/Header";
import {BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoGit, BiLogoTailwindCss, BiLogoPython, BiLogoFlask, BiLogoSass} from 'react-icons/bi';
import  { TbBrandNextjs, TbSettingsCode } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';

const iconStyle = { width: "100%", height: "100%", color: "#FFFFFF" }

const skills = [
  {name: "HTML5", icon: <BiLogoHtml5 style={iconStyle}/>},
  {name: "CSS", icon: <BiLogoCss3 style={iconStyle}/>},
  {name: "JavaScript", icon: <BiLogoJavascript style={iconStyle}/>},
  {name: "React", icon: <BiLogoReact style={ iconStyle }/> },
  {name: "NextJS", icon: <TbBrandNextjs style={ iconStyle }/>},
  {name: "NodeJS", icon: <BiLogoNodejs style={ iconStyle }/>},
  {name: "ExpressJS", icon: <SiExpress style={ iconStyle }/>},
  {name: "MongoDB", icon: <BiLogoMongodb style={ iconStyle }/>},
  {name: "Version Control (GIT)", icon: <BiLogoGit style={ iconStyle }/>},
  {name: "Styling Frameworks (Bootstrap, Tailwindcss)", icon: <BiLogoTailwindCss style={ iconStyle }/>},
  {name: "Sass", icon: <BiLogoSass style={ iconStyle }/> },
  {name: "Responsive Design", icon: <DiResponsive style={ iconStyle }/>},
  {name: "Python", icon: <BiLogoPython style={ iconStyle }/> },
  {name: "Flask", icon: <BiLogoFlask style={ iconStyle }/> },
  {name: "API Consumption and Management", icon: <TbSettingsCode style={ iconStyle }/> },
]

export default function Home() {

  return (
    <div className="w-full min-w-full min-h-screen grid grid-cols-5 gap-16 justify-center items-center bg-zinc-900">
      <Header/>
      <div className="col-span-5 grid grid-cols-5 gap-16 justify-center items-center mt-52 mb-40">
        <div className="col-span-2 h-80 grid justify-end">
          <div className="w-full h-full grid justify-end overflow-hidden">
            <Image width={270} height={270} src={"/images/me.jpg"} alt="profile photo not found" className="rounded-full"/>
          </div>
        </div>
        <div className="col-span-3 h-80">
          <div className="w-4/6 h-full p-5 flex flex-col gap-4 rounded-lg border-zinc-700 bg-zinc-800">
            <h1 className="text-5xl text-slate-300">HELLO!</h1>
            <h2 className="text-3xl text-slate-300">I AM GUSTAVO SOTO SOTO</h2>
            <h3 className="text-2xl text-slate-300">FRONT END DEVELOPER</h3>
            <p className="text-base text-slate-300 text-justify font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam similique ad dolorum non cumque atque fugiat reprehenderit soluta, architecto doloremque vitae enim animi ipsa veniam at numquam cupiditate asperiores.
            Alias non voluptatibus dolor laborum nulla amet aliquid!</p>
          </div>
        </div>
      </div>
      
      <fieldset className="col-span-5 h-auto grid grid-cols-1 gap-10 justify-center p-5 border-y border-slate-200">
        <legend className="m-auto text-slate-300 text-5xl">
          MY WORK
        </legend>
          <ul className="w-full grid grid-cols-3 list-none gap-10">
            {skills.slice(0, 6).map( (skill, key) => 
              <li key={key} className="col-span-1">
                <div className="grid grid-cols-1 justify-center gap-5 p-7 rounded-md bg-zinc-800">
                  <div className="relative m-auto w-full h-72 transition-all cursor-pointer overflow-hidden">

                    <Image src={"/images/web-template.jpg"} fill className="w-full h-full shadow-md" alt="project-preview" />

                  </div>
                  <span className="text-sm text-center text-slate-300">Project Name</span>
                </div>
              </li> 
            )}
          </ul>
        <div className="w-full grid justify-center">
          <h2 className="text-2xl text-slate-300 tracking-widest">AND MUCH MORE...</h2>
        </div>
      </fieldset>
      <fieldset className="col-span-5 h-auto grid grid-cols-1 gap-10 justify-center p-5 border-y border-slate-200">
        <legend className="m-auto text-slate-300 text-5xl">
          SKILLS
        </legend>
          <ul className="w-full grid grid-cols-5 list-none gap-2">
            {skills.map( (skill, key) => 
              <li key={key} className="col-span-1">
                <div className="grid grid-cols-1 justify-center gap-2 p-2">
                  <div className="m-auto w-40 h-40 hover:-rotate-180 transition-all cursor-pointer">{skill.icon}</div>
                  <span className="text-sm text-center text-slate-300">{skill.name}</span>
                </div>
              </li> 
            )}
          </ul>
        <div className="w-full grid justify-center">
          <h2 className="text-2xl text-slate-300 tracking-widest">AND MUCH MORE...</h2>
        </div>
      </fieldset>
    </div>
  )

}
