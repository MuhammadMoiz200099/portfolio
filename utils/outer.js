import { openLink } from "./methods"

const outer = {
    title1:  `Hi, I'm`,
    title2: 'Muhammad Moiz Siddique',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'I build things for the web',
    ],
    desciption: `With over 6 years of hands-on experience as a dedicated and disciplined Full Stack Engineer, I thrive on bringing innovative ideas to life on the internet. With a passion for creating impactful solutions, I've successfully delivered numerous projects to satisfied clients worldwide.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:muhammadmoiz0087@gmail.com?subject=Hello')
    }
}

export default outer
