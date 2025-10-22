import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

import supabase from "../helper/supabaseClient"

function Wrapper({ children }) {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const { data: {session} } = await supabase.auth.getSession();

            setAuth(!!session);
            setLoading(false);
        }

        getSession();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    } else {
        if (auth) {
            return <>{children}</>
        }
        return navigate("/login");
    }
}

export default Wrapper;