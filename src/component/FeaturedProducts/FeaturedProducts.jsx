import React from 'react';
import './FeaturedProducts.css';
import Card from '../Card/Card';
import { fetchAllProducts } from '../../hooks/Api';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // Import loading spinner component

const FeaturedProducts = (props) => {
  //console.log(props.type);

  const [loading, setLoading] = useState(true); // Loading state

  const [allproducts, setallProducts] = useState([]);


  useEffect(() => {
    setLoading(true);
    fetchAllProducts()
      .then(data => setallProducts(data));
    setLoading(false); // Set loading to false when data is fetched


  }, []);

  console.log(allproducts);




  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{props.type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi harum, cum quis delectus explicabo, in deleniti a quo optio eaque labore! Doloribus voluptate odit esse earum adipisci alias eum.</p>
      </div>
      <div className="bottom">
        {loading ? (
          <div className="loading-spinner">
            <CircularProgress />
          </div>
        ) : (
          <div className="card">
            {allproducts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
            }
export default FeaturedProducts;
  