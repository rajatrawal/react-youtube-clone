import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_ONE_VIDEO_API } from '../../utils/constants';
import CommentInput from './comments/CommentInput';
import CommentsList from './comments/CommentsList';
// import dummyData from '../../utils/dummy';
import LiveChat from './liveChat/LiveChat';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentVideoId, addVideoInHistory } from '../../utils/store/slices/appSlice';
import VideoInfoSection from './VideoInfoSection';
import WatchPageShimmerUI from './WatchPageShimmerUI';
import VideoList from './VideoList';




const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const comments = useSelector(store => store?.comment?.[videoId]?.replies);
    const videoData = useSelector(store => store?.app?.videoHistory[videoId]);
    const [showShimmer, setShowShimmer] = useState(true);
    const dispatch = useDispatch();

    const fetchVideoData = async () => {

        const data = await fetch(YOUTUBE_ONE_VIDEO_API + videoId);
        const json = await data.json();
        console.log('first')
        dispatch(addVideoInHistory(json?.items[0]));
    }


    useEffect(() => {
        setShowShimmer(true);
        dispatch(addCurrentVideoId(videoId));
        if (!videoData) {
            fetchVideoData();

        }
        setShowShimmer(false);

    }, [searchParams])


    return (
        <>
            {showShimmer ? <WatchPageShimmerUI /> :


                <div className='p-1 flex flex-row flex-wrap  lg:flex-nowrap'>
                    <div className='lg:basis-4/6  grow sm:p-4 p-2' >
                        <div className='youtube-video-container'>

                            <iframe width="100%" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-lg sm:h-10/12 ' ></iframe>
                        </div>
                        <VideoInfoSection videoData={videoData} />
                        <CommentInput commentHistory={[]} />
                        <CommentsList data={comments} />
                    </div>
                    <div className='lg:basis-2/6 grow w-full'>
                        <LiveChat videoId={videoId} />
                        <VideoList />
                    </div>
                </div>
            }
        </>
    )
}

export default WatchPage