const reducer = (state = {
    list :[]
    
},action) => {
    const {type ,data} = action;
    switch (type) {
        case 'CHANGE_LIST_DATA':
        return {
            list:data.data
        }
        default:
        return state;
    }
}

export default reducer
