import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
    let x = 10;
    const [y, setY] = useState(5);
    const ref = useRef(0);
    const t = useRef(null);
    useEffect(() => {
        t.current = setInterval(() => {
           
        }, 1000)

    }, [])

    return (

        <div className='w-96 h-96 bg-slate-50 border border-black m-5'>
            <button className='border border-black px-3 py-2 ' onClick={() => {
                x++;
          
            }}> Increase Value</button>
            <span className='font-bold text-xl mx-3'>Let X = {x}</span>

            <div className='mt-8'>
                <button className='border border-black px-3 py-2 bg-slate-300' onClick={() => setY(y + 1)}>
                    Increase Y
                </button>
                <span className='font-bold text-xl mx-3'>State Var Y = {y}</span>

            </div>
            <div className='mt-8'>
                <button className='border border-black px-3 py-2 bg-slate-300' onClick={() => { ref.current = ref.current + 1;}}>
                    Increase Ref
                </button>
                <span className='font-bold text-xl mx-3'>Ref = {ref.current}</span>

            </div>
            <div>

                <button className='border border-black px-3 py-2 bg-red-500 text-white font-semibold mt-3 ' onClick={() => { clearInterval(t.current) }}>
                    Stop Interval
                </button>
            </div>
        </div >
    )
}

export default Demo2