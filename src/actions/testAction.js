import axios,{requestConfig} from '../axios/axios';
import {getPopularPosts} from "../actions/postsAction"

//GET
// const _getTest = (posts) => {
//     return ({
//     type: 'TEST'
// })};

export const getTest = () => {
    return (dispatch) => {
        return axios.delete('blog/test',requestConfig()).then(result => {
            dispatch(getPopularPosts());
        });
    };
};