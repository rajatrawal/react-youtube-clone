import React from 'react'

const WatchPageShimmerUI = () => {

    return (
        <div className='p-4 flex flex-row flex-wrap'>
            <div className='md:basis-4/6 sm:basis-4/6 grow h-screen' >
                <div className='youtube-video-container h-9/12 w-full shimmer bg-gray-300 rounded-lg'>
                </div>

                <div className="mt-4">
                    <div className="text font-semibold  shimmer bg-gray-300 h-7 w-11/12">

                    </div>
                    <div className='flex flex-row  gap-3 items-center mt-5'>
                        <div className='basis-2/6 flex items-center '>
                            <div className='flex items-center'>
                                <div className='shimmer bg-gray-300 w-9 h-9 rounded-full'></div>
                                <div className='font-bold ml-3 w-32 h-5 bg-gray-300 shimmer '>

                                </div>
                            </div>
                            <div className='flex items-center  ml-10'>

                                <div className='px-3 py-1.5 text-sm font-semibold w-16 h-8 rounded-full shimmer bg-gray-300'>

                                </div>
                                <div className='px-3 py-1.5 text-sm font-semibold w-24 h-8 ml-3 rounded-full shimmer bg-gray-300'>


                                </div>
                            </div>
                        </div>
                        <div className=' basis-4/6 flex justify-around items-center'>
                            <div className='flex '>
                                <div className='flex mr-4 no-wrap ease-in-out cursor-pointer  border-gray-400 '>
                                    <div className='px-3 py-1.5 text-sm font-semibold w-24 h-8 rounded-full shimmer bg-gray-300'>

                                    </div>

                                </div>
                                <div>
                                    <div className='px-3 mr-4 py-1.5 text-sm font-semibold w-16 h-8 rounded-full shimmer bg-gray-300'>


                                    </div>
                                </div>
                                <div>
                                    <div className='px-3 mr-4 py-1.5 text-sm font-semibold w-20 h-8 rounded-full shimmer bg-gray-300'>

                                    </div>
                                </div>
                                <div>
                                    <div className='px-3 py-1.5 text-sm font-semibold w-8 h-8 rounded-full shimmer bg-gray-300'>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='x-3  w-full h-48 my-7 rounded-lg shimmer bg-gray-300'>

                    </div>
                </div>
            </div>
            <div className='basis-2/6 '>
                <div className='px-4 '>

                    <div className='border border-gray-300 rounded-lg w-full  h-full'>
                        <div className='p-2'>
                            <div className='w-full shimmer bg-gray-300 h-7 rounded-lg'>

                            </div>
                            <div className='h-96 mt-4  w-full bg-gray-300  rounded-lg'>

                            </div>


                        </div>
                        <div className="my-2 text-center mx-2">
                            <div className=" w-full bg-gray-300 rounded-lg h-8">

                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mx-5'>

                    <div className="flex no-wrap py-2">
                        <div className='basis-5/12 w-full h-36 rounded-lg shimmer bg-gray-300'>

                        </div>
                        <div className='basis-7/12 px-1.5'>
                            <div className=' shimmer bg-gray-300 w-full h-5 '>

                            </div>
                            <div className=' mt-3'>
                                <div className='w-5/12  shimmer bg-gray-300 h-3'>

                                </div>
                                <div className='w-3/12  shimmer bg-gray-300 h-3 mt-2'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex no-wrap py-2">
                        <div className='basis-5/12 w-full h-36 rounded-lg shimmer bg-gray-300'>

                        </div>
                        <div className='basis-7/12 px-1.5'>
                            <div className=' shimmer bg-gray-300 w-full h-5 '>

                            </div>
                            <div className=' mt-3'>
                                <div className='w-5/12  shimmer bg-gray-300 h-3'>

                                </div>
                                <div className='w-3/12  shimmer bg-gray-300 h-3 mt-2'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchPageShimmerUI