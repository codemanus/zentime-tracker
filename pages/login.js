import { useEffect, useState } from 'react'
import Auth from '../components/auth'
import { supabase } from '../lib/api'

export default function Login() {
    let [session, setSession] = useState(null)

    // useEffect(() => {
    //     setSession(supabase.auth.session())
    //     supabase.auth.onAuthStateChange((_event, session) =>
    //         setSession(session)
    //     )
    // }, []);

    return (
        <div className="w-full h-full bg-slate-700">
            {!session ? (
                <div className="w-full h-full flex justify-center items-center p-16">
                    <Auth />
                </div>
            ) : (
                <div
                    className="w-full h-full flex flex-col justify-center items-center p-4"
                    style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
                >
                    <button
                        className="btn-black w-full mt-12"
                        onClick={async () => {
                            const { error } = await supabase.auth.signOut()
                            if (error)
                                console.log('Error logging out:', error.message)
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}
