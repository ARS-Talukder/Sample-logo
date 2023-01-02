import React from 'react';
import map from '../images/map.jpg';
import { GoPrimitiveDot } from "react-icons/go";
import { BsDot } from "react-icons/bs";

const Address = () => {
    return (
        <div className='w-4/5 mx-auto mb-32'>
            <section className='flex justify-between'>
                <div>
                    <h2 className='text-xl font-bold mb-3'>Hotel Vishal @ Airport</h2>
                    <p>104/2/2, National Highway 8, Mahioaiour,New <button className='mx-4 text-blue-500 underline'>View Map</button></p>
                    <p className='mb-2'>Delhi, 110037 New Delhi, India</p>
                    <p className='font-bold'>+91-7654564545, 8107344682</p>

                </div>
                <div>
                    <img className='w-40' src={map} alt="" />

                </div>
            </section>

            <section className='my-2'>
                <div className='flex'>
                    <p className='flex items-center mr-8'>
                        <GoPrimitiveDot></GoPrimitiveDot>
                        <span className='font-bold'><small>Free Parking</small></span>
                    </p>
                    <p className='flex items-center mr-8'>
                        <GoPrimitiveDot></GoPrimitiveDot>
                        <span className='font-bold'><small>Conference Room</small></span>
                    </p>
                    <p className='flex items-center mr-8'>
                        <GoPrimitiveDot></GoPrimitiveDot>
                        <span className='font-bold'><small>ATM</small></span>
                    </p>
                    <p className='flex items-center mr-8'>
                        <GoPrimitiveDot></GoPrimitiveDot>
                        <span className='font-bold'><small>Conference Room</small></span>
                    </p>
                    <p className='flex items-center mr-8'>
                        <GoPrimitiveDot></GoPrimitiveDot>
                        <span className='font-bold'><small>Conference Room</small></span>
                    </p>
                </div>

            </section>

            <section>
                <p>Located in New Delhi, 5.5 km from Rashtrapati Bhaban, Hotel Vishal @ Airport provides accommodation with restaurant, free private parking and a fitness centre. This 3-star hotel offers an ATM, a concierge service and free Wifi. The accommodation features a 24-hour front desk, room service and currency exchange for guests.</p>
            </section>

            <section className='my-16'><hr /></section>

            <section>
                <h2 className='font-bold'>Property Rules</h2>
                <p className='mb-2'>Check-in 12PM Check-out 12 PM</p>
                <div className='flex'>
                    <div>
                        <p className='flex items-center'><BsDot></BsDot> <span>Guest with fever are not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Guests from confiainment are not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Guests before 18 years of age are not allowed the property</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>PAN Card and Non-Govt IDs are not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Aachar,Driving License and Govt. ID are accepted as ID proof</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Properly staff is trained on hygiene guideness</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Pets are not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Outside food is not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Smoking is not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Does not allow private parties or events</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Quarantine protocols are being followed as per local government authorities</span></p>

                    </div>
                    <div>
                        <p className='flex items-center'><BsDot></BsDot> <span>Pets are not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Outside food is not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Smoking is not allowed</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Does not allow private parties or events</span></p>
                        <p className='flex items-center'><BsDot></BsDot> <span>Quarantine protocols are being followed as per local government authorities</span></p>

                    </div>
                </div>

            </section>

        </div>
    );
};

export default Address;