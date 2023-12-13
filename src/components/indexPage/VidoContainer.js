import React, { useEffect, useRef, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEO_API } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from '../../utils/store/slices/appSlice'
import ShimmerContainer from './ShimmerContainer'
// import { BoxShadowVideoCard } from './VideoCard'
const VidoContainer = () => {
    // const [videoData, setVideoData] = useState([]);

    const videoData = useSelector((store) => store.app.videoData);
    const dispatch = useDispatch();
    const pageToken = useRef(undefined);
    const [showShimmer, setShowShimmer] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(1);
    const doneApiList = useRef({});
    const newYoutubeVideoAPI = useRef(YOUTUBE_VIDEO_API);
    const getVideosData = async () => {
        setShowShimmer(true);
        doneApiList.current[newYoutubeVideoAPI.current] = true;
        const data = await fetch(newYoutubeVideoAPI.current);
        const json = await data.json();
        dispatch(addVideos(json.items));
        setShowShimmer(false);
        pageToken.current = json?.nextPageToken;
        console.log(json.items);
        newYoutubeVideoAPI.current = YOUTUBE_VIDEO_API + (pageToken.current ? `&pageToken=${pageToken.current}` : '');

    }

    useEffect(() => {
        if (Object.keys(videoData).length === 0) {

            getVideosData();
        }

    }, [])
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight) {
            setIsAtEnd((e) => e + 1);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {


        if (doneApiList.current[newYoutubeVideoAPI.current] === undefined) {
            getVideosData();
        }


    }, [isAtEnd])



    return (
        <>
            <div className='mt-4 flex flex-wrap'  >
                {Object.entries(videoData ? videoData : {})?.map(([key, value]) => (
                    <VideoCard data={videoData[key]} key={key} i={key} />
                ))}
            </div >
            {showShimmer && <ShimmerContainer />}
        </>

    )
}
export default VidoContainer;