import React from 'react'
import Form from '../components/AddProduct/Form'
import { Link } from 'react-router-dom'


const AddProduct = () => {
    return (
        <div className='custom-container'>
            <div className="p-5">
                <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                    <h1 className="text-white text-[20px] font-semibold">Add Product Dashboard</h1>
                    <Link to='/allproducts'><button className="bg-tertiary-bg py-2 text-white px-4 rounded-md hover:bg-primary-bg">View Products</button></Link>
                </div>

                <div className="addproduct">
                    <Form />
                </div>

            </div>
        </div>
    )
}

export default AddProduct
