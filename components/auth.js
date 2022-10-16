import { useState } from 'react'
import { supabase } from '../lib/api'

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (email) => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.signInWithOtp({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mx-auto my-8 max-w-7xl py-0 px-6 sm:px-6 lg:px-8 shadow-lg rounded overflow-hidden bg-gray-200 dark:bg-slate-600">
            <div className="flex flex-wrap mx-3 mb-6 ">
                <div className="w-full w-full px-3 ">
                    <h1 className="text-3xl text-black dark:text-gray-100 my-6">
                        zenTime Login
                    </h1>
                    <p className="block uppercase tracking-wide text-gray-500 text-xs font-bold my-2">
                        Sign in via magic link with your email below
                    </p>
                    <div className="w-full mt-6">
                        <input
                            className="w-full bg-gray-400 dark:bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                handleLogin(email)
                            }}
                            className="bg-cyan-500 hover:bg-cyan-600 text-gray-50 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded"
                            disabled={loading}
                        >
                            <span>
                                {loading ? 'Loading' : 'Send magic link'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}