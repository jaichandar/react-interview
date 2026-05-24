import { useMemo } from "react";

const Pages = (props: any) => {
    const { pages, selectedPage, onClick, setPage } = props;

    const _pages = useMemo(() => {
        const pageArray = [];
        for (let i = 1; i <= pages; i++) {
            pageArray.push(i);
        }
        return pageArray;
    }, [pages]);

    const handleChange = (type: any) => {

        if (type === 'increment' && selectedPage === pages) {
            return;
        } 

        if (type === 'decrement' && selectedPage === 1) {
            return;
        }

        if (type === 'increment') {
            setPage((prev: any) => prev + 1)
        } else {
            setPage((prev: any) => prev - 1);
        }
    }

    return (
        <>
            <button className='left' onClick={() => handleChange('decrement')}>{'<'}</button>
            {_pages.map((page) => {
                return (
                    <button
                        key={page}
                        style={page === selectedPage ? { background: 'orange' } : {}}
                        onClick={() => onClick(page)}
                    >
                        {page}
                    </button>
                )
            })}
            <button className='right' onClick={() => handleChange('increment')}>{'>'}</button>
        </>
    )
}

export default Pages;