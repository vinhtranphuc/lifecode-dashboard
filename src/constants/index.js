export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8888/api';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const TIME_SAVE_TOKEN = 'TIME_SAVE_TOKEN';

export const NAME_MIN_LENGTH = 4;
export const NAME_MAX_LENGTH = 40;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 15;

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

export const OAUTH2_REDIRECT_URI = 'http://localhost:3001/oauth2/redirect'

export const GOOGLE_AUTH_URL = 'http://localhost:8888/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = 'http://localhost:8888/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = 'http://localhost:8888/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;