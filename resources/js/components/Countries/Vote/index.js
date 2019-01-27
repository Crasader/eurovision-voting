import axios from 'axios'
import React, { Component } from 'react'
import Point from './Point'

class Vote extends Component {
    constructor() {
        super()
        this.state = {
            availableCountriesForVote: [],
            point_1: 0,
            point_2: 0,
            point_3: 0,
            point_4: 0,
            point_5: 0,
            point_6: 0,
            point_7: 0,
            point_8: 0,
            point_10: 0,
            point_12: 0
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.submitVote = this.submitVote.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.countries !== prevProps.countries) {
            this.setState({
                availableCountriesForVote: this.props.countries
            })
        }
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    submitVote() {
        event.preventDefault()
        const { votingCountryId, history } = this.props;
        const { point_1, point_2, point_3,
            point_4, point_5, point_6,
            point_7, point_8, point_10,
            point_12 } = this.state;

        const vote = {
            country_id: votingCountryId,
            point_1: point_1,
            point_2: point_2,
            point_3: point_3,
            point_4: point_4,
            point_5: point_5,
            point_6: point_6,
            point_7: point_7,
            point_8: point_8,
            point_10: point_10,
            point_12: point_12
        }

        axios.post('/api/votes', vote)
        .then(response => {
            this.closeVote();
        });

    }

    closeVote() {
        const { refreshCountries } = this.props;

        refreshCountries();
        $('#voteModal').modal('hide')
    }

    render() {
        const { availableCountriesForVote } = this.state;
        const { votingCountryName } = this.props;

        const points = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

        return (
            <div className="modal fade" id="voteModal" tabIndex="-1" role="dialog" aria-labelledby="voteTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="voteTitle">Vote as {votingCountryName}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.submitVote} className="was-validated">
                            <div className="modal-body">
                                {
                                    points.map(point => (
                                        <Point point={point} countries={availableCountriesForVote} key={point} handleFieldChange={this.handleFieldChange} />
                                    ))
                                }
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary">Save vote</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vote