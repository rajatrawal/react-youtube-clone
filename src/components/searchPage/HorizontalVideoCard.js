import React from 'react'
import { Link } from 'react-router-dom'
import useSize from '../../utils/hooks/useSize'
const HorizontalVideoCard = ({ data, i }) => {
    const [width] = useSize();
    const description = width < 600 ? data?.snippet?.description.slice(0, 50) : data?.snippet?.description;

    return (
        <div className='w-full  p-3  '>
            <Link to={'/watch?v=' + data?.id?.videoId} >
                <div className=' flex grow items-start'>
                    <div className='basis-5/12'>

                        <img src={data?.snippet?.thumbnails?.high?.url} alt={data?.snippet?.localized?.title} className='  rounded-xl hover:rounded-none transition-all ease-in dealy-400 cursor-pointer ' />
                    </div>
                    <div className=" ml-4  basis-7/12">


                        <div className='md:text-lg font-semibold text-base'>
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
                                {description}
                            </div>
                        </div >

                    </div >
                </div >
            </Link>
        </div >
    )
}

export default HorizontalVideoCard