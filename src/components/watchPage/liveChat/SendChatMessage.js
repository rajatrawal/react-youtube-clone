import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from '../../../utils/store/slices/chatSlice';
import { generate } from '../../helper';

const SendChatMessage = ({ videoId }) => {
    const dispatch = useDispatch();


    const [chatInput, setChatInput] = useState('');
    function sendMessage() {
        dispatch(addChat({ videoId: videoId, data: [{ name: generate(), message: chatInput }] }));
        setChatInput('');
    }
    return (
        <form className='py-2 px-6 flex items-center justify-between border-y mt-1' onSubmit={(e) => { e.preventDefault(); sendMessage() }}>
            {chatInput.length > 0 &&
                <img className='rounded-full w-8 h-8' srcSet={"https://source.unsplash.com/random/250x250?sig=100"} alt="userimage" />
            }
            <input type="text" className='bg-gray-100 py-1.5 px-3 ml-3 rounded-full basis-10/12 w-full mr-3 outline-none' placeholder='Chat...' onChange={(e) => setChatInput(e.target.value)} value={chatInput} />

            {chatInput.length > 0 ?
                <div className='px-3 py-2.5 text-sm font-semibold bg-gray-100  rounded-full hover:bg-gray-200 cursor-pointer' onClick={() => sendMessage()}>
                    <i className="fa-solid fa-paper-plane fa-lg " ></i>
                </div> :
                <div className='px-2 py-2.5 text-sm font-semibold bg-gray-100  rounded-full hover:bg-gray-200 cursor-pointer'>
                    <i className="fa-solid fa-money-bill-1 fa-xl"></i>
                </div>

            }


        </form>
    )
}

export default SendChatMessage