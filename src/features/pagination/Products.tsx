const Products = (props: any) => {
    const { data, loading } = props;

    if (loading) {
        return <p style={{ textAlign: 'center' }}>Loading...</p>
    }
    return (
        <div className="box-wrapper">
            {
                data.map((val: any) => {
                    return (
                        <div className="box">
                            <p>{val.title}</p>
                            <p>{val.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;