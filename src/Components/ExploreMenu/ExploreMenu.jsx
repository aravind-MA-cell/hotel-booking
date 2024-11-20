import React from 'react';
import './ExploreMenu.css';
import {menu_list} from '../../assets/assets.js';

const ExploreMenu = (props) => {
  const {category, setCategory} = props;
  return (
    <div className="expolre-menu" id='exploreMenu'>
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of shoes. Our mission is to satisfy your cravings and elevate ypour dining experiance one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) =>{
          return(
            <div onClick={() => setCategory(prev => prev === index.menu_name?"All": item.menu_name)} key={index} className="explore-menu-list-item">
              <img src={item.menu_image} className={category=== item.menu_name?"active":""} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu