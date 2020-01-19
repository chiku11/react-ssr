const initialState = {
    texts: ["hello"]
};

const slideReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'show':
            console.log('Hello world from reducer');
            return state;
        default:
            return state;
    }
}

export default slideReducer;