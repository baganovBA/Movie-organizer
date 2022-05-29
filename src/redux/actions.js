export function searchLineHandler(input){
    return{
        type:"SEARCH_LINE_HANDLER",
        payload: {input:input}
    }
}

export function removeMovie(id){
    return{
        type:"REMOVE_LIST_MOVIE",
        payload: id
    }

}

export function nameList(name){
    return{
        type:"ADD_NAMELIST_HANDLER",
        payload:name
    }
}

export function getSerchData({searchLine}){
    if(!searchLine){
alert('tapilmadi')
console.log('tapilmadi')
    }
    else{
    return function(dispatch){
        

            console.log('tapildi')
            fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=a1322b8e`)
            .then(promise => promise.json())
            .then((data)=>  {dispatch(addGetMovies(data.Search))})
        }
    
}}

function addGetMovies(data){
    console.log('getMovies',data)
    return{
        type:"ADD_GET_MOVIES",
        payload: data
    }
}