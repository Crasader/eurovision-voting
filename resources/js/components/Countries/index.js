import axios from 'axios'
import React, { Component } from 'react'
import Vote from './Vote'

class Countries extends Component {
	constructor() {
		super()
		this.state = {
			countries: [],
			votingCountryName: '',
			votingCountryId: 0
		}

		this.fetchCountries = this.fetchCountries.bind(this)
	}

	componentDidMount() {
		this.fetchCountries();
	}

	fetchCountries() {
		axios.get('/api/countries').then(response => {
			this.setState({
				countries: response.data
			})
		});
	}

	voteOpen(countryName, countryId) {
		this.setState({
			votingCountryName: countryName,
			votingCountryId: countryId
		})
		$('#voteModal').modal('show');
	}

	render() {
		const { countries, votingCountryId, votingCountryName } = this.state

		const showContires = countries.length != 0 ? true : false;

		return (
			<div className='container py-4'>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<div className='card'>
							<div className='card-header'>Countries</div>
							<div className='card-body'>
								<ul className='list-group list-group-flush'>
									{showContires ?
										countries.map(country => (
											!country.has_voted ?
												<div
													className='list-group-item list-group-item-action list-group-item-success d-flex justify-content-between align-items-center'
													key={country.id}
													onClick={() => { this.voteOpen(country.name, country.id); }}
												>
													{country.name}
												</div>
												:
												<div
													className='list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center'
													key={country.id}
												>
													{country.name}
												</div>
										))
										:
										<div
											className='list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center'
										>
											Fetching data...
										</div>
									}
								</ul>
							</div>
						</div>
					</div>
					<Vote votingCountryName={votingCountryName} votingCountryId={votingCountryId} countries={countries} refreshCountries={this.fetchCountries} />
				</div>
			</div>
		)
	}
}

export default Countries