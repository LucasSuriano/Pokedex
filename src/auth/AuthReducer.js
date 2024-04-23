export const authReducer = (state={}, action) => {
    switch(action.type){
        case "setName": return {...action.payload}
        case "deleteName": return {user: null}
    }
}