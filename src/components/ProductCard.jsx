import React from 'react';
import DiscountBadge from "./DiscountBadge";

const ProductCard = ({product, hideButton = false, ...props}) => {
    const onButtonClick = (e) => {
        e.stopPropagation();
        console.log('click');
    }

    const discount = Boolean(product.discount);
    const price = Math.round(product?.price - product.price * product.discount / 100);

    return (
        <div className={'productCard rounded col mb-5'} {...props}>
            <div className={'position-relative'}>
                <img className={'w-100 rounded'} style={{height: 260}}
                     src={product?.photo_url || 'https://richsmile.ru/images/not-found.png'} alt={product?.name}
                />
                {discount && <DiscountBadge discount={product.discount} style={product.discountColor ? {backgroundColor: product.discountColor} : {}}/>}
            </div>
            <h5 className={'fs-4 fw-semibold mt-3 mb-0'}>
                {price || 0} ₽
                {discount && <span className={'ps-2 fw-normal text-secondary'}><del>{product.price} ₽</del></span>}
            </h5>
            <span className={'fs-6 text-truncate'}>{product?.name || 'Название товара'}</span>
            {
                !hideButton && <button className={'btn btn-primary w-100 py-2 mt-3'} onClick={onButtonClick}>В корзину</button>
            }
        </div>
    );
};

export default ProductCard;