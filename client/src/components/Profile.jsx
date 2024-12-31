import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaRegUser, FaYoutube } from "react-icons/fa";
import { FaRegIdBadge, FaTwitter } from 'react-icons/fa6';
import { MdAlternateEmail } from "react-icons/md";
import { LuMail, LuUserPlus } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";

const InputGroup = ({ type, icon, value, readOnly, onChange }) => {
    return (
        <div className="w-[49%] mb-2 mx-1 flex items-center border-2 border-[#dfdfdf26] rounded-md">
            <div className="flex items-center justify-center px-3">
                {icon}
            </div>
            <input
                type={type}
                value={value}
                readOnly={readOnly}
                onChange={onChange}
                className="w-full border-l-2 border-[#dfdfdf26] bg-transparent text-[#A9B4CC] text-[14px] px-3 py-2 focus:outline-none"
            />
        </div>
    );
};

const Profile = ({ readOnly }) => {
    const [inputValues, setInputValues] = useState({
        name: "Mitchell C. Shay",
        username: "@MitchellShay",
        id: "123RF2R",
        role: "FULL STACK DEVELOPER",
        email: "MitchellC00@gmail.com",
        phone: "+1 5623-4564-34",
        website: "https://example.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        youtube: "https://youtube.com",
        pinterest: "https://pinterest.com",
    });

    const handleInputChange = (key, value) => {
        setInputValues((prev) => ({ ...prev, [key]: value }));
    };

    const inputGroup = [
        { icon: <FaRegUser color="#A9B4CC" className="text-lg" />, value: inputValues.name, type: 'text', key: 'name' },
        { icon: <MdAlternateEmail color="#A9B4CC" className="text-lg" />, value: inputValues.username, type: 'text', key: 'username' },
        { icon: <FaRegIdBadge color="#A9B4CC" className="text-lg" />, value: inputValues.id, type: 'text', key: 'id' },
        { icon: <LuUserPlus color="#A9B4CC" className="text-lg" />, value: inputValues.role, type: 'text', key: 'role' },
        { icon: <LuMail color="#A9B4CC" className="text-lg" />, value: inputValues.email, type: 'email', key: 'email' },
        { icon: <FiPhone color="#A9B4CC" className="text-lg" />, value: inputValues.phone, type: 'text', key: 'phone' },
        { icon: <IoEarthOutline color="#A9B4CC" className="text-lg" />, value: inputValues.website, type: 'url', key: 'website' },
        { icon: <FaFacebookF color="#A9B4CC" className="text-lg" />, value: inputValues.facebook, type: 'url', key: 'facebook' },
        { icon: <FaTwitter color="#A9B4CC" className="text-lg" />, value: inputValues.twitter, type: 'url', key: 'twitter' },
        { icon: <FaInstagram color="#A9B4CC" className="text-lg" />, value: inputValues.instagram, type: 'url', key: 'instagram' },
        { icon: <FaLinkedin color="#A9B4CC" className="text-lg" />, value: inputValues.linkedin, type: 'url', key: 'linkedin' },
        { icon: <FaYoutube color="#A9B4CC" className="text-lg" />, value: inputValues.youtube, type: 'url', key: 'youtube' },
        { icon: <FaPinterest color="#A9B4CC" className="text-lg" />, value: inputValues.pinterest, type: 'url', key: 'pinterest' },
    ];

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
                            <span className="text-white font-bold mt-2 text-[18px]">{inputValues.name}</span>
                            <span className="text-white font-bold opacity-[60%]">{inputValues.role}</span>
                        </div>
                    </div>
                    <div className="w-[75%] mt-5">
                        <form>
                            <div className="flex items-center">
                                {inputGroup.slice(0, 2).map((input, index) => (
                                    <InputGroup
                                        key={index}
                                        type={input.type}
                                        icon={input.icon}
                                        value={input.value}
                                        readOnly={readOnly}
                                        onChange={(e) => handleInputChange(input.key, e.target.value)}
                                    />
                                ))}
                            </div>
                            <textarea
                                name=""
                                className="bg-transparent border-2 border-[#dfdfdf26] rounded-md ms-1 p-2 text-[#A9B4CC]"
                                cols="107"
                                rows="5"
                                id=""
                                readOnly={readOnly}
                            >
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            </textarea>
                        </form>
                    </div>
                </div>
                <div className="private mt-5">
                    <h3 className="text-white relative after:content-[''] after:absolute after:right-0 after:top-[50%] after:block after:h-[1px] after:w-[88%] after:bg-gray-400">
                        Private Information
                    </h3>
                    <div className="flex flex-wrap items-center mt-5">
                        {inputGroup.slice(2, 7).map((input, index) => (
                            <InputGroup
                                key={index}
                                type={input.type}
                                icon={input.icon}
                                value={input.value}
                                readOnly={readOnly}
                                onChange={(e) => handleInputChange(input.key, e.target.value)}
                            />
                        ))}
                    </div>
                </div>
                <div className="social mt-5">
                    <h3 className="text-white relative after:content-[''] after:absolute after:right-0 after:top-[50%] after:block after:h-[1px] after:w-[88%] after:bg-gray-400">
                        Social Information
                    </h3>
                    <div className="flex flex-wrap items-center mt-5">
                        {inputGroup.slice(7).map((input, index) => (
                            <InputGroup
                                key={index}
                                type={input.type}
                                icon={input.icon}
                                value={input.value}
                                readOnly={readOnly}
                                onChange={(e) => handleInputChange(input.key, e.target.value)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
