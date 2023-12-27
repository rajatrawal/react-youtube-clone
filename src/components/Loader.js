import React from 'react'
import { useSelector } from 'react-redux'

const Loader = () => {
    const progress = useSelector(store => store.app.progress);
    return (
        <div className='h-0.5 fixed top-0 z-20 bg-red-700' style={{ width: progress + '%' }}>

        </div>
    )
}

export default Loader