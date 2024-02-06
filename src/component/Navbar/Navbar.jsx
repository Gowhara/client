import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Cart from '../Cart/Cart';
function Navbar(props) {
    const [visabilty,setVisabilty]=useState(false);
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
                        <Link className='link' to={`/Categories/women's clothing`}>Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to={`/Categories/men's clothing`}>Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/Categories/jewelery'>Jewelery</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/Categories/electronics'>electronics</Link>
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
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonIcon />
                        <FavoriteBorderIcon />

                        <div className="carticon" onClick={()=>{setVisabilty(!visabilty)}}>
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>


                    </div>
                </div>
            </div>
            {visabilty&&<Cart/>}
        </div>
    );
}

export default Navbar;