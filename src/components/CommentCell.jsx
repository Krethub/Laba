import React from 'react';

const CommentCell = ({comment}) => {
    return (
        <div className={'d-flex py-3'}>
            <img className={'me-3 rounded-circle'}
                width={56} height={56}
                 src={'https://richsmile.ru/images/not-found.png'} alt={comment.name}
            />
            <div>
                <span className={'fs-6 fw-semibold'}>{comment.name}</span>
                <p className={'fs-6 fw-normal mb-0'}>{comment.body}</p>
            </div>
        </div>
    );
};

export default CommentCell;