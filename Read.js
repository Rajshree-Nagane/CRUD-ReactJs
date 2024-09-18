import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState(''); // State to toggle dark theme

    const getData = () => {
        axios
            .get("https://66ea980155ad32cda479923d.mockapi.io/crud-project")
            .then((res) => {
                setData(res.data);
            });
    };

    const handleDelete = (id) => {
        axios
            .delete(`https://66ea980155ad32cda479923d.mockapi.io/crud-project/${id}`)
            .then(() => {
                getData();
            });
    };

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="form-check form-switch">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    onClick={() => {
                        setTableDark(tabledark === 'table-dark' ? '' : 'table-dark'); // Toggle the class
                    }} 
                />
            </div>
            <div className="d-flex justify-content-between m-2">
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className="btn btn-primary">Add Data</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}> 
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((eachData) => (
                        <tr key={eachData.id}>
                            <th scope="row">{eachData.id}</th>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <td>
                                <Link to="/update">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}
                                    >
                                        Edit
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Read;
