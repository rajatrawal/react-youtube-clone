import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ data, i }) => {

  let title = data?.snippet?.localized?.title;
  if (title?.length > 45) title = title.substring(0, 45) + '...';

  return (


    <div className='w-72  p-3 grow'>
      <Link to={'/watch?v=' + data?.id} >
        <img src={data?.snippet?.thumbnails?.high?.url} alt={data?.snippet?.localized?.title} className='w-full rounded-xl hover:rounded-none transition-all ease-in dealy-400 cursor-pointer' />
        <div className="grid grid-cols-12 gap-1  mt-2">
          <div className="col-span-1 "><img className='rounded-full' srcSet={"https://source.unsplash.com/random/400x400?sig=" + i} alt="userimage" /></div >
          <div className="col-span-11  ml-3" >
            <div className='text-sm font-semibold'>
              {title}

            </div>
            <div className="text-gray-600 text-xs" >
              <div>

                {data?.snippet?.channelTitle}
              </div>
              <div className='mt-1'>
                {Math.round(data?.statistics?.viewCount / 1000) + 'K Views'}
              </div>
            </div >
          </div >
        </div >
      </Link>
    </div >
  )
}
export const BoxShadowVideoCard = function boxShadowVideoCard({ data }) {
  return <div className='shadow'>
    <VideoCard data={data} />
  </div>
}
export default VideoCard