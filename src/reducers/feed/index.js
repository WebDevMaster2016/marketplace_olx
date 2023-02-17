const feedReducer = (state=[], {type, payload}) => {
    if (type === 'FEED_ADD') {
        return [...state, ...payload]
    }
    if(type === 'FEED_CLEAR') {
        return []
    }
    return state
}

export default feedReducer;