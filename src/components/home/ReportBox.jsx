import PropTypes from 'prop-types';
import { FaArrowTrendDown } from "react-icons/fa6";


const ReportBox = ({ icon, icon2, title, color, color2 }) => {

    const isDown = icon2.type === FaArrowTrendDown;

    return (
        <div className=" rounded-md bg-secondary-bg mt-5 py-4 w-[25%] border-t-[1px] border-t-[#0d99ff] flex items-center justify-around">
            <div className={`icon p-2 rounded-xl ${color}`}>
                {icon}
            </div>
            <div className="arrow flex items-center gap-3">
                <span className={`${color2}`}>{icon2}</span>
                <span className={`${isDown ? 'text-red-500' : 'text-green-500'} block text-[16px]`}>68%</span>
            </div>
            <div className="amount">
                <span className="text-white text-[18px] text-end block font-semibold">$33,200</span>
                <span className="text-white block font-bold text-[16px]">{title}</span>
            </div>
        </div>
    );
};

ReportBox.propTypes = {
    icon: PropTypes.element.isRequired,
    icon2: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
};

export default ReportBox;
