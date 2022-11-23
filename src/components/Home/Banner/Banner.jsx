import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import oppo from '../../../assets/images/oppo.webp'

const Banner = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[500px]"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <TypeAnimation
                                sequence={[
                                    'Let us find your', // Types 'One'
                                    1000, // Waits 1s
                                    'Forever Home.', // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    () => {
                                        // Place optional callbacks anywhere in the array
                                    }
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1em', fontWeight: 700, }}
                            />
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="/"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="/"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className='hidden lg:block'>
                <section className='w-4/5 grid-cols-3 grid absolute top-[500px] left-[150px] mb-48'>
                    <div className='col-span-2 grid grid-cols-2 bg-gradient-to-r from-indigo-800 to-indigo-500 items-center p-5'>
                        <div className='text-white'>
                            <h2 className='text-3xl font-bold'>This Product is available</h2>
                            <p className='text-lg'>Please try to</p>
                        </div>
                        <img className='h-[200px]' src={oppo} alt="" />
                    </div>
                    <div className='col-span-1 bg-gradient-to-r from-cyan-500 to-blue-500 grid grid-cols-2 items-center p-5' >
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold'>This Product is available</h2>
                            <p className='text-sm'>Please try to</p>
                        </div>
                        <img className='h-[200px]' src={oppo} alt="" />
                    </div>

                </section>
            </div>
        </div>

    );
};

export default Banner;