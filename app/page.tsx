import Image from "next/image";
import {BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoGit, BiLogoTailwindCss, BiLogoVuejs, BiLogoAws, BiLogoFlask, BiLogoPython, BiLogoBootstrap} from 'react-icons/bi';
import  { TbBrandNextjs, TbSettingsCode, TbBrandVite } from 'react-icons/tb';
import { MdEmail } from "react-icons/md";
import { SiExpress, SiLinkedin } from 'react-icons/si';
import Link from "next/link";
import { Iproject } from "./interfaces/IProject";
import Header from "./components/Header";

const iconStyle = { width: "100%", height: "100%", color: "#FFFFFF" }

const skills = [
  {name: "HTML5", icon: <BiLogoHtml5 style={iconStyle}/>},
  {name: "CSS", icon: <BiLogoCss3 style={iconStyle}/>},
  {name: "JavaScript", icon: <BiLogoJavascript style={iconStyle}/>},
  {name: "TypeScript", icon: <BiLogoTypescript style={iconStyle}/>},
  {name: "React", icon: <BiLogoReact style={ iconStyle }/> },
  {name: "NextJS", icon: <TbBrandNextjs style={ iconStyle }/>},
  {name: "NodeJS", icon: <BiLogoNodejs style={ iconStyle }/>},
  {name: "MongoDB", icon: <BiLogoMongodb style={ iconStyle }/>},
  {name: "ExpressJS", icon: <SiExpress style={ iconStyle }/>},
  {name: "Python", icon: <BiLogoPython style={ iconStyle }/> },
  {name: "Flask", icon: <BiLogoFlask style={ iconStyle }/> },
  {name: "Vue", icon: <BiLogoVuejs style={ iconStyle }/>},
  {name: "ViteJS", icon: <TbBrandVite style={ iconStyle }/>},
  {name: "Tailwindcss", icon: <BiLogoTailwindCss style={ iconStyle }/>},
  {name: "Bootstrap", icon: <BiLogoBootstrap style={ iconStyle }/>},
  {name: "GIT", icon: <BiLogoGit style={ iconStyle }/>},
  {name: "AWS", icon: <BiLogoAws style={ iconStyle }/> },
  {name: "API Management", icon: <TbSettingsCode style={ iconStyle }/>},
]

const softSkills = ["Creativity", "Perseverance", "Self-motivation", "Commitment", "Empathy", "Critical thinking", "Transparency", "Resilience", "Communication"]

