import { useEffect } from 'react'

interface useHorizontalScrollIntoViewProps {
    selector: string
}

export const useHorizontalScrollIntoView = ({
    selector,
}: useHorizontalScrollIntoViewProps) => {
    useEffect(() => {
        const el = document.querySelector(selector)
        const elRect = el?.getBoundingClientRect()
        if (typeof elRect === 'undefined') return

        const horizontalHandler = () => {
            el?.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth',
            })
        }

        window.addEventListener('scroll', horizontalHandler)
        return () => window.removeEventListener('scroll', horizontalHandler)
    }, [selector])
}
