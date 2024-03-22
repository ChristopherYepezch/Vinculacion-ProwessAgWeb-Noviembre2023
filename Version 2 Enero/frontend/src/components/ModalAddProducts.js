import React, { useState, useEffect } from "react";
import "./ModalAddProducts.css";
import ReactSelect from "react-select";
import { getCategories } from "../services/category";
import { getSellers } from "../services/seller";
import { postProduct } from "../services/product";
const WEBURL = process.env.REACT_APP_API_URL

const ModalAddProducts = ({ isOpen, onClose }) => {
  const [newProduct, setNewProduct] = useState({
    pro_nombre: "",
    pro_precio: "",
    pro_stock: "",
    pro_descripcion: "",
    pro_categoria: "",
    pro_medida: "",
    pro_vendedor: "",
    pro_fechaFinal: "",
    pro_fechaInicio:"",
    pro_estado:"",
    pro_imagen: null
  });
  const [categorias, setCategorias] = useState([]);
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isOpen) {
      const body = document.body;
      body.classList.add("modal-open");
      return () => {
        body.classList.remove("modal-open");
      };
    }

    getCategory(token);
    getVendedores(token);

  }, [isOpen]);

  const getVendedores = async (token) => {
    try {
      const res = await getSellers(token);
      console.log(res);
      const data = res.data;
      setVendedores(data);
    } catch (error) {
      console.error('Error al cargar los vendedores', error);
    }
  }

  const getCategory = async (token) => {
    try {
      const res = await getCategories(token);
      console.log(res);
      const data = res.data;
      setCategorias(data);
    } catch (error) {
      console.error('Error al cargar las categorías', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, file } = e.target;
    if (name === "pro_imagen") {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("pro_imagen", file);
      setNewProduct((prevState) => ({
        ...prevState,
        pro_imagen: formData
      }));
    }
    else {
      setNewProduct({
        ...newProduct,
        [name]: value
      });
    }
  };

  const handleSave = async() => {
    const {pro_imagen,...otrosDatos} = newProduct;
    const formData = new FormData();
    if(!pro_imagen) return alert("Debe seleccionar una imagen");
    var imagen = pro_imagen.get("pro_imagen");
    formData.append("pro_imagen", imagen);
    Object.entries(otrosDatos).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const token = localStorage.getItem("token");
    postProducto(formData, token);
  };

  const postProducto = async (product, token) => {
    const response = await postProduct(product, token);
    if ( response.status === 200) {
      onClose();
    } else {
      console.error("Error al agregar el producto en el servidor");
    }

  }


  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-product">
      <span className="modal-close-product-list" onClick={onClose}>
          &times;
        </span>
        <div className="form-container">
          <form className="modal-form" encType="multipart/form-data">
            <div className="form-group-pair">
              <div>
                <label htmlFor="pro_nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="pro_nombre"
                  value={newProduct.pro_nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="pro_precio">Precio</label>
                <input
                  type="number"
                  className="form-control"
                  name="pro_precio"
                  value={newProduct.pro_precio}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group-pair">
              <div>
                <label htmlFor="pro_stock">Stock</label>
                <input
                  type="number"
                  className="form-control"
                  name="pro_stock"
                  value={newProduct.pro_stock}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="pro_descripcion">Descripción</label>
                  <textarea
                    className="form-control"
                    name="pro_descripcion"
                    value={newProduct.pro_descripcion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="btn-add-container">
              <label htmlFor="pro_medida">Medida:</label>
              <select
                id="pro_medida"
                name="pro_medida"
                value={newProduct.pro_medida}
                onChange={handleInputChange}
              >
                <option value=""></option>
                <option value="Qm">Quintal</option>
                <option value="Kg">Kilogramo</option>
                <option value="gr">Gramo</option>
                <option value="Lb">Libra</option>
                <option value="Oz">Onza</option>
                <option value="Unidades">Unidad</option>
                <option value="cubetas">Cubetas</option>
                <option value="racimos">Racimos</option>
                <option value="arrobas">Arrobas</option>          
              </select>

              <label htmlFor="pro_categoria">Categoría:</label>
              <select
                id="pro_categoria"
                name="pro_categoria"
                value={newProduct.pro_categoria}
                onChange={handleInputChange}
              >
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.nombreCategoria}>
                    {categoria.nombreCategoria}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group-pair">
              <div>
                <label htmlFor="pro_fechaInicio">Fecha Inicio</label>
                <input
                  type="date"
                  className="form-control"
                  name="pro_fechaInicio"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="pro_fechaFinal">Fecha Final</label>
                <input
                  type="date"
                  className="form-control"
                  name="pro_fechaFinal"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div class="form-group">
              <label htmlFor="pro_vendedor">Vendedor:</label>
              <ReactSelect
                defaultValue={{ value: 'Vendedor', label: 'None' }}
                id="pro_vendedor"
                name="pro_vendedor"
                value={{ value: newProduct.pro_vendedor, label: newProduct.pro_vendedor }}
                onChange={(selectedOption) => {
                  setNewProduct({ ...newProduct, pro_vendedor: selectedOption.value });
                }}
                options={vendedores.map((vendedor) => ({
                  value: vendedor.name,
                  label: vendedor.name,
                }))}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    width: '230px', // Cambia el ancho según tus necesidades, p. ej., '300px'
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: 'black',
                  }),
                }}
              />
            </div>
            <div class="form-group">
              <label htmlFor="pro_estado">Estado:</label>
              <ReactSelect
                defaultValue={{ value: 'Vendedor', label: 'None' }}
                id="pro_estado"
                name="pro_estado"
                value={{ value: newProduct.pro_estado, label: newProduct.pro_estado }}
                onChange={(selectedOption) => {
                  setNewProduct({ ...newProduct, pro_estado: selectedOption.value });
                }}
                options={['Disponible','No disponible','Reservado'].map((estado) => ({
                  value: estado,
                  label: estado,
                }))}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    width: '230px',
                     // Cambia el ancho según tus necesidades, p. ej., '300px'
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: 'black',
                  }),
                }}
              />
            </div>
            <div className="form-group-pair">
              <div>
                <label htmlFor="pro_imagen">Imagen</label>
                <input
                  type="file"
                  className="form-control"
                  name="pro_imagen"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="btn-save-container" onClick={handleSave}>
                Guardar
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAddProducts;
