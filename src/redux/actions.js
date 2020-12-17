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
        type:"ADD_NAME_INPUT",
        payload:name
    }
}