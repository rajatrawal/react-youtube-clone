
import { useSearchParams, } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_VIDEO_SEARCH_API } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchVideos, setSearchVideos } from '../../utils/store/slices/appSlice'
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

        setShowShimmer(true);
        const tempVideoApi = YOUTUBE_VIDEO_SEARCH_API + (pageToken?.current ? `&pageToken=${pageToken?.current}` : '') + "&q=" + searchQuery
        const data = await fetch(newYoutubeVideoAPI.current);
        const json = await data.json();
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
        console.log(json?.items);
        pageToken.current = json?.nextPageToken;
        newYoutubeVideoAPI.current = YOUTUBE_VIDEO_SEARCH_API + (pageToken?.current ? `&pageToken=${pageToken?.current}` : '') + "&q=" + searchQuery;



    }



    useEffect(() => {
        // if (Object.keys(videoData).length === 0) {

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

        const timeOut = setTimeout(() => {
            if (doneApiList.current[newYoutubeVideoAPI.current] === undefined) {
                getVideosData(true);

            }

        }, 500);
        return () => {
            clearTimeout(timeOut);
        }

    }, [isAtEnd])

    return (
        <>
            <div className='mt-4 w-4/5 m-auto'  >


                {Object.entries(videoData ? videoData : {})?.map(([key, value]) => (
                    <HorizontalVideoCard data={videoData[key]} key={key} i={key} />
                ))}
                {showShimmer && <SearchPageShimmerUi />}
            </div>
        </>
    )
}

export default SearchResult







