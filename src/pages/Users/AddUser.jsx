import React from 'react'
import AddUerForm from '../../components/AddUser/AddUerForm'
import { Link } from 'react-router-dom'

const AddUser = () => {
    return (
        <div className='custom-container'>
            <div className="p-5 h-screen">
                <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                    <h1 className="text-white text-[20px] font-semibold">Add User Dashboard</h1>
                    <Link to='/users/allusers'><button className="bg-tertiary-bg py-2 text-white px-4 rounded-md hover:bg-primary-bg">View Users</button></Link>
                </div>

                <AddUerForm />
            </div>
        </div>
    )
}

export default AddUser
