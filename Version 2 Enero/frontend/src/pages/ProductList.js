import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./ProductList.css";
import ModalAddProducts from "../components/ModalAddProducts";
import ModalEditProduct from "../components/ModalEditProduct";
import { getProductsFromApi, deleteProduct } from "../services/product";
import { getCategories } from "../services/category";
import { getSellers } from "../services/seller";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const WEBURL = process.env.REACT_APP_API_URL

  const ITEMS_PER_PAGE = 5;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortedColumn, setSortedColumn] = useState(null); // Estado para almacenar la columna por la que se ordena [nombre, precio, stock, categoria
  const [filterProduct, setFilterProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [productToUpdate, setProductToUpdate] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    handleProducts(token);
    handleCategories(token);
    handleVendedores(token);
  }, []);

  const handleProducts = async (token) => {
    const response = await getProductsFromApi(token);
    const data = await response.data;
    if(response.data){
      setProducts(data);
    }
    else {
      console.log(response.data.message);
    }
  }

  const handleCategories = async (token) => {
    const response = await getCategories(token);
    if(response.data.categories){
      setCategorias(response.data);
    }
    else {
      console.log(response.data.message);
    }
  }

  const handleVendedores = async(token) => {
    const response = await getSellers(token);
    if(response.data){
      setVendedores(response.data);
    }
    else{
      console.log(response.error);
    }
  }

  const handleDelete = async (productId) => {
    try {
        const admintoken = localStorage.getItem("token");
        const response = await deleteProduct(productId, admintoken);
        console.log(response);
        if(response.data){
          setProducts(products.filter((product) => product.id !== productId));
        }
        else {
          console.log(response.data.message);
        }
    }
    catch(error){
      
    }
    
  };

  const handleOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setIsEditModalOpen(true);
  };

  const handleEdit = (editedProduct) => {
    setProductToUpdate(editedProduct);
    //handleUpdateProduct(); // Llamar a la función para guardar los cambios
  };

  useEffect(() => {
    if (productToUpdate) {
      handleUpdateProduct();
    }
  }, [productToUpdate]);

  const handleUpdateProduct = () => {
    if (!productToUpdate) {
      return;
    }

    console.log("productToUpdate:", productToUpdate.id);

    fetch(`${WEBURL}fb/producto/update/${productToUpdate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToUpdate),
    })
      .then((response) => {
        if (response.ok) {
          // Actualiza la lista de productos después de la actualización en el backend
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === productToUpdate.id ? productToUpdate : product
            )
          );
          setIsEditModalOpen(false);
        } else {
          console.error("Error al guardar los cambios en el servidor");
        }
      })
      .catch((error) => {
        console.error("Error de red al guardar los cambios", error);
      });
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    setSortedColumn(criteria);
  };

  const handleFilter = (product) => {
    setFilterProduct(product);
  };

  let sortedAndFilteredProducts = [...products];

  if (sortCriteria) {
    sortedAndFilteredProducts.sort((a, b) =>
      a[sortCriteria] > b[sortCriteria] ? 1 : -1
    );
  }

  if (filterProduct) {
    sortedAndFilteredProducts = sortedAndFilteredProducts.filter((product) =>
      product.pro_nombre.toLowerCase().includes(filterProduct.toLowerCase())
    );
  }

  const totalPages = Math.ceil(
    sortedAndFilteredProducts.length / ITEMS_PER_PAGE
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const productsToDisplay = sortedAndFilteredProducts.slice(
    startIndex,
    endIndex
  );

  return (
    <div className="container-product-list">
      <h1>LISTA DE PRODUCTOS</h1>
      <div className="btn-add-container">
        <button onClick={handleOpenModal} className="btn-add-product">
          Agregar Producto
        </button>
      </div>
      <div>
        <ModalAddProducts
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
        <ModalEditProduct
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          productToEdit={productToEdit}
          handleEdit={handleEdit}
          categorias={categorias} // Pasa las categorías aquí
          vendedores={vendedores} // Pasa los vendedores aquí
        />
        <div className="filter-row">
          <label>Filtrar por Producto:</label>
          <input
            type="text"
            value={filterProduct}
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="header-row-product-list">
        <b
          className={sortedColumn === "pro_nombre" ? "sorted" : ""}
          onClick={() => handleSort("pro_nombre")}
        >
          Nombre
        </b>
        <b
          className={sortedColumn === "pro_precio" ? "sorted" : ""}
          onClick={() => handleSort("pro_precio")}
        >
          Precio
        </b>
        <b
          className={sortedColumn === "pro_stock" ? "sorted" : ""}
          onClick={() => handleSort("pro_stock")}
        >
          Stock
        </b>
        <b
          className={sortedColumn === "pro_categoria" ? "sorted" : ""}
          onClick={() => handleSort("pro_categoria")}
        >
          Categoría
        </b>
        <b
          className={sortedColumn === "pro_fechaInicio" ? "sorted" : ""}
          onClick={() => handleSort("pro_fechaInicio")}>Ingreso</b>
        <b
        className={sortedColumn === "pro_fechaFinal" ? "sorted" : ""}
        onClick={() => handleSort("pro_fechaFinal")}
        >Caducidad</b>
        <b
         className={sortedColumn === "pro_vendedor" ? "sorted" : ""}
         onClick={() => handleSort("pro_vendedor")}
        >Vendedor</b>
        <b
        className={sortedColumn === "pro_estado" ? "sorted" : ""}
        onClick={() => handleSort("pro_estado")}
        >Estado</b>
        <b
        >Imagen</b>
        <b>Acciones</b>
      </div>

      <div className="container-products">
        {productsToDisplay.map((product) => (
          <div className="product" key={product.id}>
            <div>{product.pro_nombre}</div>
            <div>${product.pro_precio}</div>
            {product.pro_medida != null ? (
              <div>{product.pro_stock + " " + product.pro_medida}</div>
            ) : (
              <div>{product.pro_stock}</div>
            )}
            <div>{product.pro_categoria}</div>
            <div>{product.pro_fechaInicio}</div>
            <div>{product.pro_fechaFinal}</div>
            <div>{product.pro_vendedor}</div>
            <div>{product.pro_estado}</div>
            <div>
              <img
                src={product.pro_imagen}
                alt={product.pro_name}
                className="product-image-list"
              />
            </div>
            <div className="actions-container">
              <FontAwesomeIcon
                className="fa-icon-edit"
                icon={faPenToSquare}
                onClick={() => handleEditProduct(product)} // Asegúrate de que `product` contenga el ID
              />
              <FontAwesomeIcon
                className="fa-icon-trash"
                icon={faTrash}
                onClick={() => handleDelete(product.id)}
              />
            </div>
          </div>
        ))}
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
};

export default ProductList;
