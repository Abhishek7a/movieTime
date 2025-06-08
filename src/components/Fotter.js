import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

export default function Fotter() {
    return (
        <div className='bg-dark_grey-900 mt-5'>
            <div className="md:w-2/3 w-full m-auto py-7 px-4 text-white flex flex-col">
                <div className="w-full lg:text-6xl sm:text-4xl text-2xl font-bold">
                    <h1 className="w-full md:w-2/3">How can we help you. get
                        in touch</h1>
                </div>
                <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p className="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                    <div className="w-44 pt-6 md:pt-0">
                        <a className="bg-red-600 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
                    </div>
                </div>
            </div>
            <div className="bg-dark_grey-900 md:p-10 ">
                <div className="max-w-screen-lg px-4 sm:px-4 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                    <div className="lg:p-5 px-5 pr-10  ">
                        <img className='w-10 sm:w-36 ' src={logo} alt="" />
                        <h3 className="font-bold text-xl lg:mx-4 pt-2">Movie <span className=' text-red-600'>Time</span> </h3>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-red-600 font-bold">Resources</div>
                        <a className="my-3 block" href="/#">Documentation <span className=" text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Tutorials <span className=" text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Support <span className=" text-red-600  text-xs p-1">New</span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-red-600 font-bold">Support</div>
                        <a className="my-3 block" href="/#">Help Center <span className=" text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Privacy Policy <span className=" text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Conditions <span className=" text-red-600  text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-red-600 font-bold">Contact us</div>
                        <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span className=" text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@company.com <span className=" text-red-600  text-xs p-1"></span></a>
                    </div>
                </div>
            </div>
         
            <div className="max-w-2xl mx-auto border-t border-b  p-4  mt-10 text-white py-10 ">
                <div className="text-center">
                    <h3 className="text-3xl mb-3 "> Download our fitness app </h3>
                    <p> Stay fit. All day, every day. </p>
                    <div className="flex-row md:flex  justify-center my-10 ">
                        <div className="flex items-center border  rounded-lg p-4 w-52 md:mx-2 mx-auto">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border md:mt-0 mt-5 rounded-lg p-4 w-52  md:w-44  md:mx-2 mx-auto">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark_grey-900  pt-2">
                <div className="flex pb-5 md:px-3 m-auto pt-5  w-5/6 text-white text-sm flex-col
       max-w-screen-lg items-center">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <Link to="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
                                <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                   5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                   -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                   0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                   -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                   0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                   -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                   0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                   -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                   -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                   1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                   -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                   6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                   0.771,-0.67 1.054,-1.093Z"></path>
                            </svg>
                        </Link>
                        <Link to="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
                                <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                   5.373,-12 12,-12c6.627,0 12,5.373
                   12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                   0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                   -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
                            </svg>
                        </Link>

                        <Link to="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
                                <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                   3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                   -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                   -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                   -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                   0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                   3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                   -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                   -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                   1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                   -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                   -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                   0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                   0.4,1.5l0,4.5l2.9,0Z"></path>
                            </svg>
                        </Link>
                        <a href="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
                                <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                   -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                   -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                   0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                   0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                   -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="my-5 md:pb-0 pb-10">© Copyright 2020. All Rights Reserved.</div>
                </div>
            </div>

        </div>
    )
}
