import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault(); // Prevent form submission and page reload
        axios.put(`https://66ea980155ad32cda479923d.mockapi.io/crud-project/${id}`, {
            name: name,
            email: email,
        })
        .then((response) => {
            navigate("/read"); // Navigate to the 'read' route after successful update
        })
        .catch((error) => {
            console.error("There was an error updating the record!", error);
        });
    };

    return (
        <>
             <div className='d-flex justify-content-between m-2'>
                    <h2>Update</h2>
                    <Link to="/read">
                        <button className='btn btn-primary'>Back</button></Link>
                </div>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </>
    );
};

export default Update;
