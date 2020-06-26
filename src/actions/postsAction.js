import axios, {requestConfig} from '../axios/axios';

// POSTS
const _getPosts = (data) => {
    return ({
    type: 'GET_POSTS',
    data
})};

export const getPosts = (params = {
    page : '',
    records_no : ''
}) => {
    return async (dispatch) => {
        const result = await axios.get('blog/posts?page='+params.page+'&records_no='+params.records_no,requestConfig());
        let {data} = result.data;
        dispatch(_getPosts(data));
    };
};

// HOT POSTS
const _getHotPosts = (data) => {
    return ({
    type: 'GET_HOT_POSTS',
    data
})};

export const getHotPosts = () => {
    return async (dispatch) => {
        const result = await axios.get('blog/hot-posts',requestConfig());
        let {data} = result.data;
        dispatch(_getHotPosts(data));
    };
};

// RECENT POSTS
const _getRecentPosts = (data) => {
    return ({
    type: 'GET_RECENT_POSTS',
    data
})};

export const getRecentPosts = () => {
    return async (dispatch) => {
        const result = await axios.get('blog/recent-posts',requestConfig());
        let {data} = result.data;
        dispatch(_getRecentPosts(data));
    };
};

// OLD POSTS
const _getOldPosts = (data) => {
    return ({
    type: 'GET_OLD_POSTS',
    data
})};

export const getOldPosts = (numberOfPosts) => {
    return async (dispatch) => {
        const result = await axios.get(`blog/old-posts?records_no=${numberOfPosts}`,requestConfig());
        let {data} = result.data;
        dispatch(_getOldPosts(data));
    };
};

// POPULAR_POSTS
const _getPopularPosts = (data) => {
    return ({
    type: 'GET_POPULAR_POSTS',
    data
})};

export const getPopularPosts = () => {
    return async (dispatch) => {
        const result = await axios.get('blog/popular-posts',requestConfig());
        let {data} = result.data;
        dispatch(_getPopularPosts(data));
    };
};

// POSTS BY CATEGORY
const _getPostsByCategory = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY',
    data
})};

export const getPostsByCategory = (params = {
    category_id : '',
    records_no : ''
}) => {
    return async (dispatch) => {
        const result = await axios.get(`blog/posts?category_id=${params.category_id}&records_no=${params.records_no}`,requestConfig());
        let {data} = result.data;
        dispatch(_getPostsByCategory(data));
    };
};

// POSTS BY CATEGORY 1
const _getPostsByCategory1_3R = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY_1_3R',
    data
})};

const _getPostsByCategory1_4R = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY_1_4R',
    data
})};

export const getPostsByCategory1 = (params = {
    records_no : '',
    page : ''
}) => {
    return async (dispatch) => {
        const CATEGORY_ID = 1;
        const result = await axios.get(`blog/posts?category_id=${CATEGORY_ID}&page=${params.page}&records_no=${params.records_no}`,requestConfig());
        let {data} = result.data;
        if(parseInt(params.records_no) === 3) {
            dispatch(_getPostsByCategory1_3R(data));
            return;
        }
        if(parseInt(params.records_no) === 4) {
            dispatch(_getPostsByCategory1_4R(data));
            return;
        }
    };
};

// POSTS BY CATEGORY 2
const _getPostsByCategory2_3R = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY_2_3R',
    data
})};
const _getPostsByCategory2_4R = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY_2_4R',
    data
})};

export const getPostsByCategory2 = (params = {
    records_no : '',
    page : ''
}) => {
    return async (dispatch) => {
        const CATEGORY_ID = 2;
        const result = await axios.get(`blog/posts?category_id=${CATEGORY_ID}&page=${params.page}&records_no=${params.records_no}`,requestConfig());
        let {data} = result.data;
        if(parseInt(params.records_no) === 3) {
            dispatch(_getPostsByCategory2_3R(data));
            return;
        }
        if(parseInt(params.records_no) === 4) {
            dispatch(_getPostsByCategory2_4R(data));
            return;
        }
    };
};

// POSTS BY TYPE 3
const _getPostsByCategory3_3R = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY_3_3R',
    data
})};
const _getPostsByCategory3_4R = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY_3_4R',
    data
})};

export const getPostsByCategory3 = (params = {
    records_no : '',
    page : ''
}) => {
    return async (dispatch) => {
        const CATEGORY_ID = 3;
        const result = await axios.get(`blog/posts?category_id=${CATEGORY_ID}&page=${params.page}&records_no=${params.records_no}`,requestConfig());
        let {data} = result.data;
        if(parseInt(params.records_no) === 3) {
            dispatch(_getPostsByCategory3_3R(data));
            return;
        }
        if(parseInt(params.records_no) === 4) {
            dispatch(_getPostsByCategory3_4R(data));
            return;
        }
    };
};

// POSTS BY TYPE 4
const _getPostsByCategory4_3R = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY_4_3R',
    data
})};
const _getPostsByCategory4_4R = (data) => {
    return ({
    type: 'GET_POSTS_BY_CATEGORY_4_4R',
    data
})};
export const getPostsByCategory4 = (params = {
    records_no : '',
    page : ''
}) => {
    return async (dispatch) => {
        const CATEGORY_ID = 4;
        const result = await axios.get(`blog/posts?category_id=${CATEGORY_ID}&page=${params.page}&records_no=${params.records_no}`,requestConfig());
        let {data} = result.data;
        if(parseInt(params.records_no) === 3) {
            dispatch(_getPostsByCategory4_3R(data));
            return;
        }
        if(parseInt(params.records_no) === 4) {
            dispatch(_getPostsByCategory4_4R(data));
            return;
        }
    };
};

// POST BY POST_ID
const _getPostByPostId = (data) => {
    return ({
    type: 'GET_POST_POST_ID',
    data
})};

export const getPostByPostId = (params = {
    post_id : ''
}) => {
    return async (dispatch) => {
        const result = await axios.get('blog/post/'+params.post_id,requestConfig());
        let {data} = result.data;
        dispatch(_getPostByPostId(data));
        return result;
    };
};

export const createPost = (postPrm) => {
    return async () => {
        return await axios.post('blog/create-post',postPrm,requestConfig()).then(result => {
            return result;
        });
    };
};

export const editPost = (postPrm) => {
    return async () => {
        return await axios.post('blog/edit-post',postPrm,requestConfig()).then(result => {
            return result;
        });
    };
};

export const deletePost = (params = {
    post_id : ''
}) => {
    return async (dispatch) => {
        const result = await axios.delete('blog/delete-post?postId='+params.post_id,requestConfig());
        return result;
    };
};