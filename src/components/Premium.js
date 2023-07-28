import React from 'react'
import { AiFillPlayCircle} from 'react-icons/ai';
import CrouselTemplate from './CrouselTemplate';

export default function Premium() {
  
    return (
        <div className='bg-gray-950 pb-3'>
            <div className='lg:mx-16 '>
                <div className='text-red-600 mx-5 pt-5 flex'>
                    <div className='text-5xl'>
                        <AiFillPlayCircle />
                    </div>
                    <div className='mx-2'>
                        <h1 className='font-bold text-white text-2xl lg:ml-3'>Premium</h1>
                        <p className='lg:mx-3  text-gray-500'>Watch new movies at home, every Friday</p>
                    </div>
                </div>
                <div className='lg:pt-10 md:px-5 md:pl-16 md:pt-5'>
                    <h1 className='font-bold text-white text-xl ml-5'>Premiums</h1>
                    <p className='text-cyan-50 mx-5'>Brand new releases every Friday</p>
                </div>
            </div>
            <CrouselTemplate url="movie/top_rated" isDark="true" />
        </div>
    );
}

