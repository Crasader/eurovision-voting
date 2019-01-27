import React, { Component } from 'react'

class Point extends Component {
    render() {
        const { point, value, countries, handleFieldChange } = this.props;

        const pointName = "point_" + point;

        return (
            <div className="form-group">
                <select className="custom-select" name={pointName} value={value} onChange={handleFieldChange} required>
                    <option value="" hidden>{point}</option>
                    {
                        countries.map(country => (
                            <option key={country.id} value={country.id}>{country.name}</option>
                        ))
                    }
                </select>
                <div className="invalid-feedback">Please choose country.</div>
            </div>
        )
    }
}

export default Point