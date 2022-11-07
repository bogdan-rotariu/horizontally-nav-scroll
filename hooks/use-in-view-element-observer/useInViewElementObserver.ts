import { useEffect, useState } from "react"

interface useInViewElementObserver {
  elements: { [id: number]: HTMLElement } | null
  topOffset?: number
}

export const useInViewElementObserver = ({
  elements,
  topOffset = 0,
}: useInViewElementObserver) => {
  const [inView, setInView] = useState<string | null>(null)

  useEffect(() => {
    if (!elements) return
    const components = Object.entries(elements ?? [])

    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries?.[0]
      components?.forEach(([id, element]) => {
        if (entry?.isIntersecting && element === entry?.target) {
          setInView(String(parseFloat(id) - 1))
        }
      })
    }

    const options = {
      threshold: 0.75,
      rootMargin: `${topOffset}px 0px 0px 0px`,
    }
    const observer = new IntersectionObserver(callback, options)

    components?.forEach(([, element]) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [elements])

  return inView
}
