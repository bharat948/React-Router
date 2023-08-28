import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div>
            <h2>Page not Found!</h2>
            <p>Wrong distination</p>
            <p>Go To The Home Page<Link to="/">HomePage</Link>. </p>
        </div>
    )
}
