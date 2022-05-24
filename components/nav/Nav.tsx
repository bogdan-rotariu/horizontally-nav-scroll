import { useCallback, useRef, useState } from 'react'
import { useScrollIntoView } from '../../hooks'
import styles from './Nav.module.scss'

interface NavProps {
    items: number[]
    inView: string | null
}

export const Nav = ({ items, inView }: NavProps) => {
    const [inViewListEl, setInViewListEl] = useState<HTMLElement | null>(null)
    useScrollIntoView({ element: inViewListEl })
    const setRefCallback = useCallback(
        (el: HTMLElement) => setInViewListEl(el),
        []
    )

    return (
        <ul className={styles.nav}>
            {items.map((i) => {
                const isActive = inView === String(i)
                return (
                    <li
                        key={i}
                        ref={(el) => el && isActive && setRefCallback(el)}
                        className={isActive ? styles.active : undefined}
                    >
                        Section {++i}
                    </li>
                )
            })}
        </ul>
    )
}
