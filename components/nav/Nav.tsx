import { useCallback, useState } from 'react'
import { useHorizontalScrollIntoView } from '../../hooks'
import styles from './Nav.module.scss'

interface NavProps {
    items: number[]
    inView: string | null
}

export const Nav = ({ items, inView }: NavProps) => {
    const [inViewListEl, setInViewListEl] = useState<HTMLElement | null>(null)
    useHorizontalScrollIntoView({ element: inViewListEl })

    const setRefCallback = useCallback(
        (el: HTMLElement, i: string) => {
            if (inView === i) {
                setInViewListEl(el)
            }
        },
        [inView]
    )

    return (
        <ul className={styles.nav}>
            {items.map((i) => (
                <li
                    key={i}
                    ref={(el) => el && setRefCallback(el, String(i - 1))}
                    className={inView === String(i) ? styles.active : undefined}
                >
                    Section {++i}
                </li>
            ))}
        </ul>
    )
}
