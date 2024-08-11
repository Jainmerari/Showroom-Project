import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './Item.css';

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(props.id);
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
      <p onClick={handleAddToCart}></p>
    </div>
  );
}

export default Item;
