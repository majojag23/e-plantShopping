import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores and purifies the air.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to the room and filters pollutants.", cost: "$20" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to care for and highly effective at cleaning air.", cost: "$22" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/18/00/aloe-vera-3284646_1280.jpg", description: "Purifies air and yields soothing gel for skin.", cost: "$14" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/07/13/08/43/lavender-2499806_1280.jpg", description: "Calming scent, helps reduce stress.", cost: "$20" },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2017/08/01/08/29/jasmine-2563783_1280.jpg", description: "Sweet fragrance, promotes relaxation.", cost: "$18" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating aroma, great for culinary use.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/04/14/05/mint-1121013_1280.jpg", description: "Refreshing scent, versatile in kitchen.", cost: "$10" },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2017/02/07/16/59/eucalyptus-2046486_1280.jpg", description: "Fresh minty aroma, clears nasal passages.", cost: "$25" },
        { name: "Gardenia", image: "https://cdn.pixabay.com/photo/2018/06/04/12/47/flower-3453186_1280.jpg", description: "Intense floral fragrance, elegant white blooms.", cost: "$22" }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2017/07/07/14/03/chamomile-2481617_1280.jpg", description: "Soothes anxiety and aids sleep.", cost: "$12" },
        { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/05/12/08/29/peppermint-2306463_1280.jpg", description: "Relieves digestive issues and headaches.", cost: "$14" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2016/06/03/14/31/lemon-balm-1433502_1280.jpg", description: "Calms stress and boosts mood.", cost: "$13" },
        { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2016/08/04/10/48/echinacea-1568822_1280.jpg", description: "Boosts the immune system naturally.", cost: "$16" },
        { name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/19/09/46/marigold-4348398_1280.jpg", description: "Heals minor wounds and skin irritations.", cost: "$11" },
        { name: "Holy Basil (Tulsi)", image: "https://cdn.pixabay.com/photo/2021/09/20/06/55/tulsi-6640026_1280.jpg", description: "Adaptogenic herb, relieves physical and mental stress.", cost: "$15" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" style={{ width: '50px' }} />
            <div>
              <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
              <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <div><a href="#" onClick={(e) => handlePlantsClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Plants</a></div>
          <div>
            <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>
              <h1 className="cart" style={{ display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="40" width="40">
                  <rect width="256" height="256" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,180,176H84a15.9,15.9,0,0,1-15.3-11.6L42.3,72Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="main-icon-path"></path>
                </svg>
                <span style={{ marginLeft: '5px' }}>{totalQuantity}</span>
              </h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index} className="category-section">
              <h1 className="category-title">{category.category}</h1>
              <div className="plant-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className={`product-button ${addedToCart[plant.name] ? 'disabled' : ''}`}
                      disabled={addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;