import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./meet.css";

export default function New() {

    const [data, setData] = useState("");


    // Effect to fetch data from the API
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Make a GET request to the API endpoint
                const response = await axios.get("http://localhost:5000/getdata");

                // Update the state with the fetched data
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                // Handle any errors
                console.error("Error fetching data:", error);
            }
        };
        // Call the fetch data function
        fetchData();
    }, []);

    return (
        <>
            <div className='meet-container'>
                <div>{data}</div>
                <div>
                    <button>
                      <a href="https://meet.google.com/ada-vuxy-ick">Click Here</a>
                      </button>
                </div>
            </div>
        </>
    )
}
