import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - zenTime</title>
                <meta
                    name="description"
                    content="A time tracking application for various medical licensure for LMFT, LCSW, LPCC and more. This application applies to various state licensure requirements and regulations. Form generation features for easy supervisor signoff."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800 text-center">
                    <div className="flex justify-center">
                        <div className="max-w-[800px]">
                            <h2 className="text-5xl md:text-6xl xl:text-7xl text-cyan-500 font-bold tracking-tight mb-12">
                                - zenTime -<br />
                                <span className="text-gray-700 dark:text-gray-500">
                                    An app for your hours
                                </span>
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minima officia consequatur
                                adipisci tenetur repudiandae rerum quos.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
