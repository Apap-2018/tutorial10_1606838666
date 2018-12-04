import React from 'react';

export const DaftarDokterRow = (props) => {
    return (
        <tbody>
            {props.listDokter.map((dokter, index) => {
                return (
                    <tr key={dokter.id}>
                        <td>{index+1}</td>
                        <td>{dokter.nama}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}