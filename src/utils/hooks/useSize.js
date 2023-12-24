import { useEffect, useState } from "react";

const useSize = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const listenerFunc = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', listenerFunc);

        return () => {
            window.removeEventListener('resize', listenerFunc);
        }

    }, [])

    return [width, height];

}

export default useSize;