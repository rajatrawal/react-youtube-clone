import React, { useEffect, useState } from 'react'
import ChatComponent from './ChatComponent';
import SendChatMessage from './SendChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../../utils/store/slices/chatSlice';
import { generate, makeid } from '../../helper';


const LiveChat = ({ videoId }) => {
    const chatMessages = useSelector(store => store.chat[videoId]);


    const dispatch = useDispatch();
    const [chatStatus, setChatStatus] = useState(true);
    let i = 0;
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addChat({ videoId: videoId, data: [{ name: generate(), message: makeid(30) }] }))
        }, 1500)
        return () => clearInterval(interval);

    }, [])



    return (
        <div className='px-4'>

            <div className='border border-gray-300 rounded-lg w-full  ease-in-out duration-300'>
                <div className={chatStatus ? 'h-full ' : 'h-0 overflow-hidden '}>
                    <div className='border-b border-b-gray-300 text-xl  py-3 px-4'>
                        Top Chats
                    </div>
                    <div className=' overflow-y-scroll h-96 flex flex-col-reverse'>

                        {
                            chatMessages?.map((message, i) => (
                                <ChatComponent name={message.name} message={message.message} key={message.name + message.message + i} />

                            ))
                        }
                    </div>

                    <SendChatMessage videoId={videoId} />
                </div>
                <div className="my-2 text-center mx-2">
                    <div className="font-semibold py-1.5 hover:bg-gray-200 ease-in-out duration-200 rounded-full cursor-pointer" onClick={() => setChatStatus(!chatStatus)}>
                        {chatStatus ? 'Hide ' : 'Show '}
                        Chat
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveChat