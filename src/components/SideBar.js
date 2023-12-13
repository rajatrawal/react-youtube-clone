import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [showMore, setShowMore] = useState(false);
  const [showSubscribeMore, setShowSubscribeMore] = useState(false);
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (

    <>
      {isMenuOpen &&
        < div className='px-3 w-56 overflow-y-scroll  ease-in fixed top-[3.8rem]  bg-white z-10' style={{ height: "91vh", minWidth: "14rem" }}>


          <ul className='mt-3 '>

            <Link to='/'>
              <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4'>
                <div>
                  <i className="fa-solid fa-house "></i>
                </div>
                <div className='ml-5 text-gray-700'>
                  Home
                </div >
              </li >
            </Link>
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-play"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Shorts
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>

                <i className="fa-solid fa-clapperboard"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Subscriptions
              </div >
            </li >

          </ul >

          <hr />
          <ul className='mt-3 ' >
            <div className='mb-1 px-4' >
              <span className='text-lg font-semibold mr-1 ' > You </span >
              <i className="fa-solid fa-chevron-right fa-sm"></i>
            </div >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-user"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Your Channel
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-clock-rotate-left"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                History
              </div >
            </li >

            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-video"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Your Videos
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-film"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Your Courses
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Watch Later
              </div >
            </li >
            {!showMore ?
              <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' onClick={() => setShowMore(!showMore)}>
                <div>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className='ml-5 text-gray-700' >
                  Show More
                </div >
              </li > : <>
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4'>
                  <div>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className='ml-5 text-gray-700'>
                    Liked Videos
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-brands fa-simplybuilt"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-brands fa-simplybuilt"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-brands fa-simplybuilt"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-brands fa-simplybuilt"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' onClick={() => setShowMore(!showMore)}>
                  <div>
                    <i className="fa-solid fa-chevron-up"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Show Less
                  </div >
                </li >
              </>

            }


          </ul >
          <hr />
          <ul className='mt-3' >
            <div className='mb-1 px-4' >
              <span className='text-base font-bold  ' > Subscriptions</span >

            </div >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-user"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Playlist
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-user"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Playlist
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-user"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Playlist
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-user"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Playlist
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-user"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Playlist
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-user"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Playlist
              </div >
            </li >
            {!showSubscribeMore ?

              <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' onClick={() => setShowSubscribeMore(!showSubscribeMore)}>
                <div>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className='ml-5 text-gray-700' >
                  Show 10 More
                </div >
              </li > : <>
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4'>
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700'>
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
                  <div>
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Playlist
                  </div >
                </li >
                <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' onClick={() => setShowSubscribeMore(!showSubscribeMore)}>
                  <div>
                    <i className="fa-solid fa-chevron-up"></i>
                  </div>
                  <div className='ml-5 text-gray-700' >
                    Show Less
                  </div >
                </li >
              </>
            }
          </ul >
          <hr />

          <ul className='mt-3' >
            <div className='mb-1 px-4' >
              <span className='text-lg font-semibold mr-1 ' > Explore  </span >

            </div >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-fire"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Trending
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Shopping
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-music"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Music
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-film"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Films
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-satellite-dish"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Live
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-gamepad"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Gaming
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-newspaper"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                News
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-trophy"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Sports
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Learning
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-gem"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Fashion and Beauty
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-podcast"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Podcast
              </div >
            </li >
          </ul >
          <hr />
          <ul className='mt-3' >
            <div className='mb-1 px-4' >
              <span className='text-lg font-semibold mr-1 ' > More From Youtube</span >


            </div >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-brands fa-youtube" style={{ color: "#ff0000" }}></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Playlist
              </div >
            </li >
          </ul >
          <hr />
          <ul className='mt-3' >

            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-gear"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Settings
              </div >
            </li >

            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-flag"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Flag
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-circle-info"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Help
              </div >
            </li >
            <li className='flex  py-2  border-0 rounded-xl  cursor-pointer hover:bg-gray-100 last:mb-2 px-4' >
              <div>
                <i className="fa-solid fa-comment-dots"></i>
              </div>
              <div className='ml-5 text-gray-700' >
                Feedback
              </div >
            </li >
          </ul >
        </div >

      }
    </ >


  )
}

export default SideBar