import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='navitems'>
            <Link to='/'>React Todo</Link>
            <Link to='/flexbox-demo'>FlexBox Practice</Link>
        </nav>
    )
}
