import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./UserList.css";
import { getUsers, deleteUser} from "../services/user";

const UserList = () => {
    const [users,setUsers] = useState([]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [UserToEdit, setUserToEdit] = useState(null);

    const WEBURL = process.env.REACT_APP_API_URL
    const ITEMS_PER_PAGE = 5;
    const token = localStorage.getItem("token");

    useEffect (() => {
        handleUsers(token);
    },[]);

    const handleEditUsers = (user) => {
      setUserToEdit(user);
      setIsEditModalOpen(true);
    };

    const handleUsers = async (token) => {
        const response = await getUsers(token);
        setUsers(response.data.users);
    }

    const handleDeleteUser = async (id) => {
        const response = await deleteUser(token,id);
        console.log(response);
    }
    return (
     
        <div className="container-user-list">
        <h1>LISTA DE USUARIOS</h1>
        <div className="btn-add-container">
        </div>
        <div className="header-row-user-list">
        <b>Nombre</b>
        <b>Direccion</b>
        <b>Correo</b>
        <b>Cedula</b>
        <b>Telefono</b>
        <b>Tipo</b>
        <b>Imagen</b>
        <b>Acciones</b>
        </div>
        

        <div className="container-users">
        {users.map((user) => (
            <div className="user" key={user.id}>

            <div>{user.nombreUsuario} {user.nombreUsuarioS} {user.apellidoUsuario} {user.nombreUsuarioS}</div>
            <div>{user.direccionUsuario}</div>
            <div>{user.correoUsuario}</div>
            <div>{user.cedulaUsuario}</div>
            <div>{user.telefonoUsuario}</div>
            <div>{user.categoriaUsuario}</div>
            <div>
              <img
                src={user.imagenUsuario}
                alt={user.nombreUsuario}
                className="user-image-list"
              />
            </div>
            <div className="actions">
            <FontAwesomeIcon icon={faPenToSquare} className="edit" onClick={() => handleEditUsers(user)} />
            <FontAwesomeIcon icon={faTrash} className="delete" onClick={() => handleDeleteUser(user.id)}/>
            </div>
            </div>
        ))}
          </div>

      </div>
    );
};

export default UserList;