import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {
    const [user,setUser]=useState('bharat')

    if(!user)
    {
        return <Navigate to="/" replace={true}/>
    }
    return (
        <div className="about">
        <h2>About us</h2>
        <p>While most people know that a paper clip… clips paper, few realize you can use it to pick a lock, fix a zipper, or hack a phone stand to name but a few.

The same is true about welcome messages.

Most people use them to just say hello. But a welcome message can serve other purposes too. “Like what,” you ask? Like:

Generate quality leads
Move customers down the sales funnel
Turn a new user into your brand ambassador on day one
In short, there’s more to a welcome message than meets the eye. And this is exactly what we’ll be exploring.</p>
<p>While most people know that a paper clip… clips paper, few realize you can use it to pick a lock, fix a zipper, or hack a phone stand to name but a few.

The same is true about welcome messages.

Most people use them to just say hello. But a welcome message can serve other purposes too. “Like what,” you ask? Like:

Generate quality leads
Move customers down the sales funnel
Turn a new user into your brand ambassador on day one
In short, there’s more to a welcome message than meets the eye. And this is exactly what we’ll be exploring.</p>

<button onClick={()=>setUser(null)}>Logout</button>

        </div>
    )
}