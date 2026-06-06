import React from 'react';
import './body.css'

export default function Body() {

    const sampleData = [
        {
            id: "990004234",
            ref: "12345",
            type: "Roll parcel",
            category: "Fulfillment",
            receiver: "Mohammad Shahen",
            phone: "0987654321",
            amount: "SYP 200",
            method: "Syriatel Cash"
        },
        {
            id: "990004234",
            ref: "12345",
            type: "Document",
            category: "My stock",
            receiver: "Mohammad Shahen",
            phone: "0987654321",
            amount: "SYP 200",
            method: "Sham Cash"
        }
    ];

    return (
        <div className='containerStyle'>

            <div className='headerAreaStyle'>
                <h3 className='titleStyle'>Shipments List</h3>
                <span className='badgeStyle'>124</span>
            </div>
            <p className='subtitleStyle'>Shipments we received from your side</p>


            <table className='tableStyle'>
                <thead>
                    <tr className='thRowStyle'>
                        <th className='thStyle'>Shipment No.</th>
                        <th className='thStyle'>Ref No.</th>
                        <th className='thStyle'>Package type</th>
                        <th className='thStyle'>Receiver details</th>
                        <th className='thStyle'>Collection amount</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleData.map((row, index) => (
                        <tr key={index} className='trStyle'>

                            <td
                                className='tdStyle'
                                style={{ color: '#2563eb', fontWeight: '500' }}>
                                {row.id}
                            </td>
                            <td
                                className='tdStyle' style={{ color: '#6b7280' }}>
                                {row.ref}
                            </td>
                            <td className='tdStyle'>
                                <div className='mainTextStyle'>{row.type}</div>
                                <div className='subTextStyle'>{row.category}</div>
                            </td>
                            <td className='tdStyle'>
                                <div className='mainTextStyle'>{row.receiver}</div>
                                <div className='subTextStyle'>{row.phone}</div>
                            </td>
                            <td
                                className='tdStyle'>
                                <div
                                    className='mainTextStyle'>{row.amount}</div>
                                <div
                                    className='subTextStyle' style={{ color: '#b45309', fontWeight: '500' }}>
                                    {row.method}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className='footerStyle'>
                <span className='footerTextStyle'>1 to 2 of 50 records</span>
                <div className='paginationStyle'>
                    <button className='pageButtonStyle'>&lt;</button>
                    <button
                        className='pageButtonStyle' style={{ backgroundColor: '#2563eb', color: '#fff' }}>1</button>
                    <button className='pageButtonStyle'>2</button>
                    <button className='pageButtonStyle'>3</button>
                    <span style={{ padding: '0 4px', color: '#9ca3af' }}>...</span>
                    <button className='pageButtonStyle'>10</button>
                    <button className='pageButtonStyle'>&gt;</button>
                </div>
            </div>
        </div>
    );
}


