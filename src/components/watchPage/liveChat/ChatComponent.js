import React from 'react'

const ChatComponent = ({ name, message }) => {
    return (
        <div className='text-sm'>
            <div className='py-2 hover:bg-gray-100 flex  px-3 cursor-pointer ease-in-out'>
                <div className='flex shrink-0 items-start'>
                    <i className="fa-solid fa-circle-user fa-xl mr-3 mt-3"></i>
                    <span className="text-gray-500 mr-3 shrink-0">{name}</span>

                </div>
                <span>{message}</span>
            </div>

        </div>
    )
}

export default ChatComponent