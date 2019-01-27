import axios from 'axios'
import React, { Component } from 'react'

class Results extends Component {
	constructor() {
		super()
		this.state = {
			countries: []
		}
	}

	componentDidMount() {
		axios.get('/api/countries/results').then(response => {
			this.setState({
				countries: response.data
			})
		})
	}

	render() {
		const { countries } = this.state
		return (
			<div className='container py-4'>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<div className='card'>
							<div className='card-header'>Results</div>
							<div className='card-body'>
								<ul className='list-group list-group-flush'>
									{countries.length != 0 ?
										countries.map(country => (
											<div
												className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
												key={country.id}
											>
												{country.name}
												<span className='badge badge-primary badge-pill'>
													{country.score}
												</span>
											</div>
										))
										:
										<div
											className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
										>
											Fetching data...
										</div>
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Results