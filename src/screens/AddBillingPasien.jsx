import React from 'react';
import { Loading } from '../components/Loading';
import { FormAddBillingPasien } from '../containers/FormAddBillingPasien';
import { Appointment } from '../utils/Appointment';

export class AddBillingPasien extends React.Component {
	/** 
	 * TODO: Akses method getDetailPasien(idPasien) pada Appointment dan lakukan add billing state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pasien: {},
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	componentDidMount() {
		Appointment.getDetailPasien(this.props.match.params.id).then(response => {
			if (response.status === 200) {
				this.setState({
					loading: false,
					pasien: response.result
				})
			} else {
				alert('Data tidak ditemukan')
				this.props.history.push('/all-pasien')
			}
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		/** 
		 * TODO: Akses method updateStatusPasien(requestBody) pada Appointment dan lakukan update state. 
		 */
		this.setState({
			loading: true
		})
 		const data = new FormData(e.target)
		const dataJson = {}

		data.forEach((val, key) => {
			if (val !== '' && key !== 'nama') {
				if (key === 'id') {
					dataJson['pasien'] = {
						id: val
					}
				} else {
					dataJson[key] = val
				}
			}
		})
		
		Appointment.addBillingPasien(dataJson).then(response => {
			if (response.status === 200) {
				this.setState({
					loading: false,
				})
				alert(`Sukses add billing pasien ${this.state.pasien.nama}`)
				this.props.history.push('/all-pasien')
			} else {
				this.setState({
					loading: false
				})
				alert(`Gagal add billing pasien ${this.state.pasien.nama}`)
			}
		})
	}

	render() {
		var tanggalTagihan = new Date(Date.now());
		var month = '' + (tanggalTagihan.getMonth() + 1);
		var day = '' + tanggalTagihan.getDate();
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		tanggalTagihan = [tanggalTagihan.getFullYear(), month, day].join('-'); 
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<FormAddBillingPasien pasien={this.state.pasien} tanggalTagihan={tanggalTagihan} onSubmit={this.handleFormSubmit} />
			)
		}
	}
}