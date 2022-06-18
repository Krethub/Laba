import React from 'react';
import ProductCard from "../components/ProductCard";
import {useNavigate} from "react-router-dom";

const Catalog = ({products}) => {
    const navigate = useNavigate();

    const onProductCardClick = (e) => {
        const {id} = e.currentTarget.dataset;
        navigate(`/product/${id}`);
    }

    return (
        <>
            <main className={'container-xxl pt-5 pb-5'}>
                <h1 className={'fs-1 fw-semibold mb-4'}>Каталог</h1>
                <div className={'row'}>
                    {
                        products.map(product =>
                            <ProductCard key={product.id}
                                         product={product}
                                         onClick={onProductCardClick}
                                         data-id={product.id}
                            />)
                    }
                </div>
            </main>
        </>
    );
};

export default Catalog;