export function isInViewport(element: Element) {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
    )
}
