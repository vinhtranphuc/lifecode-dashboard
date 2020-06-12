import axios,{requestConfig} from '../axios/axios';

//GET_TAGS
const _getTags = (data) => {
    return ({
    type: 'GET_TAGS',
    data
})};

export const getTags = (params = {
    post_id : '',
    category_id : ''
}) => {
    return async (dispatch) => {
        return await axios.get('blog/tags?post_id='+params.post_id+'&category_id='+params.category_id,requestConfig()).then(result => {
            let {data} = result.data;
            dispatch(_getTags(data));
        });
    };
};

export const addTag = (tagObjPrm = {
    tag: ''
}) => {
    return () => {
        const tagObj = {
            tag: tagObjPrm.tag
        };
        return axios.post('blog/add-tag', tagObj).then(result => {
            return result;
        });
    };
};

export const removeTag = (tagIds = []) => {
    return () => {
        const tagsPrm = {
            tagIds: tagIds
        };
        return axios.post('blog/remove-tag', tagsPrm).then(result => {
            return result;
        });
    };
};

// const _checkTag = (data) => {
//     debugger
//     return ({
//         type: 'CHECK_TAG',
//         data 
//     })
// };
// export const checkTag = (tagId) => {
//     return (dispatch) => {
//         dispatch(_checkTag(tagId));
//     };
// };