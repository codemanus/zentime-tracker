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
            <main className="">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="grid place-items-center ">
                            <div>
                                <h1
                                    className="text-3xl text-cyan-500 py-6"
                                    css={{ backgroundColor: 'cyan' }}
                                >
                                    Welcome to zenTime!
                                </h1>
                                <p className="">
                                    A time tracking application to make tracking
                                    your hours for licensure, much, much easier
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
