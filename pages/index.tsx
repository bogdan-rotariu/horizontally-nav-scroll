import { useRef } from 'react'
import type { NextPage } from 'next'
import randomColor from 'randomcolor'
import { useInViewElementObserver } from '../hooks'
import { Nav } from '../components'
import styles from './index.module.scss'

const mockSections = [...Array(10).keys()].map((section) => ({
    id: section,
    backgroundColor: randomColor({
        hue: 'red',
        luminosity: 'light',
    }),
}))

const Home: NextPage = () => {
    const sectionsRef = useRef<HTMLElement[]>([])
    const inView = useInViewElementObserver({ elements: sectionsRef.current, topOffset: 60 })

    return (
        <div>
            <Nav items={mockSections} inView={inView} />
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '50px',
                }}
            >
                Scroll to start
            </div>
            {mockSections.map(({ id, backgroundColor }) => (
                <section
                    ref={(el) => el && (sectionsRef.current[id] = el)}
                    id={`${id}`}
                    className={styles.section}
                    style={{
                        height: '50vh',
                        backgroundColor,
                    }}
                    key={id}
                >
                    Section {++id}
                </section>
            ))}
            <div style={{ height: '100vh' }}></div>
        </div>
    )
}

export default Home
