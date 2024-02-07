import React from 'react';
import Card from '../Card/Card';
import './List.css';
function List({products}) {
   
    return (
        <div className="list">
              {
                        products?.map((item) => {return  <Card key={item.id} item={item} /> })
                    }
        </div>
    );
}

export default List;

