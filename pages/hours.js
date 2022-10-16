import Head from 'next/head'

const Hours = () => {
    return (
        <div className="">
            <Head>
                <title>Hours - zenTime</title>
            </Head>
            <div className="mx-auto my-8 max-w-7xl py-6 px-6 sm:px-6 rounded lg:px-8 shadow-lg bg-cyan-500 dark:bg-cyan-500 overflow-hidden ">
                <header className="  ">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-100">
                        Hours
                    </h1>
                </header>
            </div>
            <div className="mx-auto my-8 max-w-7xl py-0 px-6 sm:px-6 lg:px-8 shadow-lg rounded overflow-hidden bg-gray-200 dark:bg-slate-600">
                <div className="md:flex flex-row md:items-center col-span-1  px-3 py-sm:px-2 lg:px-3  space-x-2 py-4">
                    <div className="md:w-1/3 space-x-2">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-gray-50 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded">
                            Category
                        </button>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-gray-50 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded">
                            Calendar
                        </button>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-gray-50 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded">
                            Today
                        </button>
                    </div>
                    <div className="md:w-2/3 content-end">
                        <div className="">
                            <label class="block">
                                <input
                                    type="week"
                                    class="appearance-none border rounded border-b-4 border-cyan-700 w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-slate-600 mx-auto max-w-7xl py-2 px-6 sm:px-6 lg:px-8 rounded overflow-hidden shadow-lg ">
                <div className="">
                    <div className="md:flex flex-row md:items-center col-span-1  px-3 py-sm:px-6 lg:px-8  space-x-2 py-4 ">
                        <div className="">
                            <h2>
                                Category definition and hour inputs need to be
                                generated here.
                            </h2>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <button
                                className="bg-cyan-500 hover:bg-cyan-600 text-gray-50 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded"
                                type="submit"
                            >
                                Save Hours
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hours
