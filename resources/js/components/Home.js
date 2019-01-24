import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Results extends Component {

    render() {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Home</div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <Link
                                        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                        to={`/contries`}
                                    >
                                        Contries
                                    </Link>
                                    <Link
                                        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                        to={`/results`}
                                    >
                                        Results
                                    </Link>
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