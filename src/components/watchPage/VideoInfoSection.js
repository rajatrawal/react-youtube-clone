import React from 'react'
import Description from './Description';

const VideoInfoSection = ({ videoData }) => {
    return (
        <div className="mt-5">
            <div className="text font-bold">
                {videoData?.snippet?.localized?.title}
            </div>
            <div className='flex flex-row mt-4 gap-3  flex-wrap md:flex-nowrap'>
                <div className='md:basis-2/6 flex items-center '>
                    <div className='flex items-center'>
                        <img className='rounded-full w-10 h-10' srcSet={"https://source.unsplash.com/random/250x250"} alt="userimage" />
                        <div className='font-semibold ml-3 shrink-0 md:shrink'>
                            {videoData?.snippet?.channelTitle}
                        </div>
                    </div>
                    <div className='flex items-center md:ml-10 sm:ml-5 ml-3 '>

                        <div className='px-3 py-1.5 text-sm font-semibold border border-gray-400 rounded-full hover:bg-gray-200 transition-all ease-in-out cursor-pointer'>
                            Join
                        </div>
                        <div className='px-4 py-1.5 ml-4  text-sm font-semibold rounded-full bg-slate-950 hover:bg-slate-800 text-white transition-all ease-in-out cursor-pointer'>
                            Subscribe

                        </div>
                    </div>
                </div>
                <div className='sm:basis-4/6 w-full flex items-center justify-between md:justify-normal md:mt-0 mt-2'>
                    <div className='flex shrink-0 transition-all ease-in-out cursor-pointer  border-gray-400  md:ml-3 '>
                        <div className='px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200 rounded-e-none  bg-gray-100'>
                            <i className="fa-regular fa-thumbs-up fa-lg"></i> <span className="ml-0.5">{Math.round(videoData?.statistics?.likeCount / 1000) + 'K'}</span>
                        </div>
                        <div className='px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200 rounded-s-none  bg-gray-100'>
                            <i className="fa-regular fa-thumbs-down fa-lg"></i>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 py-1.5  text-sm font-semibold border rounded-full hover:bg-gray-200  bg-gray-100 cursor-pointer shrink-0 flex items-center  md:ml-3'>

                            <i className="fa-solid fa-share-nodes fa-lg"></i>
                            <span className='ml-1.5   inline '>Share</span>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 py-1.5  text-sm font-semibold border rounded-full hover:bg-gray-200  bg-gray-100 cursor-pointer shrink-0 flex items-center  md:ml-3'>

                            <i className="fa-solid fa-download fa-lg"></i>
                            <span className='ml-1.5  inline '>Download</span>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200  bg-gray-100 cursor-pointer md:ml-3 '>

                            <i className="fa-solid fa-ellipsis"></i>

                        </div>
                    </div>
                </div>
            </div>
            <Description videoData={videoData} />
        </div>
    )
}

export default VideoInfoSection