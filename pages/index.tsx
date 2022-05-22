import { useRef } from 'react'
import type { NextPage } from 'next'
import randomColor from 'randomcolor'
import { Nav } from '../components/nav'
import { useInViewElement } from '../hooks'
import styles from './index.module.scss'

const mockSections = [...Array(10).keys()]

const Home: NextPage = () => {
    const sectionsRef = useRef<HTMLElement[]>([])
    const inView = useInViewElement({ elements: sectionsRef.current })

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
            {mockSections.map((i) => (
                <section
                    ref={(el) => el && (sectionsRef.current[i] = el)}
                    id={`${i}`}
                    className={styles.section}
                    style={{
                        height: '50vh',
                        backgroundColor: randomColor({
                            hue: 'red',
                            luminosity: 'light',
                        }),
                    }}
                    key={i}
                >
                    Section {++i}
                </section>
            ))}
            <div style={{ height: '100vh' }}></div>
        </div>
    )
}

export default Home
