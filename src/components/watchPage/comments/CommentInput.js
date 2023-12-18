import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../utils/store/slices/commentSlice';
import { makeid } from '../../helper';
const CommentInput = ({ replayStatus, isReply, setReplayStatus, commentHistory }) => {
    const [commentFocus, setCommentFocus] = useState(false);
    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();
    const videoId = useSelector(store => store.app.currentVideoId);
    const handleComment = () => {
        const commentId = makeid(5);
        const payload = {
            videoId: videoId,
            data: {
                name: makeid(3),
                text: inputVal,
                replies: {},
                commentId: commentId
            },
            commentId: commentId,
            commentStructure: commentHistory
        }

        dispatch(addComment(payload));
    }

    const handleCancle = () => {
        if (replayStatus) {
            setReplayStatus(false);
        }
        else {
            setCommentFocus(false);
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleComment();
        handleCancle();

    }

    return (
        <div>
            {(replayStatus === true || !isReply) &&
                <>
                    <form onSubmit={handleClick}>

                        <div className='my-4  flex items-center '>
                            <i className="fa-solid fa-circle-user fa-2xl "></i>
                            <div className='basis-11/12 mx-3'>
                                <input type="text" className='w-full border-b-gray-500 outline-none border-b px-2 py-1 text-sm ease-in duration-300 focus:border-b-black focus:border-b-2' placeholder={`Add a ${isReply ? 'Reply' : 'Comment'}...`} onFocus={() => setCommentFocus(true)} onChange={(e) => setInputVal(e.target.value)} />

                            </div>

                        </div>
                    </form>
                    {
                        commentFocus &&
                        <div className='flex justify-end' >
                            <div className='px-3 mr-4 py-1.5 text-sm font-semibold  rounded-full hover:bg-gray-200 cursor-pointer'>
                                <span className='ml-1.5' onClick={() => handleCancle()}>Cancle</span>
                            </div>
                            <button onClick={handleClick} type='submit' className={
                                (inputVal.length === 0) ?
                                    'px-3 py-1.5 text-sm font-semibold border rounded-full  bg-gray-100 cursor-not-allowed text-gray-400' : 'px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200  bg-gray-100   cursor-pointer '
                            }
                            >
                                <span className='ml-1.5' >{isReply ? 'Reply' : 'Comment'}</span>
                            </button>
                        </div>
                    }
                </>

            }
        </div>
    )
}

export default CommentInput