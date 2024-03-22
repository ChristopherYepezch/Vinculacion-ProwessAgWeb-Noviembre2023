import React from "react";
import { useParams, Link } from "react-router-dom";
import './SaleDetailsPage.css';

const SaleDetailsPage = () => {
  const { id } = useParams();
  // Aquí normalmente obtendrías los detalles de la venta con el id dado

  // Para este ejemplo, crearemos datos de venta ficticios
  const sale = {
    id: id,
    customer: "Customer A",
    amount: 100,
    date: "2023-08-22",
    products: [
      { id: 1, image: "https://www.bupasalud.com/sites/default/files/inline-images/fuji-red.jpg", name: "Manzanas", description: "Manzanas frescas", price: 50, quantity: 2, seller: "Seller X" },
      { id: 2, image: "https://farmaciaribera.es/blog/wp-content/uploads/2020/01/Beneficios-de-comer-peras-1024x680.jpg", name: "Peras", description: "Peras Dulses", price: 30, quantity: 3, seller: "Seller Y" },
      { id: 3, image: "https://www.bupasalud.com/sites/default/files/inline-images/fuji-red.jpg", name: "Manzanas", description: "Manzanas frescas", price: 50, quantity: 2, seller: "Seller Z" },
    ],
  };

  return (
    <div>
      <h1>Detalles de la Venta</h1>
      <div className="div-customer">
        <div>
          <strong>Customer:</strong> {sale.customer}
        </div>
        <div className="product-grid">
          <h2>Productos</h2>
          <div className="product-header-container">
            <div className="product-header">
              <div>Imagen</div>
              <div>Nombre</div>
              <div>Descripción</div>
              <div>Precio</div>
              <div>Cantidad</div>
              <div>Vendedor</div>
            </div>
            {sale.products.map((product, index) => (
              <div key={index} className="product-item-sale">
                <div><img className="img-product-sale" src={product.image} alt={product.name} /></div>
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>${product.price}</div>
                <div>{product.quantity}</div>
                <div>{product.seller}</div>
              </div>
            ))}
            <div className="final-data-sale">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <strong>Subtotal:</strong> ${sale.amount}
              </div>
            </div>
            <div className="final-data-sale">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <strong>Total:</strong> ${sale.amount}
              </div>
            </div>
            <div className="final-data-sale">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <strong>Fecha:</strong> ${sale.date}
              </div>
            </div>
          </div>
        </div>
        <div className="div-buttons">
          <Link to="/sales" className="btn btn-primary">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SaleDetailsPage;
