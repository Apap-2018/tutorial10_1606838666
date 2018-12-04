import React from 'react';

export const FormAddBillingPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Billing Status Pasien</h2>
            <input type="hidden" name="id" value={props.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly />
            </div>
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue={props.tanggalTagihan} readOnly />
            </div>
            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan" required />
            </div>
            <button className="btn btn-success" value="submit">Add Billing</button>
        </form>
    )
}