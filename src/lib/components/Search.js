import PropTypes from 'prop-types';
import React from "react";

const searchContainer = {
    width: '250px',
    display: 'inline-block',
    marginRight: '75px'
};

const searchField = {
    display: 'block',
    width: '100%',
    height: '34px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    color: '#555555',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #ccc',
    borderRadius: '3px',
    WebkitBoxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
    boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
    WebkitTransition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    OTransition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s'
}




const Search = (props) => {

    const clearSearchEntry = () => {
        props.onSearchChange("");
    }

    const searchValueUpdated = (e) => {
        props.onSearchChange(e.target.value);
        
        // Filter the array and send it to callback
        let filteredArray = props.data.filter(item => Object.keys(item).some((key) => {
            return item[key] && item[key].toString().toLowerCase().includes(e.target.value.toLowerCase())
        }))
        props.filteredData(filteredArray);

    }

    return(
        <div style={searchContainer}>
                <input type='search' value={props.searchText}
                                style={searchField}
                                onChange={searchValueUpdated}
                                className="search-field"
                                placeholder="Search..."
                />
                {props.searchText.length > 0 ? <span className="clear-icon glyphicon glyphicon-remove-circle" onClick={clearSearchEntry} /> : ""}
        </div>
    )
}

Search.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    filteredData: PropTypes.func,
    data: PropTypes.array
}

export default Search;
