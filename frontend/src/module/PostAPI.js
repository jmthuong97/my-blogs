import axios from 'axios';
import config from '../untils/config';

export const getAllPosts = () => {
    return axios({
        method: 'GET',
        url: `${config.base_url}/api/post`
    });
};
