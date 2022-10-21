import Head from 'next/head'
import SiteLocation from '../components/sites/sitesData'
import SupervisorInformation from '../components/supervisor/supervisorData'
const Sites = () => {
    return (
        <div className="">
            <Head>
                <title>Sites - zenTime</title>
            </Head>
            <div className="mx-auto my-8 max-w-7xl py-6  sm:px-6 rounded lg:px-8 shadow-lg bg-cyan-500 dark:bg-cyan-500 ">
                <header className="  ">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-100">
                        Sites and Supervisors
                    </h1>
                </header>
            </div>
            <main>
                <div className="mx-auto my-8 max-w-7xl py-0 px-6 sm:px-6 lg:px-8 shadow-lg rounded bg-gray-200 dark:bg-slate-600 overflow-visible">
                    <SiteLocation />
                </div>
                <div className=""></div>
                <div className="mx-auto my-8 max-w-7xl py-0 px-6 sm:px-6 lg:px-8 shadow-lg rounded bg-gray-200 dark:bg-slate-600">
                    <SupervisorInformation></SupervisorInformation>
                </div>
                <div className=""></div>
            </main>
        </div>
    )
}
export default Sites
