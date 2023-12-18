import React from 'react'
import Description from './Description';

const VideoInfoSection = ({ videoData }) => {
    return (
        <div className="mt-4">
            <div className="text font-semibold">
                {videoData?.snippet?.localized?.title}
            </div>
            <div className='flex flex-row mt-3 gap-3'>
                <div className='basis-2/6 flex items-center '>
                    <div className='flex items-center'>
                        <i className="fa-solid fa-circle-user fa-2xl "></i>
                        <div className='font-bold ml-3'>
                            {videoData?.snippet?.channelTitle}
                        </div>
                    </div>
                    <div className='flex items-center ml-10'>

                        <div className='px-3 py-1.5 text-sm font-semibold border border-gray-400 rounded-full hover:bg-gray-200 transition-all ease-in-out cursor-pointer'>
                            Join
                        </div>
                        <div className='px-4 py-1.5 ml-4  text-sm font-semibold rounded-full bg-slate-950 hover:bg-slate-800 text-white transition-all ease-in-out cursor-pointer'>
                            Subscribe

                        </div>
                    </div>
                </div>
                <div className='basis-4/6 flex '>
                    <div className='transition-all ease-in-out cursor-pointer  border-gray-400 '>
                        <div className='px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200 rounded-e-none  bg-gray-100'>
                            <i className="fa-regular fa-thumbs-up fa-lg"></i> <span className="ml-0.5">{Math.round(videoData?.statistics?.likeCount / 1000) + 'K'}</span>
                        </div>
                        <div className='px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200 rounded-s-none  bg-gray-100'>
                            <i className="fa-regular fa-thumbs-down fa-lg"></i>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200  bg-gray-100 cursor-pointer'>

                            <i className="fa-solid fa-share-nodes fa-lg"></i>
                            <span className='ml-1.5'>Share</span>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200  bg-gray-100 cursor-pointer'>

                            <i className="fa-solid fa-download fa-lg"></i>
                            <span className='ml-1.5'>Download</span>
                        </div>
                    </div>
                    <div>
                        <div className='px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200  bg-gray-100 cursor-pointer'>

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