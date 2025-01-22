import React from 'react'
import { Link } from 'react-router-dom'

const ProductsTable = ({ isExcist, Str }) => {
    console.log(Str);

    return (
        <div className="productList p-4 mt-5 bg-secondary-bg rounded-md">
            <table className='w-full table-hover rounded-lg'>
                <thead className='bg-primary-bg'>
                    <tr>
                        <th><input type="checkbox" className={` checked:bg-primary-bg ${isExcist ? '' : 'ms-1'}`} /></th>
                        {Str && Str.map((Str, index) => (
                            <th key={index} className={`text-white py-3 ${isExcist && index == 0 ? 'w-[24%]' : ''}`}>{Str}</th>
                        ))}
                        {/* <th className='text-white py-3'>Code</th>
                        <th className='text-white py-3'>Stock</th>
                        <th className='text-white py-3'>P Price</th>
                        <th className='text-white py-3'>S Price</th>
                        <th className='text-white py-3'>Rating</th>
                        <th className='text-white py-3'>Published</th>
                        <th className='text-white py-3'>Action</th> */}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default ProductsTable
