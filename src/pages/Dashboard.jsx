import React from 'react'
import { useNavigate } from 'react-router-dom';

import supabase from "../helper/supabaseClient"

export function Dashboard() {
    const navigate = useNavigate();

    const signOut = async () => {
        const {error} = supabase.auth.signOut();

        if (error) throw error;
        navigate('/login')
    }


    return (
        <div>
            <h2>Hello! You Loged In</h2><br />
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

