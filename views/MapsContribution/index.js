import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'

const MapsContribution = ({ data: {
    heading,
    data
} }) => {
    return (
        <div className='ms-maps'>
            <div className='container h100per-min100vh d-flex'>
                <div className='ms-maps-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    {
                    data.map((item, index) => (
                    <div key={index} data-aos="fade-down-right">
                        <div className='ms-box'>
                            <div className='row'>
                                <div
                                    data-aos="zoom-in-left"
                                    className='col-3 d-flex flex-column justify-content-center px-sm-3 p-0'>
                                    <img src={item.logo} className="ms-gsv-logo" />
                                </div>
                                <div className='col-9 d-flex flex-column justify-content-center mt-2 mb-2'>
                                    <div data-aos="zoom-in-right" className='ms-box-heading'>
                                        {item.title}
                                    </div>
                                    <div data-aos="zoom-in-left" className='ms-box-subheading'>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-right" className='ms-box-para'>
                                {item.paragraph}
                            </div>
                            <div
                                data-aos="zoom-in-left"
                                className='ms-box-iframe-wrapper ms-assets-hover-filter'>
                                <iframe
                                    width="560" height="315"
                                    className='ms-box-iframe'
                                    src={item.iframe} title={item.iframeTitle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                ))
                    }
                </div>
            </div>
        </div>
    )
}

MapsContribution.propTypes = {}

export default MapsContribution