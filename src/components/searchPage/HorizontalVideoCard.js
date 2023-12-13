import React from 'react'
import { Link } from 'react-router-dom'
const HorizontalVideoCard = ({ data, i }) => {
    return (
        <div className='w-full  p-3 grow'>
            <Link to={'/watch?v=' + data?.id?.videoId} >
                <div className='flex'>

                    <img src={data?.snippet?.thumbnails?.high?.url} alt={data?.snippet?.localized?.title} className='w-72 rounded-xl hover:rounded-none transition-all ease-in dealy-400 cursor-pointer ' />
                    <div className=" ml-4 mt-2">


                        <div className='text-lg font-semibold'>
                            {data?.snippet?.title}

                        </div>

                        <div className="text-gray-600 mt-2" >

                            <div className='flex items-center '>
                                <div className=''>
                                    <div className="col-span-1 w-5"><img className='rounded-full' srcSet={"https://source.unsplash.com/random/250x250?sig=" + i} alt="userimage" /></div >
                                </div>
                                <div className='ml-3 font-semibold text-xs'>

                                    {data?.snippet?.channelTitle}
                                </div>
                            </div>
                            <div className='mt-2 text-sm'>
                                {data?.snippet?.description}
                            </div>
                        </div >

                    </div >
                </div >
            </Link>
        </div >
    )
}

export default HorizontalVideoCard