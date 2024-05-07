import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [isOpen , setIsOpen] = useState(false)
    const menuToggle = () => {
        setIsOpen((open) => !open);
        console.log(!isOpen); 
    };
  return (
    <div className='header'>
        <nav className='navigation'>

            <h1 className='logo'>
                <Link to='/'>Portfolio</Link>
            </h1>
            {isOpen ? <FontAwesomeIcon className='iconn' onClick={menuToggle} icon={faXmark} /> :
            <FontAwesomeIcon onClick={menuToggle} className='iconn' icon={faBars} />}
            <ul className={isOpen ?  "burger-menu" :  "ul-list"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header