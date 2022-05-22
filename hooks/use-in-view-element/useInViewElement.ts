import { useEffect, useState } from 'react'

function isInViewport(element: Element) {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
    )
}

interface useInViewElementProps {
    selector: string
}

export const useInViewElement = ({ selector }: useInViewElementProps) => {
    const [inView, setInView] = useState<string | null>(null)

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll(`[${selector}]`))
        const handleScroll = () => {
            const someInView = elements.some((el) => isInViewport(el))
            if (!someInView) {
                setInView(null)
                return
            }

            elements.forEach((element) => {
                if (isInViewport(element)) {
                    setInView(element.getAttribute(selector))
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [selector])

    return inView
}
