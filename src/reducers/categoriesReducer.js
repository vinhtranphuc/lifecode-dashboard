const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return action.data;
        case 'ADD_CATEGORY':
            return action.data;
        case 'REMOVE_CATEGORY':
                return action.data
        default:
            return state;
    }
};