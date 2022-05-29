import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ],
        getData:{},
        renderFilms:[]
    }
    componentDidMount() {
        this.getListFromAlgoritmika()
    }
    
    
    getListFromAlgoritmika = () =>{
        const id = this.props.match.params;
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id.id}`)
        .then(promise => promise.json())
        .then(data => {
            this.setState({getData:data}, () => this.getData())
            console.log(data)
            return data
        })
    }
    
    
    getData = () =>{
       this.state.getData.movies.forEach( async (element)=> {
           const data = await fetch(`http://www.omdbapi.com/?i=${element}&apikey=a1322b8e`)
           const json = await data.json()
           console.log(json)
           await this.setState({renderFilms:[...this.state.renderFilms, json]})
       })
     
    }
        
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.getData.title}</h1>
                <ul>
                    {this.state.renderFilms.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank" rel="noopener noreferrer">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;