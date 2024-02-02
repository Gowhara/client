import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='wrapper'>

                <div className='left'>
                    <div className='item'>
                        <img src="./img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/1'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/2'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/3'>Children</Link>
                    </div>

                </div>
                <div className='center'>

                    <Link className='link' to='/'>LAMA STORE</Link> {/*Navigate to home page */}

                </div>
                <div className='right'>
                    <div className="item">
                        <Link className='link' to='/'>Home</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/contact'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/about'>About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/stores'>Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonIcon />
                        <FavoriteBorderIcon />

                        <div className="carticon">
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;