import { LuLayoutDashboard } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrPieChart } from "react-icons/gr";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlinePolicy } from "react-icons/md";








const Aside = () => {
  return (
    <div className="w-[250px] h-screen bg-secondary-bg fixed left-0 top-0 z-50 border-r-[0.1px] border-r-[rgba(255,255,255,0.3)]">
      <div className="logo">
        <h3 className="text-white text-2xl font-bold py-3 text-center border-b-[0.1px] border-b-[rgba(255,255,255,0.3)]">logo</h3>
      </div>
      <div className="navs py-4 px-5">
        <div className="main-home border-[2px] border-tertiary-bg rounded-lg overflow-hidden">
          <span className="text-white bg-tertiary-bg py-3 block text-[11px] ps-2 font-semibold">MAIN HOME</span>
          <span className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><LuLayoutDashboard />Dashboard</span>
        </div>
        <div className="pages border-[2px] border-tertiary-bg mt-3 rounded-lg overflow-hidden">
          <span className="text-white block bg-tertiary-bg py-4 text-[11px] ps-2 font-semibold">ALL PAGES</span>
          <ul type="none">
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><FaCartPlus />E-Commerce</li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><AiOutlineProduct size={20} />Products</li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><MdOutlineCreateNewFolder size={20} />Orders</li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><GrPieChart size={20} />Reports</li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><FaRegUser size={20} />Users</li>
          </ul>
        </div>
        <div className="support border-[2px] border-tertiary-bg mt-3 rounded-lg overflow-hidden">
          <span className="text-white block bg-tertiary-bg  py-4 text-[11px] ps-2 font-semibold">SUPPORT</span>
          <ul type="none">
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><TfiHeadphoneAlt size={20} />Help Support</li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><IoMdHelpCircleOutline size={20} />FAQs</li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-2 font-semibold text-white hover:bg-primary-bg"><MdOutlinePolicy size={20} />Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aside
