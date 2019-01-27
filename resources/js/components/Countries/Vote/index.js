import axios from 'axios'
import React, { Component } from 'react'
import Point from './Point'

class Vote extends Component {
    constructor() {
        super()
        this.state = {
            availableCountriesForVote: [],
            point_1: '',
            point_2: '',
            point_3: '',
            point_4: '',
            point_5: '',
            point_6: '',
            point_7: '',
            point_8: '',
            point_10: '',
            point_12: ''
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.submitVote = this.submitVote.bind(this)
    }

    componentDidUpdate(prevProps) {
        const { votingCountryId, countries } = this.props;

        if ((countries !== prevProps.countries) || (votingCountryId !== prevProps.votingCountryId)) {
            this.resetInputs();
            this.updateAvailableCountriesForVote(votingCountryId);
        }
    }

    resetInputs() {
        this.setState({
            point_1: '',
            point_2: '',
            point_3: '',
            point_4: '',
            point_5: '',
            point_6: '',
            point_7: '',
            point_8: '',
            point_10: '',
            point_12: ''
        })
    }

    updateAvailableCountriesForVote(votingCountryId) {
        const { countries } = this.props;
        
        countries.forEach(function(item) { 
            if (item.id != votingCountryId) {
                item.selected = false;
            } else {
                item.selected = true;
            }
        })

        this.setState({
            availableCountriesForVote: countries
        })
    } 

    handleFieldChange(event) {
        const { [event.target.name]: previousSelectedCountry, availableCountriesForVote } = this.state;

        availableCountriesForVote.forEach(function(item) { 
            if (item.id == event.target.value) {
                item.selected = true;
            } else if (item.id == previousSelectedCountry) {
                item.selected = false; 
            }
        })

        this.setState({
            availableCountriesForVote,
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
                this.resetInputs();
                this.closeVote();
            });
    }

    closeVote() {
        const { refreshCountries } = this.props;

        refreshCountries();
        $('#voteModal').modal('hide')
    }

    render() {
        const { point_1, point_2, point_3,
            point_4, point_5, point_6,
            point_7, point_8, point_10,
            point_12, availableCountriesForVote } = this.state;
        const { votingCountryName } = this.props;

        const points = [
            { id: 1, value: point_1 },
            { id: 2, value: point_2 },
            { id: 3, value: point_3 },
            { id: 4, value: point_4 },
            { id: 5, value: point_5 },
            { id: 6, value: point_6 },
            { id: 7, value: point_7 },
            { id: 8, value: point_8 },
            { id: 10, value: point_10 },
            { id: 12, value: point_12 }
        ];

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
                                        <Point
                                            key={point.id}
                                            point={point.id}
                                            value={point.value}
                                            countries={availableCountriesForVote}
                                            handleFieldChange={this.handleFieldChange}
                                        />
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