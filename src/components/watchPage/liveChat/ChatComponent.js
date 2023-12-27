import React from 'react'

const ChatComponent = ({ name, message }) => {
    return (
        <div className='text-sm'>
            <div className='py-2 hover:bg-gray-100 flex  px-3 cursor-pointer ease-in-out '>
                <div className='flex shrink-0 items-start'>
                    <img className='rounded-full w-7 h-7 mr-2' srcSet={"https://source.unsplash.com/random/250x250?sig=" + name} alt="userimage" />
                    <span className="text-gray-500 mr-3 shrink-0">{name}</span>

                </div>
                <span className='break-words'>{message}</span>
            </div>

        </div>
    )
}

export default ChatComponent