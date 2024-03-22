import React, { useState, useEffect } from "react";
import "./ModalAddTypeProducts.css";
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
        pro_fechaInicio: "",
        pro_estado: "",
        pro_imagen: null
    });
 
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

    const handleSave = async () => {
        const { pro_imagen, ...otrosDatos } = newProduct;
        const formData = new FormData();
        if (!pro_imagen) return alert("Debe seleccionar una imagen");
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
        if (response.status === 200) {
            onClose();
        } else {
            console.error("Error al agregar el producto en el servidor");
        }

    }


    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

        </div>
    );
};

export default ModalAddProducts;
