import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'JavaScript: Core and Advance Techniques',
            platform: 'Udemy',
            link: 'https://www.udemy.com/certificate/UC-0c1bcfe1-3e17-4c6d-944a-e2151435ab66/',
            date: 'Issued Jun 2022 · No Expiration Date',
            logo: '/assets/udemy.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Problem Solving Algorithms (Advance level)',
            platform: 'Hackerrank',
            link: 'https://www.hackerrank.com/certificates/f48c8558d84d',
            date: 'Issued Apr 2020 · No Expiration Date',
            logo: '/assets/hackerrank.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Angular JS Framework Certification',
            platform: 'Hackerrank',
            link: 'https://www.hackerrank.com/certificates/fbb44772f135',
            date: 'Issued Aug 2021 · No Expiration Date',
            logo: '/assets/hackerrank.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'UI/UX Designer CSS for designing websites',
            platform: 'Hackerrank',
            link: 'https://www.hackerrank.com/certificates/fc94abb7b587',
            date: 'Issued Aug 2021 · No Expiration DateIssued',
            logo: '/assets/hackerrank.png',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: 'Learn Ethical Hacking From Scratch',
            platform: 'Udemy | Zaid Academy Exclusive',
            link: 'https://www.udemy.com/course/learn-ethical-hacking-from-scratch/?couponCode=24T3FS41524',
            date: 'Issued Jul 2018 · No Expiration Date',
            logo: '/assets/udemy.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications