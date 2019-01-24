import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ContriesList extends Component {
	constructor() {
		super()
		this.state = {
			contries: []
		}
	}

	componentDidMount() {
		axios.get('/api/contries/voteStatus').then(response => {
			this.setState({
				contries: response.data
			})
			console.log(response.data);
		})
	}

	render() {
		const { contries } = this.state
		return (
			<div className='container py-4'>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<div className='card'>
							<div className='card-header'>Contries</div>
							<div className='card-body'>
								<ul className='list-group list-group-flush'>
									{contries.length != 0 ? 
										contries.map(country => (
											(!country.has_voted ? 
												<Link
													className='list-group-item list-group-item-action list-group-item-success d-flex justify-content-between align-items-center'
													to={`/vote/${country.id}`}
													key={country.id}
												>
													{country.name}
												</Link>
											:
												<div
													className='list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center'
													key={country.id}
												>
													{country.name}
												</div>
											)
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
				</div>
			</div>
		)
	}
}

export default ContriesList