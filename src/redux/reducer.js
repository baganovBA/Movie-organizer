const initialState = {
    movies:[],
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
        console.log("state", state,"add", listMovies)
        return{...state,
             listMovies: [...state.listMovies, listMovies],
             listPage:{...state.listPage, movies:[...state.listPage.movies, listMovies.imdbID]
            }}
    }
    if(action.type === "REMOVE_LIST_MOVIE"){
        const newListMovies = state.listMovies.filter((el)=> el.imdbID !== action.payload)
        console.log('del', newListMovies)
        return{...state, listMovies:newListMovies, listPage:{...state.listPage, movies:[...newListMovies.map(el=>el.imdbID)]} }
    }
    if(action.type === "ADD_NAMELIST_HANDLER"){
        const nameList = action.payload
        console.log('namelist', nameList)
        return{...state, listPage:{...state.listPage, title:nameList}}
    }
    if(action.type === 'ADD_GET_MOVIES'){
        const movies = action.payload
        return {...state, movies:movies}
    }


    return state
}