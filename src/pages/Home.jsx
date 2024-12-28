import { useState, useEffect } from 'react'
import ReportBox from "../components/home/ReportBox";
import { FiShoppingBag } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import SimpleLineChart from "../components/home/Chart";
import avatar from "../assets/avatar/avatar.png"


const Home = () => {

    const icons = [{ icon: <BsCurrencyDollar size={28} />, icon2: <FaArrowTrendUp size={25} />, title: "Total Revenue", color: 'bg-green-600', color2: 'text-green-500' },
    { icon: <FiShoppingBag size={28} />, icon2: <FaArrowTrendDown size={25} />, title: "Total Sales", color: 'bg-orange-700', color2: 'text-red-500' },
    { icon: <IoFileTrayStackedOutline size={28} />, icon2: <FaArrowTrendUp size={25} />, title: "Orders Paid", color: 'bg-slate-300', color2: 'text-green-500' },
    { icon: <FaUsers size={28} />, icon2: <FaArrowTrendUp size={25} />, title: "Total Users", color: 'bg-blue-700', color2: 'text-green-500' }]

    const [dateRange, setDateRange] = useState({
        fromDate: new Date().toISOString().split('T')[0],
        toDate: new Date().toISOString().split('T')[0]
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDateRange({
            fromDate: today,
            toDate: today
        });
    }, []);

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setDateRange(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="custom-container">
            {/* <Header />
            <Aside /> */}

            <div className="main-home p-4">
                <div className="top-title w-full bg-secondary-bg p-3 flex justify-between items-center rounded-md">
                    <h1 className="text-white text-[20px] font-semibold">E-Commerce Dashboard</h1>
                    <div className="date flex gap-4">
                        <input
                            type="date"
                            name="fromDate"
                            value={dateRange.fromDate}
                            onChange={handleDateChange}
                            className="bg-primary-bg outline-none text-white p-2 rounded-lg border-[0.1px] border-[rgba(255,255,255,0.3)] w-[200px]"
                            placeholder="From Date"
                        />
                        <input
                            type="date"
                            name="toDate"
                            value={dateRange.toDate}
                            onChange={handleDateChange}
                            className="bg-primary-bg outline-none text-white p-2 rounded-lg border-[0.1px] border-[rgba(255,255,255,0.3)] w-[200px]"
                            placeholder="To Date"
                        />
                    </div>
                </div>
                <div className="reportBoxes rounded-md flex gap-4 justify-between">
                    {icons.map((item, index) => (
                        <ReportBox
                            key={index}
                            icon={item.icon}
                            icon2={item.icon2}
                            title={item.title}
                            color={item.color}
                            color2={item.color2}
                        />
                    ))}
                </div>

                <div className="flex mt-4 gap-4">
                    <div className="chart rounded-md w-[60%] h-[50%] bg-secondary-bg p-3 ">
                        <SimpleLineChart />
                    </div>

                    <div className="customers w-[40%] bg-secondary-bg py-2 relative max-h-[400px] rounded-md overflow-hidden">
                        {/* Fixed Header */}
                        <h3 className="text-white font-medium px-4 pb-3 pt-2 border-b-[1px] border-dashed border-[rgba(255,255,255,0.3)] z-10 w-full bg-secondary-bg sticky top-0">
                            New Customers
                        </h3>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto max-h-[350px]">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                <div className="avatars p-5" key={index}>
                                    <div className="flex justify-between items-center">
                                        {/* Left Section */}
                                        <div className="right flex items-center gap-4">
                                            <img
                                                src={avatar}
                                                alt="avatar"
                                                className="rounded-md w-10 h-10"
                                            />
                                            <div className="title">
                                                <h3 className="text-white text-[16px] font-medium">
                                                    Iftikar Ahmed
                                                </h3>
                                                <h3 className="text-[#a9b4cc] text-[13px] font-medium">
                                                    @iftikarahmed
                                                </h3>
                                            </div>
                                        </div>

                                        <span className="text-white text-[14px] font-medium block">
                                            22-12-2024
                                        </span>
                                        <span className="text-white text-[14px] font-medium block">
                                            2 orders
                                        </span>
                                        <span className="text-white text-[14px] font-medium block">
                                            $179
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="orders bg-secondary-bg mt-4 rounded-md relative py-2">
                    {/* Fixed Header */}
                    <h3 className="text-white font-medium px-4 pb-3 pt-2 border-b-[1px] border-dashed border-[rgba(255,255,255,0.3)] z-10 w-full bg-secondary-bg sticky top-0">
                        Recent Orders
                    </h3>

                    {/* Table Wrapper */}
                    <div className="max-h-[400px] overflow-y-auto">
                        <table className="table-auto w-full text-left border-collapse">
                            <thead className="bg-primary-bg sticky top-0 z-10">
                                <tr>
                                    <th className="py-3 px-4 text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center text-white">Order ID</th>
                                    <th className="py-3 px-4 text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center text-white">Customer</th>
                                    <th className="py-3 px-4 text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center text-white">Order Date</th>
                                    <th className="py-3 px-4 text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center text-white">Payment Method</th>
                                    <th className="py-3 px-4 text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center text-white">Delivery Date</th>
                                    <th className="py-3 px-4 text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center text-white">Total Amount</th>
                                    <th className="py-3 px-4 text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center text-white">Status</th>
                                    <th className="py-3 px-4 text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((order, index) => (
                                    <tr key={index}>
                                        <td className="py-3 px-4 text-white text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center">881254</td>
                                        <td className="py-3 px-4 text-white text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center">Bradley</td>
                                        <td className="py-3 px-4 text-white text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center">01-06-24</td>
                                        <td className="py-3 px-4 text-white text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center">Cash</td>
                                        <td className="py-3 px-4 text-white text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center">06-06-24</td>
                                        <td className="py-3 px-4 text-white text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center">$12.06</td>
                                        <td className="py-3 px-4 text-white text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center">Paid</td>
                                        <td className="py-3 px-4 text-white text-[14px] border-b border-[rgba(255,255,255,0.1)] text-center">Paid</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
