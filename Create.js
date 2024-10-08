import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const header = { "Access-Control-Allow-Origin": "*" }
    const navigate = useNavigate(); // Declare navigate here

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("checked");
        axios.post("https://66ea980155ad32cda479923d.mockapi.io/crud-project",
            {
                name: name,
                email: email
            },
            { headers: header }
        );
        navigate('/read'); // Use navigate here
    }

    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between m-2'>
                    <h2>Create</h2>
                    <Link to="/read">
                        <button className='btn btn-primary'>Show Data</button></Link>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    </div>


                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Create