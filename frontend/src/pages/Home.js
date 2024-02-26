import React, { useState } from 'react';
import axios from 'axios'; 
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    const [msg, setMsg] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/", {
                data: msg,
            });
            console.log(msg);
            // Redirect to the new component using Link after submitting
            // Here, assuming "/new" is the route to the new component
            // Replace "/new" with your desired route
            // This will render the new component without reloading the page
            // If you want to redirect to a different URL, you can use window.location.href = "/new"
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className='form-container'>
                <h3>Enter the Symptoms in the Below Text Box</h3>
                <form onSubmit={submit} className='form'>
                    <textarea 
                        name="text" 
                        onChange={(e) => {setMsg(e.target.value)}} 
                        cols="80" 
                        rows="15" 
                        placeholder='Symptoms'>
                    </textarea>
                    {/* Use a button inside the Link component */}
                    <Link to="/new">
                        <button type="submit" className='submit'>Submit</button>
                    </Link>
                </form>
            </div>
        </>
    );
}
