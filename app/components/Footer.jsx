const Footer = () => {
  return (
    <footer className="w-11/12 h-14 py-2 fixed bottom-0 grid grid-cols-4 justify-between bg-transparent border-t border-slate-300 shadow-sm">
        <div className="grid col-span-1 justify-center">
            <h1 className="text-[#EDEDED] font-semibold">Phone</h1>
            <h2 className="text-[#EDEDED] text-sm font-extralight">+50689436484</h2>
        </div>
        <div className="grid col-span-1">
            <h1 className="text-[#EDEDED] font-semibold">Email</h1>
            <h2 className="text-[#EDEDED] text-sm font-extralight">gustavosotosoto2000@gmail.com</h2>
        </div>
        <div className="grid col-span-1 justify-center">
            <h1 className="text-[#EDEDED] font-semibold">Follow Me</h1>
            <div className="flex w-16 h-full">
                
            </div>
        </div>
        <div className="grid col-span-1">
            <h1 className="text-sm text-[#EDEDED] font-extralight">@2023 By Gustavo Soto Soto</h1>
            <h2 className="text-xs text-[#EDEDED] font-extralight">Copyright</h2>
        </div>
    </footer>
  )
}

export default Footer