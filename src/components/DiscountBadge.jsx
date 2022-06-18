import React from 'react';

const DiscountBadge = ({discount, ...props}) => {
    return (
        <div className={'discountBadge'} {...props}>
            <span className={'fw-semibold fs-6'}>-{discount}%</span>
        </div>
    );
};

export default DiscountBadge;