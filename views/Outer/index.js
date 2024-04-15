import React from 'react'
import Gooery from '../../components/GooeryAnimation'
import DecryptText from '../../components/DecryptText'
import PropTypes from 'prop-types'


const Outer = ({ data: {
    title1,
    title2,
    decrypTexts,
    desciption,
    button
} }) => {
    return (
        <div className='ms-outer'>
            <div className='container'>
                <div className='ms-outer-container d-flex justify-content-between align-items-center'>
                    <div className='ms-outer-text'>
                        <div className='ms-outer-heading'>
                            {title1}
                        </div>
                        <div className='ms-outer-heading'>
                            {title2}
                        </div>
                        <div className='ms-outer-heading2'>
                            <DecryptText
                                values={decrypTexts}
                            />
                        </div>
                        <div className='ms-outer-description'>
                            {desciption}
                        </div>
                        <div className='ms-outer-contact'>
                            <button onClick={button?.onClick} className='ms-button'>
                                {button?.label}
                            </button>
                        </div>
                    </div>
                    <div className='ms-outer-gooery'>
                        <Gooery />
                    </div>
                </div>
            </div>
        </div>
    )
}

Outer.propTypes = {}

export default Outer