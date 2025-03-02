import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import "../App.css";

const UserList = ({ users, onEdit, onDelete }) => {
    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
            await deleteUser(id);
            onDelete(); // Llamar a la función para actualizar la lista
        }
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            {users.length === 0 ? (
                <p>No hay usuarios en la base de datos.</p>
            ) : (
                <ul className="user-list">
                    {users.map(user => (
                        <li key={user.id} className="user-item">
                            <span>{user.nombre} - {user.correo}</span>
                            <div className="button-group">
                                <button className="edit-btn" onClick={() => onEdit(user)}>✏️ Editar</button>
                                <button className="delete-btn" onClick={() => handleDelete(user.id)}>❌ Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
