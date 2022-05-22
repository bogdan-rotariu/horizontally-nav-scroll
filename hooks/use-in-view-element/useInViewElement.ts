import { useEffect, useState } from 'react'
import { isInViewport } from '../../utils'
interface useInViewElementProps {
    elements: HTMLElement[]
}

export const useInViewElement = ({ elements }: useInViewElementProps) => {
    const [inView, setInView] = useState<string | null>(null)

    useEffect(() => {
        if (!elements) return

        const handleScroll = () => {
            const someInView = elements.some((el) => isInViewport(el))
            if (!someInView) {
                setInView(null)
                return
            }

            elements.forEach((element) => {
                if (isInViewport(element)) {
                    setInView(element.getAttribute('id'))
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [elements])

    return inView
}
