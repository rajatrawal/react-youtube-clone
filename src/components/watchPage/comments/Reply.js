
import { useState } from 'react';
const Reply = ({ replayStatus, setReplayStatus }) => {
    const [replyFocus, setReplyFocus] = useState(false);
    const [inputVal, setInputVal] = useState('');

    return (
        <>
            {
                replayStatus &&
                <div>
                    <div className='my-4  flex items-center '>
                        <i className="fa-solid fa-circle-user fa-2xl "></i>
                        <div className='basis-11/12 mx-3'>
                            <input type="text" className='w-full border-b-gray-500 outline-none border-b px-2 py-1 text-sm ease-in duration-300 focus:border-b-black focus:border-b-2 ' placeholder='Add a reply...' onFocus={() => setReplyFocus(true)} onChange={(e) => setInputVal(e.target.value)} />

                        </div>

                    </div>
                    {
                        replyFocus &&
                        <div className='flex justify-end'>
                            <div className='px-3 mr-4 py-1.5 text-sm font-semibold  rounded-full hover:bg-gray-200 cursor-pointer'>
                                <span className='ml-1.5' onClick={() => setReplayStatus(false)}>Cancle</span>
                            </div>

                            <div className={
                                (inputVal.length === 0) ?
                                    'px-3 py-1.5 text-sm font-semibold border rounded-full  bg-gray-100 cursor-not-allowed text-gray-400' : 'px-3 py-1.5 text-sm font-semibold border rounded-full hover:bg-gray-200  bg-gray-100   cursor-pointer '

                            }
                            >
                                <span className='ml-1.5'  >Replay</span>
                            </div>
                        </div>
                    }
                </div>

            }
        </>
    )
}

export default Reply;