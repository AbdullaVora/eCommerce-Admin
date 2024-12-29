import React from 'react'

const AddUerForm = () => {
    return (
        <div>
            <div className="form-container bg-secondary-bg p-5 mt-4 rounded-md">
                <form>
                    <div className="flex justify-between">
                        <div className="left w-[50%] px-3">
                            <h2 className='text-white font-bold text-center mb-5 text-[24px]'>User Information</h2>
                            <div className="flex">
                                <div className="w-[50%] pe-5">
                                    <label className='block text-white font-semibold'>First Name</label>
                                    <input type="text" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                                </div>
                                <div className="w-[50%]">
                                    <label className='block text-white font-semibold'>Last Name</label>
                                    <input type="text" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                                </div>
                            </div>
                            <label className='block text-white font-semibold'>Contact Number</label>
                            <input type="number" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                            <label className='block text-white font-semibold'>Email</label>
                            <input type="email" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                            <label className='block text-white font-semibold'>Password</label>
                            <input type="password" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                            <label className='block text-white font-semibold'>Confirm Password</label>
                            <input type="password" className='w-full mt-2 mb-5 py-1 px-3 rounded-md bg-primary-bg text-white' />
                            <label className='block text-white font-semibold'>Profile Image</label>
                            <input type="file" className='w-full mt-2 mb-5 py-3 px-3 rounded-md bg-primary-bg text-white' />
                        </div>

                        <div className="w-[50%] px-3">
                            <h2 className='text-white font-bold text-center mb-5 text-[24px]'>User Permissions</h2>
                            <div className="flex flex-wrap w-full justify-between">
                                <div className='mb-5 inline-block w-[50%]'>
                                    <div className='flex items-center bg-primary-bg p-3 rounded-[20px] mx-2'>
                                        <label className=' text-white me-5 font-semibold'>Add Products</label>
                                        <input type="radio" name="addProducts" value="Allow" className='mr-2' />
                                        <label className='text-white mr-4'>Allow</label>
                                        <input type="radio" name="addProducts" value="Deny" className='mr-2' />
                                        <label className='text-white'>Deny</label>
                                    </div>
                                </div>
                                <div className='mb-5 inline-block w-[50%]'>
                                    <div className='flex items-center  bg-primary-bg p-3 rounded-[20px] mx-2'>
                                        <label className=' text-white me-5 font-semibold'>Edit Products</label>
                                        <input type="radio" name="editProducts" value="Allow" className='mr-2' />
                                        <label className='text-white mr-4'>Allow</label>
                                        <input type="radio" name="editProducts" value="Deny" className='mr-2' />
                                        <label className='text-white'>Deny</label>
                                    </div>
                                </div>
                                <div className='mb-5 inline-block w-[50%]'>
                                    <div className='flex items-center  bg-primary-bg p-3 rounded-[20px] mx-2'>
                                        <label className=' text-white me-5 font-semibold'>Delete Products</label>
                                        <input type="radio" name="deleteProducts" value="Allow" className='mr-2' />
                                        <label className='text-white mr-4'>Allow</label>
                                        <input type="radio" name="deleteProducts" value="Deny" className='mr-2' />
                                        <label className='text-white'>Deny</label>
                                    </div>
                                </div>
                                <div className='mb-5 inline-block w-[50%]'>
                                    <div className='flex items-center  bg-primary-bg p-3 rounded-[20px] mx-2'>
                                        <label className=' text-white me-5 font-semibold'>View Orders</label>
                                        <input type="radio" name="viewOrders" value="Allow" className='mr-2' />
                                        <label className='text-white mr-4'>Allow</label>
                                        <input type="radio" name="viewOrders" value="Deny" className='mr-2' />
                                        <label className='text-white'>Deny</label>
                                    </div>
                                </div>
                                <div className='mb-5 inline-block w-[50%]'>
                                    <div className='flex items-center  bg-primary-bg p-3 rounded-[20px] mx-2'>
                                        <label className=' text-white me-5 font-semibold'>Manage Users</label>
                                        <input type="radio" name="manageUsers" value="Allow" className='mr-2' />
                                        <label className='text-white mr-4'>Allow</label>
                                        <input type="radio" name="manageUsers" value="Deny" className='mr-2' />
                                        <label className='text-white'>Deny</label>
                                    </div>
                                </div>
                                <div className='mb-5 inline-block w-[50%]'>
                                    <div className='flex items-center  bg-primary-bg p-3 rounded-[20px] mx-2'>
                                        <label className=' text-white me-5 font-semibold'>Check Reports</label>
                                        <input type="radio" name="manageUsers" value="Allow" className='mr-2' />
                                        <label className='text-white mr-4'>Allow</label>
                                        <input type="radio" name="manageUsers" value="Deny" className='mr-2' />
                                        <label className='text-white'>Deny</label>
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className="bg-tertiary-bg w-full py-2 text-white px-4 rounded-md hover:bg-primary-bg">Add User</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUerForm
