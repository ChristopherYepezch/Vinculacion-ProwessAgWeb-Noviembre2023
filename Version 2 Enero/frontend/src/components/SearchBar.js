import React from 'react';

function SearchBar({ searchTerm, sortOption, handleSearch, handleSortChange, showPriceOption, showCategoryOption }) {
  return (
    <div className='filter-container'>
      <div className="search-bar-products">
        <input
          type="text"
          placeholder="Buscar productos"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
        <div>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="name">Nombre</option>
          {showPriceOption && (
            <option value="price">Precio</option>
          )}
         
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
