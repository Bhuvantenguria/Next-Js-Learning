"use client"

import {Link} from 'next/link'
import { signIn,signOut,useSession } from 'next-auth/react'

function AuthButton(){
    const {data:session} = useSession();
    if(session){
            return (
                <>
                    {session?.user?.name}<br></br>
                    <button onClick={()=>signOut()}>SignOut</button>
                </>
            )
    }
    return (
        <>
            Please SigIn First<br></br>
            <button onClick={()=>signIn()}>SignIn</button>
        </>
    )
}

export default function Navbar(){
    return (
        <>
            <AuthButton/>
        </>
    )
}