import React, { Children } from 'react'
import PropTypes from 'prop-types'

const WindowScreen = ({ children, containerClassName, onClick }) => {
    return (
        <div className={`ms-window-screen ${containerClassName}`} onClick={onClick}>
            <div className='ms-taskbar'>
                <div className='ms-circles'>
                    <div className='ms-circle ms-circle1' />
                    <div className='ms-circle ms-circle2' />
                    <div className='ms-circle ms-circle3' />
                </div>
                <div className='ms-url'>
                    <div className='ms-url-box'>
                        {'http://localhost:1234'}
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

WindowScreen.propTypes = {}

export default WindowScreen