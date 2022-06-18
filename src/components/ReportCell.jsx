import React from 'react';

const ReportCell = ({report}) => {
    const onButtonClick = (e) => {
        e.stopPropagation();
        alert(`Началась печать отчёта ${report.name}`);
    }

    return (
        <div className={'reportCell card w-100 px-4 py-2 d-flex flex-row  justify-content-between align-items-center'}
             onClick={onButtonClick}
        >
            <span className={'fw-medium'}>{report.name}</span>
            <button className={'btn btn-outline-secondary'} onClick={onButtonClick}>Напечатать</button>
        </div>
    );
};

export default ReportCell;