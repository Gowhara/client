import React, { useState, useEffect } from 'react';
import List from '../../component/List/List';
import './Categories.css';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../../hooks/Api';

function Categories() {


  const { category } = useParams();
  //console.log(category);
  const [products, setProducts] = useState([]);
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('');
    // Filtering products based on maximum price
    const filteredProducts = products.filter(product => product.price <= maxPrice);

    // Sorting products based on sort option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sort === 'asc') {
        return a.price - b.price;
      } else if (sort === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });
  
  let imageUrl = '';


  useEffect(() => {
    fetchProductsByCategory(category)
      .then(data => setProducts(data));

  }, [category]);

  switch (category) {
    case "women's clothing":
      imageUrl = "https://media.istockphoto.com/id/1168027601/photo/caucasian-lady-holding-at-garments-in-boutique.jpg?s=612x612&w=0&k=20&c=Qb5Gfw3GuQprUlcV_nloQb7Fc1nf3_Pi4Aa7FoM2wFQ=";
      break;
    case "men's clothing":
      imageUrl = "https://media.istockphoto.com/id/876424182/photo/classic-mens-shirts-stacked-on-white-background.jpg?s=612x612&w=0&k=20&c=oNZHUUeVply_VbGFsOMq8SRnjlT7nKHYaCxtRFF_kbc=";
      break;
    case "jewelery":
      imageUrl = "https://media.istockphoto.com/id/1199740733/photo/carnival-beads-for-a-costume-on-a-black-background.jpg?s=612x612&w=0&k=20&c=HLFNXLlAi0fVHj3JRvmXUVSv7oZyIJFqR0KwgonGpxg=";
         break;
    case 'electronics':
      imageUrl = "https://media.istockphoto.com/id/1372577388/photo/old-electronic-devices-on-a-dark-background-the-concept-of-recycling-and-disposal-of.jpg?s=612x612&w=0&k=20&c=RGm3eCA76Y_IJJYGCLWS9acSR39Gb7iqsC_DIhJyG2g=";
      break;
    default:
      imageUrl ="https://media.istockphoto.com/id/1199740733/photo/carnival-beads-for-a-costume-on-a-black-background.jpg?s=612x612&w=0&k=20&c=HLFNXLlAi0fVHj3JRvmXUVSv7oZyIJFqR0KwgonGpxg=";
      break;
  }

  console.log(products);



  return (
    <div className="categories">
      <div className="left">
        <div className="filterItem">
         {/* <h1>Product Categories</h1>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="">Skirts</label>

  </div>*/}
        </div>

        <div className="filterItem">
          <h1>Filter by Price</h1>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>

        </div>

        <div className="filterItem">
          <h1>Sort by:</h1>
          <div className="inputItem">
            <input type="radio" id='all' value='all' name='price' onChange={() => setSort('all')} />
            <label htmlFor="all">All Price</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={() => setSort('asc')} />
            <label htmlFor="asc">Lowest price</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' onChange={() => setSort('desc')} />
            <label htmlFor="desc">Highest Price</label>
          </div>
        </div>

      </div>
      <div className="right">


        <div className="catImg">

          <img src={imageUrl} alt="" />
          <List products={sortedProducts} catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>


      </div>
    </div>
  );
}

export default Categories;
