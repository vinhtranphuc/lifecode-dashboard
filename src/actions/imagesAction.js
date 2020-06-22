import axios,{requestConfig} from '../axios/axios';

//GET_TAGS
const _getUriImages = (data) => {
    return ({
    type: 'GET_URI_IMAGES',
    data
})};

export const getUriImages = (params = {
    post_id : '',
    start_img: '',
    to_img: ''
}) => {
    return async (dispatch) => {
        return await axios.get('image/uri-images?post_id='+params.post_id+'&start_img='+params.start_img+'&to_img='+params.to_img,requestConfig()).then(result => {
            let {data} = result.data;
            dispatch(_getUriImages(data));
        });
    };
};