import { useEffect, useMemo, useState } from 'react';
import Pages from './Pages';
import Products from './Products';
import './style.css';

const Pagination = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const limit = 10;

    const pageCount = useMemo(() => {
        return Math.ceil(total / limit);
    }, [total, limit]);

    const fetchData = (skip: any) => {
        return fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, { method: 'GET' }).then((res) => res.json());
    }

    useEffect(() => {
        const skip = (page - 1) * limit;
        setLoading(true);
        fetchData(skip).then((val) => {
            setLoading(false);
            setData(val.products);
            setTotal(val.total);
        }).catch((err) => { console.log(err) })
    }, [page]);

    return (
        <div className='wrapper'>
            <Products data={data} loading={loading} />
            <div className='btn-wrapper'>
                <Pages
                    pages={pageCount}
                    selectedPage={page}
                    setPage={setPage}
                    onClick={(page: any) => setPage(page)}
                />
            </div>
        </div>
    )
}

export default Pagination;