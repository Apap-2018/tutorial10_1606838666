import React from 'react';
import { Link } from "react-router-dom";

export const DaftarPasienRow = (props) => {
    const myButtonStyle = {
        marginRight: 5,
        marginLeft: 5
    }
    return (
        <tbody>
            {props.listPasien.map((pasien, index) => {
                return (
                    <tr key={pasien.id}>
                        <td>{index+1}</td>
                        <td>{pasien.nama}</td>
                        <td>{pasien.statusPasien.jenis}</td>
                        <td>
                            <Link to={`/update-pasien/${pasien.id}`} className="btn btn-info" style={myButtonStyle}>Update</Link>
                            <Link to={`/add-billing-pasien/${pasien.id}`} className="btn btn-success" style={myButtonStyle}>Add Billing</Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}