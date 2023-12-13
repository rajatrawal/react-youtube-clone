import React, { useMemo, useState } from 'react'
import { generatePrime } from './helper';

const DemoComponent = () => {
    const [number, setNumber] = useState(0);
    const [isDark, setIsDark] = useState(true);
    const prime = useMemo(() => generatePrime(number), [number])


    return (<>
        <div className='h-96 w-96 border border-black'>
            <input type="number" className='border border-black' onChange={(e) => setNumber(e.target.value)} value={number} />
            <h1 className='text-2xl bold'>{prime}</h1>

            <button className="mt-4" onClick={() => setIsDark(!isDark)}>change to : {isDark ? 'lite' : 'dark'}</button>
        </div>
    </>
    )
}

export default DemoComponent