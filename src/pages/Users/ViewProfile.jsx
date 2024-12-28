import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'

const ViewProfile = () => {
    return (
        <div>
            <div className="custom-container">
                <div className="p-5 h-screen">
                    <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                        <h1 className="text-white text-[20px] font-semibold">View Profile</h1>
                        <Link to='/users/editProfile'><button className="bg-tertiary-bg py-2 text-white px-4 rounded-md hover:bg-primary-bg">Edit Profile</button></Link>
                    </div>
                    <div className="profile">
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile
