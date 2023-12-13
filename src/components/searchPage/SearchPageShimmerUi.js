import React from 'react'

const SearchPageShimmerUi = () => {
    return (
        <div>
            {

                [...Array(12)].map((j, i) => {
                    return (
                        <div className='w-full  p-3 grow' key={i}>
                            <div className='flex'>

                                <div className='w-96 rounded-xl  cursor-pointer bg-gray-300 shimmer h-48' >

                                </div>
                                <div className=" ml-4 mt-2 w-full">


                                    <div className='bg-gray-300 shimmer h-5 w-full mb-1'>

                                    </div>

                                    <div className="mt-3" >

                                        <div className='flex items-center '>
                                            <div className=''>
                                                <div className="col-span-1 w-5 rounded-full h-5 bg-gray-300 shimmer"></div >
                                            </div>
                                            <div className='ml-3 w-1/6 h-4 shimmer bg-gray-300'>


                                            </div>
                                        </div>
                                        <div className='mt-4 w-full h-2  shimmer bg-gray-300'>

                                        </div>
                                        <div className='mt-0.5 w-full h-2 shimmer bg-gray-300'>

                                        </div>
                                        <div className='mt-0.5 w-3/5 h-2 shimmer bg-gray-300'>

                                        </div>
                                    </div >

                                </div >
                            </div >

                        </div >
                    )
                }
                )
            }
        </div>
    )

}


export default SearchPageShimmerUi