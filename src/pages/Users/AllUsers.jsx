import React from 'react'
import { Link } from 'react-router-dom'
import ProductsTable from '../../components/allproducts/ProductsTable'

const AllUsers = () => {

    const Str = ['User ID', 'Name', 'Email', 'Role', 'Status', 'Action']

    return (
        <div>
            <div className="custom-container">
                <div className="p-5 h-screen">
                    <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                        <h1 className="text-white text-[20px] font-semibold">All Users Dashboard</h1>
                        <Link to='/users/addUser'><button className="bg-tertiary-bg py-2 text-white px-4 rounded-md hover:bg-primary-bg">Add User</button></Link>
                    </div>
                    <div className="allUsers">
                        <ProductsTable Str={Str} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers
