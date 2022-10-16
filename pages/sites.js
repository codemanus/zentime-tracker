import Head from 'next/head'
const Sites = () => {
    return (
        <div>
            <Head>
                <title>Sites - zenTime</title>
            </Head>
            <div className="mx-auto my-8 max-w-7xl py-6 px-6 sm:px-6 rounded lg:px-8 shadow-lg bg-cyan-500 dark:bg-cyan-500 overflow-hidden ">
                <header className="  ">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-100">
                        Sites and Supervisor
                    </h1>
                </header>
            </div>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 dark:bg-grey-900">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 bg-gray-200 dark:bg-slate-600 text-center shadow-lg">
                            <h1 className="text-3xl">Sites Information</h1>
                        </div>
                    </div>
                    {/* /End replace */}
                </div>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 dark:bg-grey-900">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 bg-gray-200 dark:bg-slate-600 text-center shadow-lg">
                            <h1 className="text-3xl">
                                Supervisor Information Form Location
                            </h1>
                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
    )
}
export default Sites
