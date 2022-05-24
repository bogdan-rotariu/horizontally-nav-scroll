import { useEffect } from 'react'

interface useHorizontalScrollIntoViewProps {
    element: HTMLElement | null
    options?: ScrollIntoViewOptions
}

const defaultOptions: ScrollIntoViewOptions = {
    block: 'nearest',
    behavior: 'smooth',
}

export const useScrollIntoView = ({ element, options = defaultOptions }: useHorizontalScrollIntoViewProps) => {
    useEffect(() => {
        if (!element) return
        const horizontalHandler = () => element?.scrollIntoView(options)

        window.addEventListener('scroll', horizontalHandler)
        return () => window.removeEventListener('scroll', horizontalHandler)
    }, [element, options])
}
