import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState (false)
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return(
        <>
        <nav className="navbar">
            <Link to='/'
            className='navbar-logo'>
                Creep<i className='fa-solid fa-mug-saucer'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-xmark': 'fas fa-bars'} />
                </div>
                <ul  className= {!click ? 'nav-menu active':'nav-menu' }>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/work-projects' className='nav-links' onClick={closeMobileMenu}>
                            Work Projects<i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown /> }
                    </li>
                    <li className='nav-item'>
                        <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                            Education
                        </Link>
                    </li>
                </ul>
        </nav>
        </>
    );
}

export default Navbar;