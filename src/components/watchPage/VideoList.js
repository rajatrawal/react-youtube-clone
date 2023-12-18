import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoData } from '../helper';
import { useEffect } from 'react';
import { YOUTUBE_VIDEO_API } from '../../utils/constants';
import { addVideos } from '../../utils/store/slices/appSlice';
import VideoCard from './VideoCard';

const VideoList = () => {
    const videosData = useSelector(store => store.app.videoData);
    const dispatch = useDispatch();

    const setVideoData = async () => {
        if (Object.keys(videosData).length === 0) {
            const data = await fetchVideoData(YOUTUBE_VIDEO_API);

            dispatch(addVideos(data));
        }

    }

    useEffect(() => {
        setVideoData();
    }, [])

    return (
        <div className='mt-5 ml-5'>
            {Object.entries(videosData ? videosData : {}).map(([key, value]) => (
                <VideoCard videoData={videosData[key]} key={key} />
            ))}
        </div>
    )
}

export default VideoList