import React, { useState } from 'react'
import ProductsTable from '../components/ProductsTable';
import { Link } from 'react-router-dom';

const Orders = () => {

    const orderStr = ['Order ID', 'Customer', 'Status', 'Product', 'Price', 'Payment Method', 'Delivery Status', 'Order Date', 'Action']

    return (
        <div>
            <div className="custom-container">
                <div className="p-5 h-screen">
                    <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                        <h1 className="text-white text-[20px] font-semibold">View Product Dashboard</h1>
                        <Link to='/ecommerce/addproduct'><button className="bg-tertiary-bg py-2 text-white px-4 rounded-md hover:bg-primary-bg">Add Products</button></Link>
                    </div>
                    <div className="ordersTable">
                        <ProductsTable Str={orderStr} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders