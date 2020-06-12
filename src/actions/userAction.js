import axios, {requestConfig} from '../axios/axios';

//LOGIN
const _login = (data) => {
    return ({
    type: 'ACCESS_TOKEN',
    data
})};

export const login = (loginRequest) => {
    return (dispatch) => {
        let param = JSON.stringify(loginRequest);
        return axios.post('/auth/signin',param, requestConfig()).then(result => {
            let data = result.data;
            dispatch(_login(data));
        });
    };
};

//GET_CURRENT_USER
const _getCurrentUser = (data) => {
    return ({
    type: 'GET_CURRENT_USER',
    data
})};

export const getCurrentUser=()=>{
    return (dispatch) => {
        return axios.get('/users/me',requestConfig()).then(result => {
            let data = result.data;
            dispatch(_getCurrentUser(data));
        });
    };
}

const _clearCurrentUser = (data) => {
    return ({
    type: 'GET_CURRENT_USER',
    data
})};

export const clearCurrentUser=()=>{
    return (dispatch) => {
        return dispatch(_clearCurrentUser(null));
    };
}