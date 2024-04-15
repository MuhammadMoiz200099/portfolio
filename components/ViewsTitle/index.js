import React from 'react'
import PropTypes from 'prop-types'


const ViewsTitle = ({ text = '', textClassName, lineClassName, containerClassName }) => {
    return (
        <div
        data-aos={`zoom-in-right`}
         className={`ms-views-title-container ${containerClassName || ''}`} >
            <div className={`ms-views-title-text ${textClassName || ''}`}>
                {text}
            </div>
            <div className={`ms-views-title-line-container`}>
                <div className={`ms-views-title-line ${lineClassName || ''}`} />
            </div>
        </div>
    )
}

ViewsTitle.propTypes = {}

export default ViewsTitle