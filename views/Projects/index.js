import React from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle';
import { openLink } from "../../utils/methods";

const WindowImage = ({ src }) => (
    <HoverImage
        showFilter
        imageClassName='ms-image'
        src={src}
    />
)

const getSide = (index) => index % 2 ? 'left' : 'right'

const SingleProject = (props) => {
    const { image, index, link } = props
    const side = getSide(index);
    const handleOnClickWindow = () => {
        openLink(link)
    }
    return (
        <div className='ms-projects-single'>
            <div className='row'>
                <div className='col-6 d-none d-lg-block'>
                    <div className=''>
                        <WindowScreen containerClassName={`ms-projects-image-container ms-projects-image-container-${side}`} onClick={() => handleOnClickWindow()}>
                            <WindowImage src={image} />
                        </WindowScreen>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
                    <ProjectTextSide {...props} />
                </div>
            </div>
        </div>
    )
}

const ProjectTextSide = (props) => {
    const { label, title, description, techs, index, image } = props
    const side = getSide(index);
    return (
        <div
            data-aos={`fade-down-${side}`}
            className={`ms-projects-text-side ms-projects-text-side-${side}`}>
            <div
                data-aos={`zoom-in-${side}`}
                className='ms-projects-text-featured'>{label}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ms-projects-text-title'>{title}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ms-projects-text-description'>
                {description}
                <div className='mt-4 d-block d-lg-none'>
                    <WindowScreen containerClassName={`ms-text-image-container`}>
                        <WindowImage src={image} />
                    </WindowScreen>
                </div>
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ms-projects-text-tecs'>
                {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
            </div>
        </div>
    )
}

const Projects = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='ms-projects'>
            <div className='container'>
                <div className='ms-projects-container'>
                    <ViewsTitle text={heading} />
                    <div className='row justify-content-center'>
                        {(list || []).map((project, i) => (
                            <SingleProject
                                key={i}
                                index={i}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Projects.propTypes = {}

export default Projects