import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

export default function Pagetemplate(props) {
    const [images, setImages] = useState([]);
    const URL = `https://api.themoviedb.org/3/${props.url}?api_key=${process.env.REACT_APP_API_KEY}`;
    const onTop = () =>
        document.documentElement.scrollTop = 0;

    const [english, setenglish] = useState(false)
    const [hindi, setHindi] = useState(false)
    const isEnglish = () => setenglish(!english)
    const isHindi = () => setHindi(!hindi)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const jsonData = await response.json();
                const movies = jsonData.results;
                setImages(movies)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    });
    return (
        <div className='md:mx-16 md:my-10 flex'>
            <div className='border-red-600 lg:w-5/6 lg:block md:hidden sm:hidden hidden  '>
                <h1 className='font-bold text-2xl text-red-600'>Filters</h1>
                <div className="grid divide-y divide-neutral-200 max-w-xl ml-5 mt-8">
                    <div className="pb-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className=' text-red-600'>Languages</span>
                                <span className="transition group-open:rotate-180 text-red-600">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn flex gap-2">
                                <span onClick={isEnglish} value="English" className={english === true ? 'bg-red-600 p-1 cursor-pointer text-white rounded ' : 'cursor-pointer rounded p-1 inline text-red-600'}>English</span>
                                <span value="Hindi" onClick={isHindi} className={hindi === true ? 'bg-red-600 p-1 cursor-pointer text-white rounded ' : 'cursor-pointer rounded p-1 inline text-red-600'}>Hindi</span>
                            </div>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className=' text-red-600'>Genres</span>
                                <span className="transition group-open:rotate-180 text-red-600">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn flex gap-2 flex-wrap">
                                <span value="Action" className='cursor-pointer border p-1 mt-1 inline text-red-600'>Action</span>
                                <span value="Drama" className='cursor-pointer border p-1  mt-1 inline text-red-600'>Drama</span>
                                <span value="Adventure" className='cursor-pointer border p-1  mt-1 inline text-red-600'>Adventure</span>
                                <span value="Comedy" className='cursor-pointer border p-1  mt-1 inline text-red-600'>Comedy</span>
                            </div>
                        </details>
                    </div>
                </div>
            </div>

            <div className='py-4 flex flex-wrap'>
                {images.map((image) => {
                    return (
                        <Link to={props.type === "tv" ? `/tv/${image.id}` : `/movies/${image.id}`} onClick={onTop} className='sm:px-5 px-2 md:w-52 lg:w-64 sm:w-44 w-40 mx-auto  outline-none mt-5  transform transition-transform hover:translate-y-[-5px]' key={image.id}>
                            <img className='lg:h-72 lg:w-64  rounded-t cursor-pointer' src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`} alt="" />
                            <div className='bg-slate-950 rounded-b text-white p-2 gap-1 flex '>
                                <div className=' py-1 text-green-600 text-xl'>
                                    <AiFillStar />
                                </div>
                                {image.popularity}
                            </div>
                            {props.type === "tv" ?
                                <>
                                    <h1 className='font-bold cursor-pointer'>{image.name}</h1>
                                    <div className='flex gap-2'>
                                        <h2 className=' cursor-pointer'>{image.first_air_date}</h2>
                                        <p className='cursor-pointer text-gray-500'>({image.original_language})</p>
                                    </div>
                                </>
                                :
                                <>
                                    <h1 className='font-bold cursor-pointer'>{image.original_title}</h1>
                                    <h2 className=' cursor-pointer'>{image.release_date}</h2>
                                </>
                            }
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}
