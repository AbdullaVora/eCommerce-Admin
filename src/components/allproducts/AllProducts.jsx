import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    return (
        <div className='custom-container h-screen p-5'>
            <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                <h1 className="text-white text-[20px] font-semibold">All Products View</h1>
                <div className="right">
                    <input type="search" className='me-5 bg-primary-bg py-1 px-4 text-white rounded-lg' placeholder='seacrch...' />
                    <Link to='/addproduct'><button className="bg-tertiary-bg py-2 text-white px-4 rounded-md hover:bg-primary-bg">Add Products</button></Link>
                </div>
            </div>
            <div className="productList p-4 mt-5 bg-secondary-bg rounded-md">
                <table className='w-full table-hover rounded-lg'>
                    <thead className='bg-primary-bg'>
                        <tr>
                            <th><input type="checkbox" className=' checked:bg-primary-bg ' /></th>
                            <th className='text-white py-3 w-[28%]'>Product</th>
                            <th className='text-white py-3'>Code</th>
                            <th className='text-white py-3'>Stock</th>
                            <th className='text-white py-3'>P Price</th>
                            <th className='text-white py-3'>S Price</th>
                            <th className='text-white py-3'>Rating</th>
                            <th className='text-white py-3'>Published</th>
                            <th className='text-white py-3'>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default AllProducts
