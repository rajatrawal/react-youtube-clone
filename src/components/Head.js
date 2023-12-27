import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/store/slices/appSlice';
import { addSearch } from '../utils/store/slices/searchSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';


const Head = () => {

  const oldSearchData = useSelector(store => store.search.search);


  const [searchSuggestions, setSearchSugessions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [miniSearch, setMiniSearch] = useState(false);
  const dispatch = useDispatch();
  function menuTogglerHandel() {
    dispatch(toggleMenu())
  }

  const fetchSearchSuggestions = async (query) => {
    const data = await fetch(YOUTUBE_SEARCH_API + query);
    const json = await data.json();
    const searchData = json[1]; // [[],'q]
    setSearchSugessions(searchData);
    dispatch(addSearch({ query: query, data: searchData }));
  }

  useEffect(() => {
    if (oldSearchData[searchQuery]) {
      setSearchSugessions(oldSearchData[searchQuery]);

    }
    else {
      const timer = setTimeout(() => {

        fetchSearchSuggestions(searchQuery);
      }, 200)
      return () => {
        clearTimeout(timer);
      }
    }

  }, [searchQuery])

  const handleSearchFocus = () => {
    if (searchQuery.length > 0) {
      setShowSuggestions(true)
    }
    else {
      setShowSuggestions(false);
    }
  }
  const handleSearchBlur = () => {
    setTimeout(() => { setShowSuggestions(false) }, 200);
  }

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);

  }

  useEffect(() => {
    handleSearchFocus();
  }, [searchQuery])

  return (
    <>
      <div className='sm:px-3 px-1.5 flex justify-between items-center fixed bg-white w-full top-0 z-10 h-16' >
        {(!miniSearch) ?
          <>

            <div className='flex items-center sm:w-4/12' >
              <div>
                <button className='px-3 py-2  cursor-pointer rounded-full hover:bg-gray-100' onClick={() => menuTogglerHandel()}>
                  <i className="fa-solid fa-bars fa-lg"></i>
                </button>

              </div >
              <Link to={'/'}>

                <img className='w-28 ml-4 hidden sm:block' srcSet="https://i1.wp.com/gethsemanebaptistchurch.org/wp-content/uploads/2019/05/youtube-logo-png-transparent-image-5.png?ssl=1" alt="youtube logo" />

                <img className='w-10 ml-2  sm:hidden block' srcSet="https://www.pngkit.com/png/full/2-21145_youtube-logo-transparent-png-pictures-transparent-background-youtube.png" alt="youtube logo" />


              </Link >
            </div >

            <div className='sm:flex justify-between sm:w-7/12  hidden' >
              <div className=' sm:w-full' >
                <input type="text " className='px-5 py-2  w-full  sm:block   border border-gray-400 rounded-full rounded-e-none focus:border-blue-400 outline-none broder ' placeholder='Search ' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
              </div>

              <button className='border py-2   sm:px-6 px-2 border-gray-400 rounded-full rounded-s-none border-s-0 bg-gray-50 hover:drop-shadow-sm hover:bg-gray-100 ' > <i className="fa-solid fa-magnifying-glass fa-regular "></i></button >

            </div >



            <div className='flex justify-between items-center'>

              <button className=' py-1.5 px-3 border-gray-400 rounded-full  bg-gray-50 hover:drop-shadow-sm hover:bg-gray-100 sm:hidden block' > <i className="fa-solid fa-magnifying-glass fa-regular " onClick={() => setMiniSearch(true)}></i></button >

              <button className='   px-3 py-1 ml-4 cursor-pointer rounded-full bg-gray-100  hover:bg-gray-200' > <i className="fa-solid fa-microphone fa-lg "></i></button >



              <div className='hover:border-0 hover:rounded-full hover:bg-gray-100  p-3  ml-1 sm:ml-2 cursor-pointer'>
                <i className="fa-regular fa-square-plus fa-xl "></i>

              </div>
              <div className='hover:border-0 hover:rounded-full hover:bg-gray-100   p-3  ml-1 sm:ml-2 cursor-pointer' >
                <i className="fa-regular fa-bell fa-xl "></i>

              </div >
              <div className='hover:border-0 hover:rounded-full hover:bg-gray-100  p-3  ml-1 sm:ml-2 cursor-pointer' >
                <i className="fa-regular fa-circle-user fa-xl "></i>

              </div >
            </div >
          </> :

          <div className='flex    w-full mt-2 mb-2' >

            <input type="text " className='px-5 py-2  w-full  sm:block   border border-gray-400 rounded-full rounded-e-none focus:border-blue-400 outline-none broder ' placeholder='Search ' onChange={handleSearchInput} value={searchQuery} onFocus={handleSearchFocus} onBlur={handleSearchBlur} />

            <div className=''>

              <button className='border py-2   px-6  border-gray-400 rounded-full rounded-s-none border-s-0 bg-gray-50 hover:drop-shadow-sm hover:bg-gray-100 ' onClick={() => setMiniSearch(false)}> <i className="fa-solid fa-xmark fa-xl"></i> </button >
            </div >

          </div >

        }
      </div>
      {
        showSuggestions &&

        <div className='flex justify-center'>
          <div className='fixed bg-white  z-10  sm:w-8/12 w-full md:7/12 shadow-2xl rounded-2xl mt-16' >


            <ul className='py-3' >

              {
                searchSuggestions?.map((data, i) => (

                  <div key={data + i}>
                    <Link to={('search?q=' + data)} onClick={() => setShowSuggestions(false)}>
                      <li className='transition-all cursor-pointer px-4 hover:bg-gray-200'>
                        <div className='px-2 py-2  capitalize text-base flex items-center'>
                          <i className="fa-solid fa-magnifying-glass mr-2"></i>
                          {data}
                        </div>
                      </li>
                    </Link >
                  </div>
                ))
              }
            </ul>
          </div>
        </div>


      }



    </>
  )
}

export default Head