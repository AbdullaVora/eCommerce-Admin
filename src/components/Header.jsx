import { FaBarsStaggered } from "react-icons/fa6";
import { CgMediaLive } from "react-icons/cg";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode, MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { Link } from "react-router-dom"



const Header = () => {
    return (
        <div className='w-[calc(100%-250px)] h-[57px] px-3 py-2 bg-secondary-bg fixed top-0 left-[250px] z-50 border-b-[0.1px] border-b-[rgba(255,255,255,0.3)]'>
            <div className="flex justify-between items-center">
                <div className="right flex items-center">
                    <div className="bar">
                        <FaBarsStaggered size={22} className="text-white cursor-pointer" />
                    </div>
                    <div className="visit ms-5 bg-tertiary-bg hover:bg-primary-bg cursor-pointer p-2     rounded-lg flex items-center gap-2">
                        <CgMediaLive size={22} className="text-white cursor-pointer" />
                        <a href="https://furn-store-xi.vercel.app" target="_blank"><span className="text-white text-[14px] font-semibold">Visit Website</span></a>
                    </div>
                </div>
                <div className="left flex items-center">

                    <div className="search flex ms-12 items-center px-3 rounded-lg bg-primary-bg">
                        <input type="search" placeholder="Search..." className="bg-primary-bg outline-none text-white p-2 w-[500px] rounded-lg" />
                        <FaSearch size={20} className="text-white cursor-pointer" />
                    </div>
                    <div className="icons ms-10 flex items-center gap-5">
                        <div className="theme flex items-center gap-2">
                            {/* <MdOutlineDarkMode size={22} className="text-white cursor-pointer" /> */}
                            <MdOutlineLightMode size={22} className="text-white cursor-pointer" />
                        </div>
                        <div className="message">
                            <LuMessagesSquare size={22} className="text-white cursor-pointer" />
                        </div>
                        <div className="bell">
                            <FaRegBell size={22} className="text-white cursor-pointer" />
                        </div>
                        <div className="fullscreen">
                            <MdFullscreen size={30} className="text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
