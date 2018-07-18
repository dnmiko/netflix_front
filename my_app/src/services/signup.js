import axios from 'axios';
import constants from '../const';

export default (data) => {
    return axios.post(constants.url + "signup/", data)
}