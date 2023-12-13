import React from 'react'

const ShimmerContainer = () => {
    return (
        <div className='flex flex-wrap mt-3'>
            {[...Array(12)].map((e, i) => (

                <div className='w-72  p-5 grow cursor-pointer' key={i}>
                    <div className="w-full h-44 bg-gray-300 shimmer"></div>
                    <div className="grid grid-cols-12 gap-1  mt-2">
                        <div className="col-span-1"><div className='w-8 h-8 rounded-full bg-gray-300 shimmer'></div></div >
                        <div className="col-span-11  ml-3" >
                            <div className='w-full h-4 mb-0.5 bg-gray-300 shimmer'>

                            </div>
                            <div className='w-4/6 h-4 mb-1 bg-gray-300 shimmer'>


                            </div>
                            <div className="" >
                                <div className='w-3/6 h-3 mb-1  bg-gray-300 shimmer'>


                                </div>
                                <div className='w-1/5 h-2  bg-gray-300 shimmer'>

                                </div>
                            </div >
                        </div >
                    </div >
                </div>
            ))
            }
        </div>

    )
}

export default ShimmerContainer