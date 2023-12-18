import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ videoData }) => {
    let title = videoData?.snippet?.localized?.title;
    if (title.length > 40) {
        title = title.slice(0, 40) + '...';
    }
    return (
        <Link to={'/watch/?v=' + videoData?.id}>
            <div className="flex no-wrap py-2">
                <div className='basis-5/12 w-full '>
                    <img src={videoData?.snippet?.thumbnails?.high?.url} alt={title} className=' rounded-lg hover:rounded-none ease-in-out ' />
                </div>
                <div className='basis-7/12 px-1.5'>
                    <div className='font-bold sm:text-sm text-xs'>
                        {title}
                    </div>
                    <div className='text-gray-600 text-xs mt-1.5'>
                        {videoData?.snippet?.channelTitle}
                        <div className='mt-1.5'>
                            {Math.round(videoData?.statistics?.viewCount / 1000) + 'K Views'}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard