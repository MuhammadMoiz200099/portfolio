import React, { useEffect, useState } from 'react'
import MoizSiddique from '../MoizSiddique';

const PreLoader = () => {
    const [loader, handleLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const root = document.documentElement;
            root.style.setProperty('--scrollBarWidth', '8px');
            handleLoader(false)
        }, 1500)
    }, [])

    return (
        <div className={`ms-pre-loader ${loader ? 'ms-pre-loader-enabled' : 'ms-pre-loader-disabled'}`}>
            <div className='ms-pre-loader-boarder' />
            <div className='ms-pre-loader-container'>
                <MoizSiddique />
            </div>
        </div>
    )
}

PreLoader.propTypes = {}

export default PreLoader