const getRepositories = async() => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/projects`, { method: "GET" }) //OPTION 1 MONGODB
    const { projects } = await response.json()
    projects.forEach( (project: Iproject) => project.id = project._id)
    return projects
  } catch (error) {
    console.error(error)

    try {
      const response = await fetch(process.env.GITHUB_BASE_URL + "/repos", { //OPTION 2 BACKUP GITHUB API
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      })

      const repositories = await response.json()
      return repositories.filter( (repo: any) => repo.name !== "gustavo-soto-soto")

    } catch (error) {
      console.error()
      return []
    }

  }
}

export default async function Home() {

  const repositories: Iproject[] = await getRepositories()

  return (
    <div className="w-full min-w-full min-h-screen flex flex-col justify-center items-center relative">
      <Header/>
      <div className="w-full h-[600px] flex justify-center items-center gap-10 relative z-40 max-sm:my-12" id="resume">
        <div className="w-2/4 h-[450px] p-5 flex flex-col gap-4 rounded-lg border-zinc-700 bg-zinc-800 bg-opacity-70 relative max-sm:w-5/6 max-sm:h-auto">
          <Image width={170} height={170} src={"/images/me.png"} alt="profile-photo" className="p-1 absolute top-0 right-0 rounded-3xl drop-shadow-2xl
           max-sm:w-20 max-sm:h-20"/>
          <h1 className="text-5xl text-slate-300">HELLO!</h1>
          <h2 className="text-3xl text-slate-300">I AM GUSTAVO SOTO SOTO</h2>
          <h3 className="text-2xl text-slate-300">FRONT END DEVELOPER</h3>
          <p className="text-lg text-slate-300 text-justify font-light">Web developer with the ambition to be a better professional every day. <br/> I set my goals and work hard to achieve them. I like challenges that can be solved with technology, because the limit is in your mind! .</p>
          <hr className="border-t border-slate-200"/>
          <div className="w-full flex justify-start items-start">
            <div className="w-full grid grid-cols-1 justify-start items-center tracking-wider p-5 bg-zinc-800 opacity-70 rounded-md">
              <div className="w-full flex justify-start items-center gap-2">
                <div className="max-sm:w-[10%]">
                  <MdEmail style={ { width: "22px", height: "30px", color: "#FFFFFF" } }/>
                </div>
                <div className="max-sm:w-[90%]">
                  <span className="text-lg text-slate-300 max-sm:text-xs">gustavosotosoto2000@gmail.com</span>
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-2">
                <div className="max-sm:w-[10%]">
                  <SiLinkedin style={ { width: "20px", height: "30px", color: "#FFFFFF" } } />
                </div>
                <div className="max-sm:w-[90%]">
                  <Link className="text-lg text-slate-300 hover:text-emerald-400 transition-all max-sm:text-xs"
                    href={"https://linkedin.com/in/gustavo-soto-soto"} passHref target="_blank" >
                    www.linkedin.com/in/gustavo-soto-soto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <fieldset className="w-full h-auto gap-10 flex justify-center p-10 border-t border-slate-200 mb-16 z-40" id="projects">
        <legend className="m-auto text-slate-300 text-5xl max-sm:text-center">
          MY WORK
        </legend>
          <ul className="w-full grid grid-cols-3 list-none gap-10 max-sm:grid-cols-1">
            {repositories.map( (project) => 
              <li key={project.id} className="col-span-1">
                <Link href={project.homepage} target="_blank" passHref>
                  <div className="h-[480px] max-h-[480px] grid grid-cols-1 justify-center gap-2 p-7 relative overflow-hidden
                   rounded-md bg-zinc-800 hover:scale-110 hover:bg-zinc-900 transition-all max-sm:h-96 max-sm:max-h-96">
                    <div className="relative m-auto w-full h-64 transition-all cursor-pointer overflow-hidden max-sm:h-40">
                      <Image 
                        className="w-full h-full shadow-md" alt="project-preview" 
                        src={ project.thumbnail ? `data:image/webp;base64,${project.thumbnail}` : "/images/web-template.jpg"}
                        fill 
                        quality={20}
                        priority={false}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-lg text-center text-slate-300">{project.name}</span>
                    <p className="text-justify max-h-12 text-slate-400 overflow-hidden overflow-ellipsis line-clamp-2" title={project.description}>{project.description}</p>
                    <span className="text-justify text-slate-300 hover:text-emerald-400 transition-all">{project.homepage}</span>
                    <div className="w-12 h-12 border border-slate-300 bg-zinc-800 p-5 rounded-full absolute top-8 right-8">
                      <Image src={"/icons/touch.svg"} alt="touch-svg" fill />
                    </div>
                  </div>
                </Link>
              </li> 
            )}
          </ul>
      </fieldset>

      <fieldset className="w-full h-auto flex justify-between items-start border-t border-slate-200 p-10 pb-28 gap-10 soft-skills-container z-40 max-sm:flex-col max-sm:p-5 max-sm:pb-28" id="about">
        <legend className="m-auto text-slate-300 text-5xl mb-5 bg-[#1F1F22] bg-opacity-40 max-sm:text-center max-sm:m-0">
          SKILLS
        </legend>
        <div className="w-2/4 h-[400px] flex flex-col justify-center items-center gap-5 p-5 bg-zinc-800 bg-opacity-60 rounded-md shadow-md
         max-sm:w-full max-sm:h-auto max-sm:p-2 max-sm:m-auto">
          <ul className="w-full grid grid-cols-3 list-none gap-2 justify-center items-center max-sm:grid-cols-2">
            {skills.map( skill => 
              <li key={skill.name} className="flex flex-col pl-5 max-sm:p-0">
                <div className="flex justify-start items-center gap-2 p-2">
                  <div className="w-10 h-10 hover:-rotate-180 transition-all cursor-pointer">{skill.icon}</div>
                  <span className="text-lg text-start text-slate-300">{skill.name}</span>
                </div>
              </li> 
            )}
          </ul>
        </div>
        
        <div className="w-2/4 h-[400px] flex flex-col justify-center items-center gap-5 relative bg-zinc-800 p-5 bg-opacity-70 rounded-md shadow-md max-sm:w-full max-sm:h-auto max-sm:p-2 max-sm:m-auto">
          <div className="w-full h-full relative flex flex-col gap-5 max-sm:p-5">
            {/* <Image src={"/images/trumphet.jpg"} alt="creativity-image" fill className="rounded-md"/> */}
            <div className="w-full h-20 flex flex-col justify-center items-center max-sm:h-auto max-sm:gap-3">
              <h1 className="text-2xl text-slate-300">+3 years of experience in software development</h1>
              <p className="text-slate-400 tracking-wide">Quick adaptation and continuous learning to achieve results with: </p>
            </div>
            <ul className="w-full grid grid-cols-3 list-disc gap-5 max-sm:grid-cols-2">
              {softSkills.map( (skill, key) => 
                <li key={key} className="h-16 flex flex-col justify-center items-center bg-zinc-800 rounded-md opacity-70 hover:bg-zinc-900 transition-all cursor-pointer">
                  <h1 className="text-xl text-slate-300 hover:text-emerald-400 max-sm:text-sm">{skill}</h1>
                </li> 
              )}
          </ul>
          </div>
        </div>

      </fieldset>

      <fieldset className="w-full h-[400px] flex justify-center items-center p-5 border-t border-slate-200 contact-container mt-[-30px] z-40 max-sm:h-auto" id="contact">
          <legend className="m-auto text-slate-300 text-5xl bg-opacity-40 max-sm:text-center">
            CONTACT ME
          </legend>

          <div className="w-11/12 h-[300px] m-auto bg-zinc-800 bg-opacity-70 rounded-md flex justify-center items-center gap-5 p-5 px-7 tracking-wide max-sm:h-auto max-sm:w-full max-sm:min-h-">
            <Link className="w-1/6 h-4/5 flex flex-col justify-center items-center gap-5 bg-zinc-800 bg-opacity-70 cursor-pointer rounded-md shadow-md hover:bg-zinc-900 hover:text-emerald-400 hover:scale-105 transition-all"
              href={"https://linkedin.com/in/gustavo-soto-soto"} passHref target="_blank" >
              <Image width={100} height={100} alt="linkedin-svg" src={"/icons/linkedin.svg"}/>
            </Link>
            <Link className="w-1/6 h-4/5 flex flex-col justify-center items-center gap-5 bg-zinc-800 bg-opacity-70 cursor-pointer rounded-md shadow-md hover:bg-zinc-900 hover:text-emerald-400 hover:scale-105 transition-all"
              href={"https://github.com/gustavo-soto-soto"} passHref target="_blank">
              <Image width={100} height={100} alt="github-svg" src={"/icons/github.svg"}/>
            </Link>
            <Link className="w-1/6 h-4/5 flex flex-col justify-center items-center gap-5 bg-zinc-800 bg-opacity-70 cursor-pointer rounded-md shadow-md hover:bg-zinc-900 hover:text-emerald-400 hover:scale-105 transition-all"
              href={"https://wa.me/50689436484"} passHref target="_blank">
              <Image width={100} height={100} alt="whatsapp-svg" src={"/icons/whatsapp.svg"}/>
            </Link>
            <Link className="w-1/6 h-4/5 flex flex-col justify-center items-center gap-5 bg-zinc-800 bg-opacity-70 cursor-pointer rounded-md shadow-md hover:bg-zinc-900 hover:text-emerald-400 hover:scale-105 transition-all"
              href={"https://www.instagram.com/tavo_soto_soto/"} passHref target="_blank">
              <Image width={100} height={100} alt="instagram-svg" src={"/icons/instagram.svg"}/>
            </Link>
            <Link className="w-1/6 h-4/5 flex flex-col justify-center items-center gap-5 bg-zinc-800 bg-opacity-70 cursor-pointer rounded-md shadow-md hover:bg-zinc-900 hover:text-emerald-400 hover:scale-105 transition-all"
              href={"https://www.facebook.com/tavo.soto.soto.19/"} passHref target="_blank">
              <Image width={100} height={100} alt="facebook-svg" src={"/icons/facebook.svg"}/>
            </Link>
          </div>
      </fieldset>
    </div>
  )

}
