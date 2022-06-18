import React from 'react';

const Placeholder = ({title, text, actions, ...props}) => {
    return (
        <div className={'w-100 p-5 d-flex flex-column justify-content-center align-items-center text-center'} {...props}>
            <div className={'mb-3'}>
                <span className={'fs-2 fw-semibold mb-2 d-block'}>{title}</span>
                <span className={'fs-6 fw-regular text-secondary'}>{text}</span>
            </div>
            {actions}
        </div>
    );
};

export default Placeholder;