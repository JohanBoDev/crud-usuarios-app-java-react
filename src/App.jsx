import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { getUsers } from "./services/api"; // Importar función para obtener usuarios
import "./App.css";

const App = () => {
    const [users, setUsers] = useState([]); // Estado para los usuarios
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers(); // Cargar usuarios al inicio
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    return (
        <div className="container">
            <h1>CRUD de Usuarios</h1>
            <UserForm selectedUser={selectedUser} onSave={fetchUsers} /> {/* Pasar fetchUsers para actualizar */}
            <UserList users={users} onEdit={setSelectedUser} onDelete={fetchUsers} /> {/* Pasar fetchUsers a UserList */}
        </div>
    );
};

export default App;
