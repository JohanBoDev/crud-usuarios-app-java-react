import { useState, useEffect } from "react";
import { createUser, updateUser } from "../services/api";
import "../App.css";

const UserForm = ({ selectedUser, onSave }) => {
    const [user, setUser] = useState({ nombre: "", correo: "", edad: "" });

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.id) {
            await updateUser(user.id, user);
        } else {
            await createUser(user);
        }
        onSave(); // Llamar a la función para actualizar la lista
        setUser({ nombre: "", correo: "", edad: "" }); // Limpiar formulario
    };

    return (
        <div>
            <h2>{user.id ? "Editar Usuario" : "Agregar Usuario"}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={user.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo"
                    value={user.correo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="edad"
                    placeholder="Edad"
                    value={user.edad}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{user.id ? "Actualizar" : "Guardar"}</button>
            </form>
        </div>
    );
};

export default UserForm;
