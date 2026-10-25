import React from 'react';
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='flex flex-col gap-5 items-center text-center py-10 mt-10 bg-primary'>
            <h1 className='text-5xl font-extrabold text-white'>KeenKeeper</h1>
            <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div>
                <p className='text-xl text-white font-bold'>Social links</p>
                <div className='flex gap-4 mt-5'>
                    <div className="bg-white rounded-full p-2"><RiFacebookBoxFill size={25} /></div>
                    <div className="bg-white rounded-full p-2"><RiInstagramFill size={25} /></div>
                    <div className="bg-white rounded-full p-2"><RiTwitterXFill size={25} /></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;