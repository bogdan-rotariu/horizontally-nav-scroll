import styles from './Nav.module.scss'
import { useHorizontalScrollIntoView, useInViewElement } from '../../hooks'

const ELEMENTS_SELECTOR = 'custom-attr'

interface NavProps {
    items: number[]
}

export const Nav = ({ items }: NavProps) => {
    const inView = useInViewElement({ selector: ELEMENTS_SELECTOR })

    useHorizontalScrollIntoView({ selector: `[nav-attr="${inView}"]` })

    return (
        <ul className={styles.nav}>
            {items.map((i) => (
                <li
                    key={i}
                    nav-attr={`${i}`}
                    className={inView === String(i) ? styles.active : undefined}
                >
                    Section {++i}
                </li>
            ))}
        </ul>
    )
}
