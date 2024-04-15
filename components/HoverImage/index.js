import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'


const HoverImage = ({ parentClassName, imageClassName, filterClassName, borderClassName, showFilter, showBorder, src }) => {
    return (
        <div className={`ms-hover-image ${parentClassName}`}>
            {showBorder && (
                <div className={`ms-hover-image-border ${borderClassName}`} />
            )}
            {showFilter && (
                <div className={`ms-hover-image-filter ${filterClassName}`} />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                alt={src}
                className={`ms-hover-profile ${imageClassName}`}
                src={src}
            />

        </div>
    )
}

HoverImage.propTypes = {}

export default HoverImage