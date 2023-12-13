import React from 'react'
import { useState, useEffect } from 'react'
const Description = ({ videoData }) => {
    const date = new Date(videoData?.snippet?.publishedAt);
    const day = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    const [hideDesc, setHideDesc] = useState(true);
    const setDesc = () => {
        const description = videoData?.snippet?.localized?.description;
        const isHideDesc = description?.length > 400;
        setHideDesc(isHideDesc);
    }
    useEffect(() => {
        setDesc();
    }, [videoData])
    return (
        <>
            <div className={'bg-gray-200  rounded-lg p-2 mt-4 text-sm ' + (hideDesc ? 'cursor-pointer hover:bg-gray-300' : '')}>
                <div onClick={() => { setHideDesc(false) }}>


                    <div className='font-semibold'>
                        {videoData?.statistics?.viewCount} views Premiered on {day}
                        <span className='text-blue-700 text-sm '>

                            {
                                videoData?.snippet?.tags?.map(tag => (
                                    <span className='ml-1.5' key={tag}>{"#" + tag}</span>
                                ))
                            }
                        </span>
                    </div>
                    <div className='mt-1 whitespace-pre-wrap'>
                        <p>

                            {hideDesc ?
                                <>
                                    {videoData?.snippet?.localized?.description?.slice(0, 400)}<span className=' font-bold text-sm text-gray-600'>...see more</span>
                                </> :
                                <>
                                    {videoData?.snippet?.localized?.description}

                                </>
                            }
                        </p>
                    </div>
                </div>
                {!hideDesc &&

                    <div>
                        <span className=' font-bold text-sm text-gray-600 hover:cursor-pointer' onClick={() => { setHideDesc(true) }}>Show Less</span>
                    </div>
                }
            </div>
        </>
    )
}

export default Description