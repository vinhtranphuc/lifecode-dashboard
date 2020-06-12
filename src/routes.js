import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DashboardtLayout from "./components/dashboard_layout";

// Route Views
import Overview from "./components/pages/overview/Overview";
import UserProfile from "./components/pages/user-profile/UserProfile";
import Post from "./components/pages/post/Post";
import Errors from "./components/pages/errors/Errors";
import ComponentsOverview from "./components/pages/components-overview/ComponentsOverview";
import PostManagement from "./components/pages/post-management/PostManagement";
import UserManagement from "./components/pages/user-management/UserManagement";

import HomePosts from "./components/pages/home-posts/HomePosts";
import PublicLayout from "./components/public_layout";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";

export default [
  {
    path: "/",
    exact: true,
    layout: DashboardtLayout,
    component: () => <Redirect to="/overview" />
  },
  {
    path: "/signup",
    isAuth: false,
    layout: PublicLayout,
    component: Signup
  },
  {
    path: "/login",
    isAuth: false,
    layout: PublicLayout,
    component: Login
  },
  {
    path: "/overview",
    isAuth: true,
    layout: DashboardtLayout,
    component: Overview
  },
  {
    path: "/home-posts",
    layout: DashboardtLayout,
    component: HomePosts
  },
  {
    path: "/post/create",
    layout: DashboardtLayout,
    component: Post
  },
  {
    path: "/post/edit/:post_id",
    layout: DashboardtLayout,
    component: Post
  },
  {
    path: "/post-management",
    layout: DashboardtLayout,
    component: PostManagement
  },
  {
    path: "/user-management",
    layout: DashboardtLayout,
    component: UserManagement
  },
  {
    path: "/user-profile",
    layout: DashboardtLayout,
    component: UserProfile
  },
  {
    path: "/errors",
    layout: DashboardtLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DashboardtLayout,
    component: ComponentsOverview
  }
];
