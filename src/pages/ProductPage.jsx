import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {CommentCell, Placeholder} from "../components";

const ProductPage = ({products}) => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [id])

    useEffect(() => {
        let start = 0;
        let end = products.length - 1;

        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
            if (products[middle].id === Number(id)) {
                setCurrentProduct(products[middle]);
                break;
            }

            products[middle].id < Number(id) ? start = middle + 1 : end = middle - 1;
        }

        setIsLoading(false);
    }, [products, id]);

    if (isLoading) return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    if (!currentProduct) return (
        <Placeholder title={'Не удалось получить данные о товаре'}
                     actions={<Link to={'/'} className={'btn btn-primary btn-lg d-block px-5 fs-6'}>Перейти в
                         каталог</Link>}
        />
    )

    return (
        <main className={'container-xxl pt-5 pb-5'}>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" className={'text-decoration-none'}>Каталог</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{currentProduct?.name}</li>
                </ol>
            </nav>
            <h1 className={'fs-1 fw-semibold mb-4'}>{currentProduct?.name}</h1>
            <div className={'d-flex gap-5 flex-wrap'}>
                <img className={'productPage-img rounded'}
                     src={currentProduct?.photo_url || 'https://richsmile.ru/images/not-found.png'}
                     alt={currentProduct?.name}
                />
                <div className={'productPage-info'}>
                    <span className={'fw-bold fs-1 d-block mb-2'}>{currentProduct?.price} ₽</span>
                    <button className={'btn btn-primary btn-lg d-block px-5 fs-6'}>Добавить в корзину</button>
                    <span className={'fs-5 fw-semibold d-block mt-5 mb-1'}>Описание</span>
                    <p className={'fs-6 fw-regular text-secondary'}>{currentProduct?.description}</p>
                </div>
            </div>
            <div>
                <span className={'fs-5 fw-semibold d-block mt-5 mb-2'}>Отзывы</span>
                {
                    Boolean(comments.length)
                        ? comments.map(comment => <CommentCell comment={comment} key={comment.id}/>)
                        : <Placeholder title={'Отзывов ещё нет'} text={'Ваш может стать первым'}/>
                }
            </div>
        </main>
    );
};

export default ProductPage;