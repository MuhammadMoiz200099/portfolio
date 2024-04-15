import React from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'


const SingleImageBox = ({ src, size, imageAlign }) => (
    <HoverColorChanger>
        <div
            style={{
                paddingTop: `calc(${100 / size}% - ${(size - 1) * (12)}px)`,
                backgroundImage: `url(${src})`,
                backgroundPosition: (imageAlign || 'center')
            }}
            className='ms-single-image-container'>

        </div>
    </HoverColorChanger>
)

const HoverColorChanger = ({ children, parentClassName, filterClassName }) => (
    <div className={`ms-hover-color ${parentClassName}`}>
        <div className={`ms-hover-color-filter ${filterClassName}`} />
        {children}
    </div>
)

const ImageBoxes = ({ list }) => (
    <div className='row'>
        {(list || []).map((item, i) => (
            <div data-aos={item.aos} key={i} className={`col-${item.size * 4} m-0 p-1`}>
                <SingleImageBox {...item} />
            </div>
        ))}
    </div>
)

const Graphis = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='ms-graphics'>
            <div className='container'>
                <div className='ms-graphics-top-background' />
                <div className='ms-graphics-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <div>
                        <ImageBoxes list={list} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Graphis.propTypes = {}

export default Graphis