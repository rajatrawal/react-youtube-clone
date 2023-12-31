
import { useSearchParams, } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_VIDEO_SEARCH_API } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchVideos, setSearchVideos, updateProgress } from '../../utils/store/slices/appSlice'
import HorizontalVideoCard from './HorizontalVideoCard';
import SearchPageShimmerUi from './SearchPageShimmerUi'


const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');
    const videoData = useSelector((store) => store.app.searchVideoData);
    const dispatch = useDispatch();
    const pageToken = useRef(undefined);
    const [showShimmer, setShowShimmer] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(1);
    const doneApiList = useRef({});
    const newYoutubeVideoAPI = useRef(YOUTUBE_VIDEO_SEARCH_API);



    const getVideosData = async (add = false) => {
        dispatch(updateProgress(10));
        setShowShimmer(true);
        const tempVideoApi = YOUTUBE_VIDEO_SEARCH_API + (pageToken?.current ? `&pageToken=${pageToken?.current}` : '') + "&q=" + searchQuery;
        newYoutubeVideoAPI.current = tempVideoApi;
        const data = await fetch(newYoutubeVideoAPI.current);

        const json = await data.json();
        dispatch(updateProgress(60));
        doneApiList.current[tempVideoApi] = true;

        if (add) {
            if (Object.entries(videoData).length > 0) {
                dispatch(addSearchVideos(json?.items));
            }
        }
        else {

            dispatch(setSearchVideos(json?.items));
        }
        setShowShimmer(false);

        pageToken.current = json?.nextPageToken;
        newYoutubeVideoAPI.current = YOUTUBE_VIDEO_SEARCH_API + (pageToken?.current ? `&pageToken=${pageToken?.current}` : '') + "&q=" + searchQuery;

        dispatch(updateProgress(0));



    }



    useEffect(() => {
        

        getVideosData();



    }, [searchParams])



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
            getVideosData(true);

        }



    }, [isAtEnd])

    return (
        <>
            <div className='mt-4 md:w-4/5 w-full m-auto'  >


                {Object.entries(videoData ? videoData : {})?.map(([key, value]) => (
                    <HorizontalVideoCard data={videoData[key]} key={key} i={key} />
                ))}
                {showShimmer && <SearchPageShimmerUi />}
            </div>
        </>
    )
}

export default SearchResult







