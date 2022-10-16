import { useState, useEffect } from 'react'
import { supabase } from '../../lib/api'
import Auth from '../../components/auth'
import Account from '../../components/account'

export default function Profile({ session }) {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    async function getCurrentUser() {
        const {
            data: { session },
            error,
        } = await supabase.auth.getSession()

        if (error) {
            throw error
        }

        if (!session?.user) {
            throw new Error('User not logged in')
        }

        return session.user
    }

    async function getProfile() {
        try {
            setLoading(true)
            const user = await getCurrentUser()

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function updateProfile({ username, website, avatar_url }) {
        try {
            setLoading(true)
            const user = await getCurrentUser()

            const updates = {
                id: user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date(),
            }

            let { error } = await supabase.from('profiles').upsert(updates)

            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
            {!session ? (
                <Auth />
            ) : (
                <Account key={session.user.id} session={session} />
            )}
        </div>
    )
}
