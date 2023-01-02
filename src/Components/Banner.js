import React from 'react';
import './All.css';
import calender from '../images/calender.png';
import { MdExpandMore } from "react-icons/md";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Banner = () => {
    return (
        <div className='banner-div'>
            <div className='flex'>
                <button className='flex justify-center items-center bg-white px-3 py-2 mr-0.5 rounded-l-lg'>
                    <img className='mr-3' src={calender} alt="calender" width={20} />
                    <span className='font-bold'>Check in</span>
                    <MdExpandMore className='mx-2'></MdExpandMore>
                </button>
                <button className='flex justify-center items-center bg-white px-3 py-2 mr-0.5'>
                    <img className='mr-3' src={calender} alt="calender" width={20} />
                    <span className='font-bold'>Check out</span>
                    <MdExpandMore className='mx-2'></MdExpandMore>
                </button>
                <div className="dropdown dropdown-open bg-white px-3 py-2 mr-3 rounded-r-lg">
                    <label tabIndex={0} className="font-bold">3 adults . 0 children . 2 rooms</label>
                    <ul tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 w-full mt-2">
                       <div className='flex justify-between'>
                            <div>
                                <p>Rooms</p>
                                <p><small>(Max: This text was blur)</small></p>
                            </div>
                            <div className='flex items-center'>
                                <AiOutlineMinusCircle></AiOutlineMinusCircle>
                                <span className='mx-2'>1</span>
                                <AiFillPlusCircle></AiFillPlusCircle>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p>Adults</p>
                                <p><small>(Max: This text was blur)</small></p>
                            </div>
                            <div className='flex items-center'>
                                <AiOutlineMinusCircle></AiOutlineMinusCircle>
                                <span className='mx-2'>1</span>
                                <AiFillPlusCircle></AiFillPlusCircle>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p>Children</p>
                                <p><small>(Max: This text was blur)</small></p>
                            </div>
                            <div className='flex items-center'>
                                <AiOutlineMinusCircle></AiOutlineMinusCircle>
                                <span className='mx-2'>1</span>
                                <AiFillPlusCircle></AiFillPlusCircle>
                            </div>
                        </div>
                    </ul>
                </div>
                <button className='bg-yellow-400 px-8 rounded-lg font-bold'>Check Availability</button>
            </div>
        </div>
    );
};

export default Banner;