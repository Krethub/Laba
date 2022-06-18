import React from 'react';
import {ReportCell} from "../components";

const ReportsPage = () => {
    const reports = [
        {
            id: 1,
            name: '10.01.22-12.03.22.xlsx',
        },
        {
            id: 2,
            name: '16.03.22-01.05.22.xlsx',
        },
        {
            id: 3,
            name: '01.01.22-16.05.22.xlsx',
        },
        {
            id: 4,
            name: '26.02.22-01.03.22.xlsx',
        }
    ];

    return (
        <>
            <main className={'container-xxl pt-5 pb-5'}>
                <h1 className={'fs-1 fw-semibold mb-4'}>Скачать отчёт</h1>
                <div className={'d-flex flex-column gap-3'}>
                    {
                        reports.map(report => <ReportCell key={report.id} report={report}/>)
                    }
                </div>
            </main>
        </>
    );
};

export default ReportsPage;