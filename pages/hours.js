import Head from 'next/head'
import Link from 'next/link'
import HoursTable from '../components/common/hoursTable'
import SiteListbox from '../components/common/listBox'

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
                    <div className="md:w-1/3 space-x-2" role="group">
                        <div
                            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
                            role="group"
                        >
                            <button
                                href="/"
                                className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-600 text-gray-50 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded-l"
                            >
                                Category
                            </button>
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-gray-50 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded-r">
                                Calendar
                            </button>
                        </div>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-gray-50 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded">
                            Today
                        </button>
                    </div>
                    <div className="flex items-end justify-end content-end">
                        <div
                            className="datepicker relative form-floating"
                            data-mdb-toggle-button="false"
                        >
                            <label className="block">
                                <input
                                    type="week"
                                    data-mdb-toggle="datepicker"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-slate-600 mx-auto max-w-7xl py-2 px-6 sm:px-6 lg:px-8 rounded shadow-lg ">
                <div className="">
                    <div className="py-4">
                        <SiteListbox />
                    </div>
                    <div className="py-4">
                        <HoursTable />
                    </div>
                    <div className="">
                        <div className="">
                            <button
                                className="bg-cyan-500 hover:bg-cyan-600 text-gray-50  font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded"
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
