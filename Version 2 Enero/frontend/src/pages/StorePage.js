import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { getProductsFromApi } from '../services/product';

import './StorePage.css';
import SearchBar from '../components/SearchBar';

function StorePage({ cart, addToCart, removeFromCart }) {


  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterProduct, setFilterProduct] = useState('');
  const [sortCriteria, setSortCriteria] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const WEBURL = process.env.REACT_APP_API_URL
  const productsPerPage = 10;

  let sortedAndFilteredProducts = [...products];

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedAndFilteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / productsPerPage);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await getProductsFromApi(token);
      if (res.data) {
        const data = res.data;
        setProducts(data);

        if (Array.isArray(data) && data.length > 0 && data[0].pro_categoria) {
          const uniqueCategories = Array.from(new Set(data.map((product) => product.pro_categoria)));
          setCategories(uniqueCategories);
        } else {
        }
      } else {
      }
    } catch (error) {
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const showProductDetails = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      console.log(`Detalles del producto ${productId}:`, product);
    }
  };


  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.pro_nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    if (searchTerm === '') {
      setProducts(products);
    } else if (!arraysAreEqual(filteredProducts, products)) {
      setProducts(filteredProducts);
    } else {
      getProductos();
      setProducts(products);
    }
  }, [searchTerm, products]);
  
  


  const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
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
      <h1 className="text-center">TIENDA DE PRODUCTOS</h1>
      <SearchBar
        searchTerm={searchTerm}
        sortOption={sortOption}
        handleSearch={handleSearch}
        handleSortChange={handleSortChange}
        showPriceOption={true}
        showCategoryOption={true}
      />
      <br/>

      <div className="product-list">
        <div className="product-list-header">
          <div className="sidebar">
            <h2>Categorías</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  className={selectedCategories.includes(category) ? 'selected' : ''}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="products-container">
          {currentProducts
            .filter((product) =>
              selectedCategories.length === 0 || selectedCategories.includes(product.pro_categoria)
            )
            .map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.pro_nombre}</h3>
                <img src={product.pro_imagen} alt={product.pro_name} className="product-image" />
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