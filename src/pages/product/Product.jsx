import React, { useState,useEffect } from 'react';
import './Product.css';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../hooks/Api';
import { useCart } from '../../hooks/CartContext';


function Product() {

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const id=parseInt(useParams().id);
    console.log(id);
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
      addToCart({ ...product, quantity });
    };
  
 
 
    useEffect(() => {
      fetchProductDetail(id)
        .then(data => setProduct(data));
       
    }, [id]);

    //console.log(product);

    const img3=  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600";
    const img2=   "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600";
    const img1=   product?.image;

    const images = [
       img1,
       img2,
       img3, 
       
    ];
    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
                    <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{product?.title}</h1>
                <span>{product?.price}$</span>
                <p>{product?.description}</p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)} >-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>

                <button className="add">
                    <AddShoppingCartIcon onClick={handleAddToCart}/> ADD TO CART
                </button>

                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
