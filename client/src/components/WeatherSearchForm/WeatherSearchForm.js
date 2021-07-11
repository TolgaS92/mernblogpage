import React from 'react'

const WeatherSearchForm = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                <input
                onChange={props.handleInputChange}
                value={props.formObject}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search City"
                id="search"
                />
                <button
                onClick={props.handleFormSubmit}
                className="btn btn-warning">
                    Search
                </button>
                </div>
            </form>
        </div>
    )
}

export default WeatherSearchForm;