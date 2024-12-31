import React, { useState } from 'react'
import { database } from "../firebase/firebase"
import { doc, collection, getDoc, addDoc } from "firebase/firestore"

const Form = () => {

    // const [Product, setProduct] = useState([]);
    const [input, setinput] = useState({});

    const handleInput = (e) => {
        // console.log(e);
        const { name, value } = e.target;
        setinput({ ...input, [name]: value })
        // console.log(input);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addData();

    }

    // const addData = async () => {
    //     try {
    //         const docRef = await addDoc(collection(database, "products"), { ...input });
    //         console.log(docRef.id);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    return (
        <div className='p-5 mt-4 rounded-md bg-secondary-bg'>
            <form onClick={(e) => handleSubmit(e)}>
                <div className="flex justify-between">
                    <div className="w-[50%] pe-5">
                        <label className='block text-white font-semibold'>Product Title</label>
                        <input type="text" name='title' onChange={(e) => handleInput(e)} className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                        <label className='block text-white font-semibold'>Product Brand</label>
                        <input type="text" name='brand' onChange={(e) => handleInput(e)} className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                        <div className="flex">
                            <div className="w-[50%] pe-5">
                                <label className='block text-white font-semibold'>Product Code</label>
                                <input type="text" name='code' onChange={(e) => handleInput(e)} className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                                <label className='block text-white font-semibold'>Product Category</label>
                                <input type="text" name='category' onChange={(e) => handleInput(e)} className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                            </div>
                            <div className="w-[50%]">
                                <label className='block text-white font-semibold'>Product Color</label>
                                <input type="text" name='color' onChange={(e) => handleInput(e)} className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                                <label className='block text-white font-semibold'>Product Size</label>
                                <input type="text" name='size' onChange={(e) => handleInput(e)} className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
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
                        <textarea name="description" onChange={(e) => handleInput(e)} rows={12} id="" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white'></textarea>
                        <label className='block text-white font-semibold'>Product Images</label>
                        <input type="file" name='image' onChange={(e) => handleInput(e)} className='w-full mt-2 mb-5 py-5 px-3 rounded-md bg-primary-bg' />
                        <button type='submit' className="bg-tertiary-bg w-full py-2 text-white px-4 rounded-md hover:bg-primary-bg">Pusblish Product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
