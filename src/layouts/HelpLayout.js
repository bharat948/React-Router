import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
    return (
        <div className='help-layout'>
            <h2>Websit Help</h2>
            <p>While most people know that a paper clip… clips paper, few realize you can use it to pick a lock, fix a zipper, or hack a phone stand to name but a few.

The same is true about welcome messages.

Most people use them to just say hello. But a welcome message can serve other purposes too. “Like what,” you ask? Like:

Generate quality leads
Move customers down the sales funnel
Turn a new user into your brand ambassador on day one
In short, there’s more to a welcome message than meets the eye. And this is exactly what we’ll be exploring.</p>

<nav>
    <NavLink to="faq">View the FAQ</NavLink>
    <NavLink to="contact">Contact Us</NavLink>
</nav>
           <Outlet/> 
        </div>
    )
}
