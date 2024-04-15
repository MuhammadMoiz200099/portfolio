import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParallax } from 'react-scroll-parallax';
import Star from '../../components/SVGs/Star';
import GitFork from '../../components/SVGs/GitFork';

const Contact = ({ data: {
    label,
    heading,
    description,
    button,
    handleBuiltByClick,
    designAndBuiltBy,
} }) => {

    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    useEffect(() => {
        fetch('https://api.github.com/repos/Muneebwasikhan/portfolio')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    const { ref } = useParallax({
        easing: 'easeIn',
        translateX: [-50, 0]
    });
    return (
        <div className='ms-contact'>
            <div
                ref={ref}
                className='ms-contact-zebra-img'
                style={{
                    backgroundImage: `url(${'/assets/arrow-sample.svg'})`,
                }}>

            </div>
            <div className='ms-contact-box'>
                <div className='container flex-center flex-column'>
                    <div className='ms-contact-box-width'>
                        <div className='ms-contact-label'>{label}</div>
                        <div className='ms-contact-title'>{heading} </div>
                        <div className='ms-contact-text'>{description}</div>
                        <div className='ms-contact-button'>
                            <button onClick={button?.onClick} className='ms-button'>
                                {button?.label}
                            </button>
                        </div>
                        <div onClick={handleBuiltByClick} className='ms-contact-git-section'>
                            <div>{designAndBuiltBy}</div>
                            {!!(githubInfo.stars && githubInfo.forks) && (
                                <div>
                                    <span>
                                        <Star />
                                        <>{' '}{githubInfo.stars.toLocaleString()}</>
                                    </span>
                                    {' '}
                                    <span>
                                        <GitFork />
                                        <>{' '}{githubInfo.forks.toLocaleString()}</>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {}

export default Contact