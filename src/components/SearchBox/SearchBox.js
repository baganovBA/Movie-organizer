import React, { Component } from 'react';
import './SearchBox.css';
import {connect} from 'react-redux'
import { getSerchData, searchLineHandler } from '../../redux/actions';

class SearchBox extends Component {

    // state={
    //     searchLine:''
    // }
   
    searchLineChangeHandler = (e) => {
        e.preventDefault()
        this.props.searchLineHandler(e.target.value)
        console.log(e.target.value)
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    render() {
        console.log(this.props)
        const { searchLine } = this.props;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={() => {this.props.getSerchData({searchLine})}}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
const mapStateToProps = (state) =>{
    return{
        searchLine: state.searchLine
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        searchLineHandler: (e) => dispatch(searchLineHandler(e)),
        getSerchData:(serchLine) => dispatch(getSerchData(serchLine))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);