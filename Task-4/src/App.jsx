// src/App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from './components/Cart';
import ProductCard from './components/ProductCard';

function App() {
  const [activelink, setActivelink] = useState('All');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const category = decodeURIComponent(window.location.hash.replace('#', '')) || 'All';
      setActivelink(category);

      if (category === 'All') {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter(product =>
          product.category.toLowerCase() === category.toLowerCase()
        );
        setFilteredProducts(filtered);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [products]);

  const handleLinkClick = (value) => {
    window.location.hash = encodeURIComponent(value);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter(item => item.id !== productId);
      }
    });
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav>
        <ul>
          <li><a className={activelink === "All" ? 'active' : ''} href="#All" onClick={() => handleLinkClick('All')}>All</a></li>
          <li><a className={activelink === "men's clothing" ? 'active' : ''} href="#men's clothing" onClick={() => handleLinkClick("men's clothing")}>Men's</a></li>
          <li><a className={activelink === "women's clothing" ? 'active' : ''} href="#women's clothing" onClick={() => handleLinkClick("women's clothing")}>Women's</a></li>
          <li><a className={activelink === 'jewelery' ? 'active' : ''} href="#jewelery" onClick={() => handleLinkClick('jewelery')}>Jewellery</a></li>
          <li><a className={activelink === 'electronics' ? 'active' : ''} href="#electronics" onClick={() => handleLinkClick('electronics')}>Electronics</a></li>
        </ul>
        <button className="cart-icon" onClick={toggleModal}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
      </nav>

      <section>
        <div className="items">
          {filteredProducts.length > 0 ? filteredProducts.map(item => (
            <ProductCard key={item.id} product={item} addToCart={addToCart} />
          )) : <p>No products available</p>}
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>X</button>
            <Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} calculateTotal={calculateTotal} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
