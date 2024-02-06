import React, { useEffect, useState } from 'react';
import './Cart.css';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { fetchProductsinCart, fetchProductDetail } from '../../hooks/Api';
import { useCart } from '../../hooks/CartContext';

function Cart(props) {
  const { cartItems } = useCart();
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    fetchProductsinCart()
      .then(data => setProductsInCart(data));
  }, []);

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {cartItems.map((item) => (
        <div className="item" key={item.id}>
          <CartItem item={item} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
}

function CartItem({ item }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetail(item.id)
      .then(data => setProduct(data));
  }, [item.id]);

  return (
    <div>
      {product ? (
        <>
          <div className="details">
            <h1>{product.title}</h1>
            <p>{product.description?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${product.price}
            </div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Cart;
