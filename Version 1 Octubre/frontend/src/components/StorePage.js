import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './StorePage.css';
import SearchBar from './SearchBar';



function StorePage({ cart, addToCart, removeFromCart }) {
  const [categories, setCategories] = useState([
    'Frutas',
    'Verduras',
    'Cereales',
    'Hortalizas',
  ]);

  console.log('StorePage', arguments)

  const [products, setProducts] = useState([]);

  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterProduct, setFilterProduct] = useState('');
  const [sortCriteria, setSortCriteria] = useState(null);

  const productsPerPage = 10;

  let sortedAndFilteredProducts = [...products];

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedAndFilteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / productsPerPage);

  useEffect(() => {
    fetch(`http://localhost:5000/fb/producto/get`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud al servidor');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar los productos', error));
  }, []);
  
  const showProductDetails = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      console.log(`Detalles del producto ${productId}:`, product);
    }
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (sortCriteria) {
    sortedAndFilteredProducts.sort((a, b) =>
      a[sortCriteria] > b[sortCriteria] ? 1 : -1
    );
  }

  if (filterProduct) {
    sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
      (product) =>
        product.pro_nombre.toLowerCase().includes(filterProduct.toLowerCase())
    );
  }

  return (
    <div className="store-page">
      <h2 className='text-center'>Tienda de Productos</h2>
      <SearchBar
        searchTerm={searchTerm}
        sortOption={sortOption}
        handleSearch={handleSearch}
        handleSortChange={handleSortChange}
        showPriceOption={true}
        showCategoryOption={true}
      />
      
      <div className="product-list">
        <div className="product-list-header">
          <div className="sidebar">
            <h2>Categorías</h2>
            <ul>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='products-container'>
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.pro_imagen} alt={product.pro_name} className="product-image" />
              <h3>{product.pro_nombre}</h3>
              <p><b>Precio:</b> ${product.pro_precio}</p>
              <p><b>Categoría:</b> {product.pro_categoria}</p>
              <p><b>Cantidad disponible:</b> {product.pro_stock + ' ' + product.pro_medida}</p>
              <p><b>Vendedor:</b> {product.pro_vendedor}</p>

              <div className="product-actions">
                <button onClick={() => addToCart(product)}>
                  Agregar al carrito
                  <FontAwesomeIcon className="fa-ican-cartshopping" icon={faCartShopping} />
                </button>
                <span className="product-info-icon" onClick={() => showProductDetails(product.id)}>
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default StorePage;
