const tagsReducerDefaultState = [];

export default (state = tagsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_TAGS':
            return action.data;
        case 'ADD_TAG':
            return action.data;
        case 'REMOVE_TAG':
                return action.data
        case 'CHECK_TAG':
            return action.data
        default:
            return state;
    }
};