import { useState, useEffect } from 'react';

const Pagination = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        return fetch('https://dummyjson.com/products?limit=10', { method: 'GET' }).then((res) => res.json());
    }

    useEffect(() => {
        fetchData().then((data) => { 
            setData(data) 
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}

export default Pagination;