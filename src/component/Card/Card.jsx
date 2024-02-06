import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
function Card({ item }) {
    return (

        <Link className='link' to={`/product/${item.id}`}>
            <div className="card">
                <div className="images">
                    {<span>{item.category}</span>}
                    <img className='mainImg' src={item.image} alt="" />
                  { /* <img className='secImg' src={item.image} alt="" />*/}
                </div>
            </div>
            <h2>{(item.title).slice(0, 10)}</h2>
            <div className="prices">
                <h3 style={{ textDecoration: 'line-through' ,color:'gray'}}>{(item.price+10).toFixed(2)}$</h3>
                <h3>{item.price}$</h3>

            </div>

        </Link>


    );
}

export default Card;
