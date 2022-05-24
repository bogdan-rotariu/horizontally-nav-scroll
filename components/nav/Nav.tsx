import { useCallback, useRef, useState } from 'react'
import { useScrollIntoView } from '../../hooks'
import styles from './Nav.module.scss'

interface NavProps {
    items: {
        id: number
        backgroundColor: string
    }[]
    inView: string | null
}

export const Nav = ({ items, inView }: NavProps) => {
    const [inViewListEl, setInViewListEl] = useState<HTMLElement | null>(null)
    useScrollIntoView({ element: inViewListEl })
    const setRefCallback = useCallback((el: HTMLElement) => setInViewListEl(el), [])

    return (
        <ul className={styles.nav}>
            {items.map(({ id }) => {
                const isActive = inView === String(id)
                return (
                    <li
                        key={id}
                        ref={(el) => el && isActive && setRefCallback(el)}
                        className={isActive ? styles.active : undefined}
                    >
                        Section {++id}
                    </li>
                )
            })}
        </ul>
    )
}
