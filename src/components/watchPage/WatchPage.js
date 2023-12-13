import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_ONE_VIDEO_API } from '../../utils/constants';
import CommentInput from './comments/CommentInput';
import CommentsList from './comments/CommentsList';
import Description from './Description';
// import dummyData from '../../utils/dummy';
import LiveChat from './liveChat/LiveChat';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentVideoId } from '../../utils/store/slices/appSlice';




const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const [videoData, setVideoData] = useState(null);
    const comments = useSelector(store => store?.comment?.[videoId]?.replies);
    const tempComments = useSelector(store => store?.comment);

    const dispatch = useDispatch();
    dispatch(addCurrentVideoId(videoId))
    const fetchVideoData = async () => {
        const data = await fetch(YOUTUBE_ONE_VIDEO_API + videoId);
        const json = await data.json();
        setVideoData(() => json?.items[0]);
    }


    useEffect(() => {
        fetchVideoData();
    }, [])



    return (
        <div className='p-5 flex flex-row flex-wrap'>
            <div className='md:basis-4/6 sm:basis-4/6 grow h-screen' >
                <div className='youtube-video-container'>

                    <iframe width="100%" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-lg h-10/12' ></iframe>
                </div>
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
                <CommentInput commentHistory={[]} />
                <CommentsList data={comments} />
            </div>
            <div className='basis-2/6'>
                <LiveChat videoId={videoId} />
            </div>
        </div>
    )
}

export default WatchPage