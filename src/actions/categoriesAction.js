import axios, {requestConfig}  from '../axios/axios';

//GET
const _getCategories = (data) => {
    return ({
    type: 'GET_CATEGORIES',
    data
})};

export const getCategories = () => {
    return async (dispatch) => {
        return axios.get('blog/categories',requestConfig()).then(result => {
            let {data} = result.data;
            dispatch(_getCategories(data));
        });
    };
};

export const checkExistsCategory = (category) => {
    return async () => {
        return await axios.get(`blog/check-exists-category?category=${category}`,requestConfig()).then(result => {
            return result.data;
        });
    };
};

export const addCategory = (categoryPrm = {
    category: '',
    categoryImg : ''
}) => {
    return () => {
        const category = {
            category: categoryPrm.category,
            categoryImg: categoryPrm.categoryImg
        };
        return axios.post('blog/add-category', category).then(result => {
            return result;
        });
    };
};

export const removeCategory = (categoryId) => {
    return () => {
        return axios.delete(`blog/remove-category?categoryId=${categoryId}`, requestConfig()).then(result => {
            return result;
        });
    };
};
