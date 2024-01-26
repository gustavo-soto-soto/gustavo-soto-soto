const Header = () => {
  return (
    <header className="w-full h-14 fixed top-0 grid grid-cols-2 justify-between bg-[#27272A] shadow-2xl p-4">
        <div className="col-span-1 pl-5 grid justify-start items-center">
            <h1 className="text-lg text-[#EDEDED]">Gustavo Soto Soto</h1>
        </div>
        <div className="col-span-1 h-full flex justify-end items-center">
            <a href="#" className="h-full w-28 text-[#EDEDED] font-extralight border-r text-center grid items-center hover:text-emerald-400 hover:border-emerald-400 transition-all hover:scale-110">Resume</a>
            <a href="#" className="h-full w-28 text-[#EDEDED] font-extralight border-r text-center grid items-center hover:text-emerald-400 hover:border-emerald-400 transition-all hover:scale-110">Projects</a>
            <a href="#" className="h-full w-28 text-[#EDEDED] font-extralight text-center grid items-center hover:text-emerald-400 transition-all hover:scale-110">Contact</a>
        </div>
    </header>
  )
}

export default Header