import React from 'react'

const Form = () => {
    return (
        <div className='p-5 mt-4 rounded-md bg-secondary-bg'>
            <form>
                <div className="flex justify-between">
                    <div className="w-[50%] pe-5">
                        <label className='block text-white font-semibold'>Product Title</label>
                        <input type="text" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                        <label className='block text-white font-semibold'>Product Brand</label>
                        <input type="text" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                        <div className="flex">
                            <div className="w-[50%] pe-5">
                                <label className='block text-white font-semibold'>Product Code</label>
                                <input type="text" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                                <label className='block text-white font-semibold'>Product Category</label>
                                <input type="text" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                            </div>
                            <div className="w-[50%]">
                                <label className='block text-white font-semibold'>Product Color</label>
                                <input type="text" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                                <label className='block text-white font-semibold'>Product Size</label>
                                <input type="text" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                            </div>
                        </div>
                        <label className='block text-white font-semibold'>Choose Images</label>
                        <div className="flex flex-wrap">
                            <div className="img me-3 gap-3 w-[180px] bg-tertiary-bg mt-3 rounded-lg h-[180px]"></div>
                            <div className="img me-3 gap-3 w-[180px] bg-tertiary-bg mt-3 rounded-lg h-[180px]"></div>
                            <div className="img me-3 gap-3 w-[180px] bg-tertiary-bg mt-3 rounded-lg h-[180px]"></div>
                        </div>
                    </div>
                    <div className="w-[50%] ps-5">
                        <label className='block text-white font-semibold'>Product Description</label>
                        <textarea name="description" rows={12} id="" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white'></textarea>
                        <label className='block text-white font-semibold'>Product Images</label>
                        <input type="file" className='w-full mt-2 mb-5 py-5 px-3 rounded-md bg-primary-bg' />
                        <button type='submit' className="bg-tertiary-bg w-full py-2 text-white px-4 rounded-md hover:bg-primary-bg">Pusblish Product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
