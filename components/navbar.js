import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

function NavLink({ to, children }) {
    return (
        <a
            href={to}
            className={`text-slate-900 dark:text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
        >
            {children}
        </a>
    )
}

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    return (
        <nav className="bg-white dark:bg-slate-700 shadow-lg">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-slate-900 dark:text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center font-bold">
                            <Link className="" href="/">
                                <a>zenTime</a>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink to="/dashboard">Dashboard</NavLink>

                                <NavLink to="/hours">Hours</NavLink>

                                <NavLink to="/sites">Sites</NavLink>
                                <NavLink to="/forms">Forms</NavLink>

                                <NavLink to="/calendar">Calendar</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {theme === 'light' ? (
                            <svg
                                onClick={() =>
                                    setTheme(
                                        theme === 'light' ? 'dark' : 'light'
                                    )
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 stroke-cyan-600 hover:stroke-cyan-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        ) : (
                            <svg
                                onClick={() =>
                                    setTheme(
                                        theme === 'dark' ? 'light' : 'dark'
                                    )
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-gray-900 stroke-yellow-700 hover:stroke-yellow-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}

                        {/* <!-- Profile dropdown --> */}
                        <div className="relative ml-3">
                            <div>
                                <NavLink to="/login">Login</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/hours">Hours</NavLink>
                    <NavLink to="/site">Sites</NavLink>
                    <NavLink to="/forms">Forms</NavLink>
                    <NavLink to="/calendar">Calendar</NavLink>
                </div>
            </div>
        </nav>
    )
}
