import { useEffect } from 'react'

interface useHorizontalScrollIntoViewProps {
    element: HTMLElement | null
}

export const useHorizontalScrollIntoView = ({
    element,
}: useHorizontalScrollIntoViewProps) => {
    useEffect(() => {
        if (!element) return

        const elRect = element?.getBoundingClientRect()
        if (typeof elRect === 'undefined') return

        const horizontalHandler = () => {
            element?.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth',
            })
        }

        window.addEventListener('scroll', horizontalHandler)
        return () => window.removeEventListener('scroll', horizontalHandler)
    }, [element])
}
