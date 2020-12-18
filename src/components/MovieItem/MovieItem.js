import React, { Component } from 'react';
import './MovieItem.css';
import store from '../../redux/store'

class MovieItem extends Component {
    addToListPage = (id) =>{
        store.dispatch({
            type:"ADD_TO_LIST_PAGE",
            payload:{id:id}
        })
        console.log('movieItem',this.props)
    }

    render() {
        const { Title, Year, Poster, imdbID, disabled } = this.props;
        console.log("disabled",disabled)
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button
                        onClick={() => {this.addToListPage(imdbID)}}
                        type="button"
                        className="movie-item__add-button"
                        disabled={disabled}
                    >
                        Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;