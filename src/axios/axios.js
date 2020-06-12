import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN} from '../constants';
export default axios.create({
    baseURL: API_BASE_URL
});

export const requestConfig = () => {
    return {
        headers : {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Authorization": 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
    };
}