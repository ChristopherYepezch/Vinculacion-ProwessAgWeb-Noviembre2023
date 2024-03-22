import React, { useEffect, useState } from 'react';
import './VendorsPage.css';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalEditVendor from './ModalEditVendors';
import ModalAddVendor from './ModalAddVendor';

function VendorsPage() {
  const [vendors, setVendors] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false); // Define setShowAddModal
  const [showEditModal, setShowEditModal] = useState(false); // Define showEditModal
  const [editingVendorId, setEditingVendorId] = useState(null); // Define editingVendorId

  const [VendorToEdit, setVendorToEdit] = useState(null);
  const [vendorToUpdate, setVendorToUpdate] = useState(null);


  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterVendor, setFilterVendor] = useState('');
  const [sortCriteria, setSortCriteria] = useState(null);

  const vendorsPerPage = 10;

  const startIndex = (currentPage - 1) * vendorsPerPage;
  const endIndex = startIndex + vendorsPerPage;
  const currentVendors = vendors.slice(startIndex, endIndex);

  const totalPages = Math.ceil(vendors.length / vendorsPerPage);

  useEffect(() => {
    fetch(`http://localhost:5000/fb/vendedor/getSeller`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud al servidor');
        }
        return response.json();
      })
      .then((data) => setVendors(data))
      .catch((error) => console.error('Error al cargar los vendedores', error));
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  const handleDelete = (vendorId) => {
    fetch(`http://localhost:5000/fb/vendedor/deleteSeller/${vendorId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setVendors(vendors.filter((vendor) => vendor.id !== vendorId));
        } else {
          console.error('Error al eliminar el vendedor en el servidor');
        }
      })
      .catch((error) => {
        console.error('Error de red al eliminar el vendedor', error);
      });
  };

  if (sortCriteria) {
    vendors.sort((a, b) => (a[sortCriteria] > b[sortCriteria] ? 1 : -1));
  }

  if (filterVendor) {
    vendors = vendors.filter(
      (vendor) =>
        vendor.pro_nombre.toLowerCase().includes(filterVendor.toLowerCase())
    );
  }

  const handleEditVendor = (vendor) => {
    console.log('Editando vendedor:', vendor); // Agrega esta línea para depurar
    setVendorToEdit(vendor);
    setShowEditModal(true);
  };

  const handleEdit = (editedVendor) => {
    setVendorToUpdate(editedVendor);

  };

  useEffect(() => {
    if (vendorToUpdate) {
      handleUpdateVendor();
    }
  }, [vendorToUpdate]);

  const handleUpdateVendor = () => {
    if (!vendorToUpdate) {
      return;
    }

    console.log('vendorToUpdate:', vendorToUpdate.id);

    fetch(`http://localhost:5000/fb/vendedor/updateSeller/${vendorToUpdate.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorToUpdate),
    })
      .then((response) => {
        if (response.ok) {
          // Actualiza la lista de productos después de la actualización en el backend
          setVendors((prevVendors) =>
            prevVendors.map((vendor) =>
              vendor.id === vendorToUpdate.id ? vendorToUpdate : vendor
            )
          );
          setShowEditModal(false);
        } else {
          console.error('Error al guardar los cambios en el servidor');
        }
      })
      .catch((error) => {
        console.error('Error de red al guardar los cambios', error);
      });
  };

  return (
    <div className="vendors-page">
      <h2>Listado de Vendedores</h2>
      <button
        className="add-vendor-button"
        onClick={() => setShowAddModal(true)}
      >
        Agregar Vendedor
      </button>

      <SearchBar
        searchTerm={searchTerm}
        sortOption={sortOption}
        handleSearch={handleSearch}
        handleSortChange={handleSortChange}
        showPriceOption={false}
        showCategoryOption={false}
      />

    <div>
    <ModalEditVendor
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        VendorToEdit={VendorToEdit} // Make sure `vendorToEdit` has the correct data
        handleEdit={handleEdit}
      />

      </div>

      <div className="vendor-list">
        {currentVendors.map((vendor) => (
          <div key={vendor.id} className="vendor-card">
            
            <h3>{vendor.name}</h3>
            <p>Ciudad: {vendor.city}</p>
            <p>Dirección: {vendor.address}</p>
            <p>Teléfono: {vendor.phoneNumber}</p>
            
            <button
              className="edit-button"
              onClick={() => handleEditVendor(vendor)} // Asegúrate de que `vendor` contenga los datos que necesitas editar
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>

            <a href={`https://wa.me/${vendor.whatsappNumber}`}>
              <button className="whatsapp-button">WhatsApp</button>
            </a>
            
            <button
              className="delete-button"
              onClick={() => handleDelete(vendor.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <span
              key={pageNumber}
              className={`page-number ${
                pageNumber === currentPage ? 'active' : ''
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </span>
          )
        )}
      </div>


      

      <ModalAddVendor
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        handleAddVendor={(newVendor) => {
          console.log('Agregar vendedor', newVendor);
          setShowAddModal(false);
        }}
      />
      
    </div>
  );
}

export default VendorsPage;