import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductsTable from '../../components/ProductsTable'

const AllProducts = () => {
    const [isviewProduct, setViewProduct] = useState(true);

    const viewproductStr = ['Product', 'Code', 'Stock', 'P Price', 'S Price', 'Category', 'Color', 'Published', 'Action'];

    return (
        <div className='custom-container'>
            <div className="p-5 h-screen">
                <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                    <h1 className="text-white text-[20px] font-semibold">View Product Dashboard</h1>
                    <Link to='/product/addproduct'><button className="bg-tertiary-bg py-2 text-white px-4 rounded-md hover:bg-primary-bg">Add Products</button></Link>
                </div>

                <div className="allproduct">
                    <ProductsTable isExcist={isviewProduct} Str={viewproductStr} />
                </div>

            </div>
        </div>
    )
}

export default AllProducts
