const initialState = {
    texts: ["hello"]
};

const slideReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'show':
            return state;
        default:
            return state;
    }
}

export default slideReducer;