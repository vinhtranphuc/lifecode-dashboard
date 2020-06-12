import { combineReducers } from "redux";
import {
        Posts,
        HotPosts,
        PopularPosts,
        RecentPosts,
        PostsByCategory,
        PostsByCategory1_3R,
        PostsByCategory2_3R,
        PostsByCategory3_3R,
        PostsByCategory4_3R,
        PostsByCategory1_4R,
        PostsByCategory2_4R,
        PostsByCategory3_4R,
        PostsByCategory4_4R,
        OldPosts,
        PostByPostId
    } from './postsReducer';
import Categories from './categoriesReducer';
import Tags from './tagsReducer';
import {
        AccessToken,
        CurrentUser
    } from './userReducer';

const allReducers = combineReducers({
    categories:Categories,
    tags: Tags,
    popularPosts: PopularPosts,
    posts: Posts,
    hotPosts: HotPosts,
    recentPosts: RecentPosts,
    postsByCategory:PostsByCategory,
    postsByCategory1_3R: PostsByCategory1_3R,
    postsByCategory2_3R: PostsByCategory2_3R,
    postsByCategory3_3R: PostsByCategory3_3R,
    postsByCategory4_3R: PostsByCategory4_3R,
    postsByCategory1_4R: PostsByCategory1_4R,
    postsByCategory2_4R: PostsByCategory2_4R,
    postsByCategory3_4R: PostsByCategory3_4R,
    postsByCategory4_4R: PostsByCategory4_4R,
    oldPosts:OldPosts,
    postByPostId: PostByPostId,
    accessToken: AccessToken,
    currentUser: CurrentUser
});

export default allReducers;