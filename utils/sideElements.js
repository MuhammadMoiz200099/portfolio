import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/MuhammadMoiz200099',
        'instagram': 'https://www.instagram.com/muhammadmoizsiddique/',
        'twitter': 'https://twitter.com/muhammadmoizsi01',
        'linkedin': 'https://www.linkedin.com/in/muhammad-moiz-siddique-b09261252/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'muhammadmoiz0087@gmail.com',
        onClick: () => openLink('mailto:muhammadmoiz0087@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements