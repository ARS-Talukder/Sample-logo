import React from 'react';
import demo1 from '../images/demo1.jpg';
import demo2 from '../images/demo2.jpg';
import demo3 from '../images/demo3.jpeg';
import demo4 from '../images/demo4.jpg';
import demo5 from '../images/demo5.jpg';

const Pictures = () => {
    return (
        <div className='w-4/5 h-84 mx-auto flex mt-12 mb-8'>
            <div className='w-1/2 mr-4'>
                <img className='w-full h-full rounded-lg' src={demo1} alt="demo" />

            </div>
            <div className='w-1/2 grid grid-cols-2 gap-4'>
                <img className='w-full h-40 rounded-lg' src={demo2} alt="demo" />
                <img className='w-full h-40 rounded-lg' src={demo3} alt="demo" />
                <img className='w-full h-40 rounded-lg' src={demo4} alt="demo" />
                <img className='w-full h-40 rounded-lg' src={demo5} alt="demo" />

            </div>

        </div>
    );
};

export default Pictures;