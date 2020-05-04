const indexByScrollPosition = slider => {
    const width = slider.offsetWidth
    const xPosition = slider.scrollLeft
    return Math.round(xPosition/width)
}

export {indexByScrollPosition}