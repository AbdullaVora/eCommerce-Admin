import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


const Profile = () => {
    return (
        <div>
            <div className="public mt-5 bg-secondary-bg p-5 rounded-md">
                <h3 className="text-white relative after:content-[''] after:absolute after:right-0 after:top-[50%] after:block after:h-[1px] after:w-[88%] after:bg-gray-400">
                    Public Information
                </h3>
                <div className="flex">
                    <div className="w-[25%] mt-5">
                        <div className="flex flex-col items-center">
                            <div className="img">
                                <img src="/img/admin.png" className="rounded-full w-[120px]" alt="profile" />
                            </div>
                            <span className="text-white font-bold mt-2 text-[18px]">Mitchell C. Shay</span>
                            <span className="text-white font-bold opacity-[60%]">FULL STACK DEVELOPER</span>
                        </div>
                    </div>
                    <div className="w-[75%] mt-5">
                        <form>
                            <div className="flex items-center">
                                <div className="w-[50%] mx-1 flex items-center border-2 border-[#dfdfdf26] rounded-md">
                                    <div className="flex items-center justify-center px-3">
                                        <FaRegUser color="#A9B4CC" className="text-lg" />
                                    </div>
                                    <input
                                        type="text"
                                        value="Mitchell C. Shay"
                                        readOnly
                                        className="w-full border-l-2 border-[#dfdfdf26] bg-transparent text-[#A9B4CC] text-[14px] px-3 py-2 focus:outline-none"
                                    />
                                </div>
                                <div className="w-[50%] ms-1 flex items-center border-2 border-[#dfdfdf26] rounded-md">
                                    <div className="flex items-center justify-center px-3">
                                        <MdAlternateEmail color="#A9B4CC" className="text-lg" />
                                    </div>
                                    <input
                                        type="text"
                                        value="MitchellShay@gmail.com"
                                        readOnly
                                        className="w-full border-l-2 border-[#dfdfdf26] bg-transparent text-[#A9B4CC] text-[14px] px-3 py-2 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <textarea name="" className='bg-transparent border-2 border-[#dfdfdf26] rounded-md mt-3 ms-1 p-2 text-[#A9B4CC] w-full' rows="5"  id="">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</textarea>
                        </form>
                    </div>
                </div>
                <div className="private mt-5">
                <h3 className="text-white relative after:content-[''] after:absolute after:right-0 after:top-[50%] after:block after:h-[1px] after:w-[88%] after:bg-gray-400">
                    Private Information
                </h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
