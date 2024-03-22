import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './SalesPage.css';

const SalesPage = () => {
  const [sales, setSales] = useState([
    { id: 1, customer: "Customer A", amount: 100, date: "2023-08-15", products: ["Product X", "Product Y"] },
    { id: 2, customer: "Customer B", amount: 150, date: "2023-08-16", products: ["Product Z"] },
    { id: 3, customer: "Customer C", amount: 200, date: "2023-08-17", products: ["Product X", "Product Z"] },
  ]);

  return (
    <div>
      <h1>Notas de Venta</h1>
      <ul className="ul-customers">
        {sales.map((sale) => (
          <li className="li-customers" key={sale.id}>
            {/** Cuando esten los servicios */}
            {/**<Link to={`/sale/${sale.id}`}> */}
            <Link to={`/sales:id`}>
              <div>
                <FontAwesomeIcon className="fa-user-customer" icon={faUser} />
              </div>
              <div>
              <div>
                {sale.customer}
                {sale.products.map((product) => (
                  <li className="li-products" key={product.id}>
                    {product}
                  </li>
                ))}
              </div>
              </div>
              <div>
                Total: ${sale.amount}
              </div>
              <div>
                Date: {sale.date}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesPage;
