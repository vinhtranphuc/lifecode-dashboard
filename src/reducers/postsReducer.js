const postsReducerDefaultState = [];

export const Posts = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return action.data;
        default:
            return state;
    }
};

export const HotPosts = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_HOT_POSTS':
            return action.data;
        default:
            return state;
    }
};

export const RecentPosts = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_RECENT_POSTS':
            return action.data;
        default:
            return state;
    }
};

export const PopularPosts = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POPULAR_POSTS':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory1_3R = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY_1_3R':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory2_3R = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY_2_3R':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory3_3R = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY_3_3R':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory4_3R = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY_4_3R':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory1_4R = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY_1_4R':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory2_4R = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY_2_4R':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory3_4R = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY_3_4R':
            return action.data;
        default:
            return state;
    }
};

export const PostsByCategory4_4R = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS_BY_CATEGORY_4_4R':
            return action.data;
        default:
            return state;
    }
};

export const OldPosts = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_OLD_POSTS':
            return action.data;
        default:
            return state;
    }
};

export const PostByPostId = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_POST_POST_ID':
            return action.data;
        default:
            return state;
    }
};
