import React, { useState } from 'react'
import Profile from '../../components/Profile'
import { Link } from 'react-router-dom'

const ViewProfile = () => {
    const [isReadOnly, setIsReadOnly] = useState(true);
    return (
        <div>
            <div className="custom-container">
                <div className="p-5">
                    <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                        <h1 className="text-white text-[20px] font-semibold">View Profile</h1>
                        <button onClick={() => setIsReadOnly(!isReadOnly)} className="bg-tertiary-bg py-2 text-white px-4 rounded-md hover:bg-primary-bg">
                            {isReadOnly ? 'Edit Profile' : 'Save Profile'}
                        </button>
                    </div>
                    <div className="profile">
                        <Profile readOnly={isReadOnly} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile
