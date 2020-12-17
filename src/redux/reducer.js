const initialState = {
    movies:[{"Title":"The Godfather","Year":"1972","imdbID":"tt0068646","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"The Godfather: Part II","Year":"1974","imdbID":"tt0071562","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
    {"Title":"The Godfather: Part III","Year":"1990","imdbID":"tt0099674","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg"},{"Title":"The Godfather Trilogy: 1901-1980","Year":"1992","imdbID":"tt0150742","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjk5ODZjYmMtYTJjNy00MTU2LWI5OTYtYTg5YjFlMDk3ZjI0XkEyXkFqcGdeQXVyODAyNDE3Mw@@._V1_SX300.jpg"},
    {"Title":"Godfather of Harlem","Year":"2019–","imdbID":"tt8080122","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjkyNDA0MzItYmYyOC00NWQ3LTkwNzUtM2RlNGJkNzc2ZGI5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"},{"Title":"Miracles: The Canton Godfather","Year":"1989","imdbID":"tt0098019","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BY2VhY2NkYmUtYTEwOC00OTdhLWFhNDEtMDZkNDg0YWJhMTc5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
    {"Title":"The Godfather Saga","Year":"1977","imdbID":"tt0809488","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNzk3NmZmMjgtMjA4NS00MjdkLTlkZmMtZGFkMDAyNWU4NDdlXkEyXkFqcGdeQXVyODAyNDE3Mw@@._V1_SX300.jpg"},{"Title":"The Godfather","Year":"2006","imdbID":"tt0442674","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BMTQyNTE4NzMzNF5BMl5BanBnXkFtZTgwMDgzNTY3MDE@._V1_SX300.jpg"},{"Title":"Godfather","Year":"1991","imdbID":"tt0353496","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTkyYzc5MGEtYTBiYS00ZmYyLThlZWUtOWY3ZWE4ZDhlN2MzXkEyXkFqcGdeQXVyMjM0ODk5MDU@._V1_SX300.jpg"},{"Title":"Disco Godfather","Year":"1979","imdbID":"tt0074412","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU5MzAyMTY1Ml5BMl5BanBnXkFtZTgwNzA2MjI4MzE@._V1_SX300.jpg"}],
    searchLine:'',
    listMovies:[],
    listPage:{
        title:'Новый список',
        movies:[]
    }
}

export default function reducer( state = initialState, action){

    if(action.type === "SEARCH_LINE_HANDLER"){
        const searchLine = action.payload.input
        console.log("state",searchLine)
        return{...state, searchLine:searchLine}
    }
    if(action.type === "ADD_TO_LIST_PAGE"){
        const listMovies = state.movies.find((el)=> el.imdbID === action.payload.id)
        console.log("state", state)
        return{...state, listMovies: [...state.listMovies, listMovies], listPage:{...state.listPage, movies:[...state.listPage.movies, listMovies.imdbID]}}
    }
    if(action.type === "REMOVE_LIST_MOVIE"){
        const newListMovies = state.listMovies.filter((el)=> el.imdbID !== action.payload)
        console.log('del', newListMovies)
        return{...state, listMovies:newListMovies}
    }
    if(action.type === "ADD_NAME_INPUT"){
        const nameList = action.payload
        console.log('namelist', nameList)
        return{...state, listPage:{...state.listPage, title:nameList}}
    }


    return state
}