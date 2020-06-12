import { ACCESS_TOKEN,TIME_SAVE_TOKEN } from '../constants';
import {clearCurrentUser} from "../actions/userAction";

function isAcceptSaveNewToken(newToken) {
    if(Object.keys(newToken).length <= 0)
        return false;
    let oldToken = localStorage.getItem(ACCESS_TOKEN);
    return oldToken!==newToken.accessToken;
}

export function saveToken (newToken) {
    if(!isAcceptSaveNewToken(newToken)) return;
    localStorage.setItem(ACCESS_TOKEN, newToken.accessToken);
    localStorage.setItem(TIME_SAVE_TOKEN, new Date().getTime());
}

export function clearToken () {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(TIME_SAVE_TOKEN);
}

export function isEnableAccess() {
    let accessToken = localStorage.getItem(ACCESS_TOKEN);
    let setupTime = localStorage.getItem(TIME_SAVE_TOKEN);
    let hours = 2;
    let now = new Date().getTime();
    if(accessToken && setupTime){
        if(now-setupTime > hours*60*60*1000) {
            clearToken();
            clearCurrentUser();
            return false;
        }
        return true;
    }
    clearToken();
    return false;
}


