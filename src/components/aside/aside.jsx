import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCartPlus, FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrPieChart } from "react-icons/gr";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlinePolicy } from "react-icons/md";
import { RiFileAddLine } from "react-icons/ri";

import { Link } from "react-router-dom";


const Aside = () => {
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);

  const toggleEcommerce = () => {
    setIsEcommerceOpen(!isEcommerceOpen);
  };

  return (
    <div className="w-[250px] h-screen bg-secondary-bg fixed left-0 top-0 z-50 border-r-[0.1px] border-r-[rgba(255,255,255,0.3)]">
      <div className="logo">
        <h3 className="text-white text-2xl font-bold py-3 text-center border-b-[0.1px] border-b-[rgba(255,255,255,0.3)]">
          logo
        </h3>
      </div>
      <div className="navs py-4 px-5">
        <div className="main-home border-[2px] border-tertiary-bg rounded-lg overflow-hidden">
          <span className="text-white bg-tertiary-bg py-3 block text-[11px] ps-3 font-semibold">
            MAIN HOME
          </span>
          <Link to="/"><span className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg">
            <LuLayoutDashboard />
            Dashboard
          </span></Link>
        </div>
        <div className="pages border-[2px] border-tertiary-bg mt-3 rounded-lg overflow-hidden">
          <span className="text-white block bg-tertiary-bg py-4 text-[11px] ps-3 font-semibold">
            ALL PAGES
          </span>
          <ul className="type-none">
            <li
              className="flex items-center justify-between gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg"
              onClick={toggleEcommerce}
            >
              <span>
                <FaCartPlus className="inline me-3" />
                E-Commerce
              </span>
              {isEcommerceOpen ? <FaCaretUp /> : <FaCaretDown />}
            </li>
            {/* Dropdown Slider with Animation */}
            <ul
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isEcommerceOpen ? "max-h-40" : "max-h-0"
                }`}
            >
              <Link to="/addProduct"><li className="cursor-pointer flex items-center justify-center py-2 px-3 font-semibold text-white hover:bg-primary-bg">
                <RiFileAddLine size={18} className="me-2 " /> Add Product
              </li></Link>
              <Link to='/allproducts'><li className="cursor-pointer py-2 px-3 font-semibold flex justify-center items-center text-white hover:bg-primary-bg">
              <AiOutlineProduct size={18} className="me-2" /> All Products
              </li></Link>
            </ul>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg">
              <AiOutlineProduct size={20} />
              Products
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg">
              <MdOutlineCreateNewFolder size={20} />
              Orders
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg">
              <GrPieChart size={20} />
              Reports
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg">
              <FaRegUser size={20} />
              Users
            </li>
          </ul>
        </div>
        <div className="support border-[2px] border-tertiary-bg mt-3 rounded-lg overflow-hidden">
          <span className="text-white block bg-tertiary-bg py-4 text-[11px] ps-3 font-semibold">
            SUPPORT
          </span>
          <ul className="type-none">
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg">
              <TfiHeadphoneAlt size={20} />
              Help Support
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg">
              <IoMdHelpCircleOutline size={20} />
              FAQs
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-[16px] py-3 px-3 font-semibold text-white hover:bg-primary-bg">
              <MdOutlinePolicy size={20} />
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aside;
