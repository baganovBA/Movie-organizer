import React, { Component } from 'react';
import './Favorites.css';
import {connect} from 'react-redux'
import { nameList, removeMovie } from '../../redux/actions';


class Favorites extends Component {
    // state = {
    //     title: 'Новый список',
    //     movies: [
    //         { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //     ]
    // }

    removeListMovies = (id) =>{
        this.props.removeMovie(id)
    }

    nameListHandler = (e) =>{
        this.props.nameList(e.target.value)
        console.log('listInput',e.target.value)
    }

    render() { 
        // console.log('props Favorites', this.props)
        return (
            <div className="favorites">
                <input 
                 className="favorites__name"
                 value={this.props.listPage.title}
                 onChange={(e)=>{this.nameListHandler(e)}}
                  />
                <ul className="favorites__list">
                    {this.props.listMovies.map((item) => {
                        return <li key={item.imdbID}>
                            {item.Title} ({item.Year}) &nbsp;
                            <button onClick={()=>{this.removeListMovies(item.imdbID)}}>Del</button>
                            </li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
        return{
            listMovies: state.listMovies,
            listPage: state.listPage
        }
}
 
const mapDispatchToProps= (dispatch) =>{
    return{
        removeMovie:(id) => dispatch(removeMovie(id)),
        nameList: (input) => dispatch(nameList(input))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Favorites);