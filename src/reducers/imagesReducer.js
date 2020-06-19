const uriImagesReducerDefaultState = [];
const imagesReducerDefaultState = [];

export const UriImages =(state = uriImagesReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_URI_IMAGES':
            return action.data;
        default:
            return state;
    }
}
const Image = (state = imagesReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_IMAGES':
            return action.data;
        default:
            return state;
    }
}

export default Image;