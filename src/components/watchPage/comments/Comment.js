import React, { useEffect, useRef, useState } from 'react'
import Comments from './CommentsList';
import CommentInput from './CommentInput';


const Comment = function ({ data, parentCommentData, oldCommentHistory }) {

    const [replayStatus, setReplayStatus] = useState(false);
    const keyId = data.commentId;
    const currentPath = '#' + parentCommentData?.keyId;
    const oldData = oldCommentHistory ? oldCommentHistory : [];
    const newData = [...oldData, keyId];



    return (
        <>
            <div className='my-5  flex  items-baseline ' id={keyId}>
                <div className='relative top-1'>
                    <img className='rounded-full w-7 h-7' srcSet={"https://source.unsplash.com/random/250x250?sig=" + keyId} alt="userimage" />


                </div>
                <div className='basis-11/12 mx-3 text-sm'>
                    <span className='font-semibold'>
                        @{data?.name}
                        {
                            parentCommentData && <>
                                <span className='text-gray-500'> replied to </span>
                                <a href={currentPath} className='text-blue-600'> @{parentCommentData?.name} </a>
                            </>
                        }
                    </span>
                    <p className=''>
                        {data?.text}
                    </p>
                    <div className="flex items-center mt-2">
                        <div className='transition-all ease-in-out cursor-pointer  border-gray-400 flex mr-4'>
                            <div className='px-2 py-1 text-sm font-semibold border rounded-full hover:bg-gray-200 rounded-e-none  bg-gray-100'>
                                <i className="fa-regular fa-thumbs-up fa-regular"></i> <span className="ml-0.5" />
                            </div>
                            <div className='px-2 py-1 text-sm font-semibold border rounded-full hover:bg-gray-200 rounded-s-none  bg-gray-100'>
                                <i className="fa-regular fa-thumbs-down fa-regular"></i>
                            </div>
                        </div>
                        <div className='px-3 mr-4 py-1.5 text-sm font-semibold  rounded-full hover:bg-gray-200 cursor-pointer'>
                            <span className='ml-1.5' onClick={() => setReplayStatus(true)}>Reply</span>
                        </div>

                    </div>
                    <CommentInput replayStatus={replayStatus} isReply={true} setReplayStatus={setReplayStatus} commentHistory={newData} />


                </div>

            </div>
            <div className='ml-6'>
                {data?.replies &&

                    <Comments data={data.replies} parentCommentData={{ ...data, keyId: keyId }} oldCommentHistory={newData} />
                }


            </div>

        </>
    )
}

export default Comment