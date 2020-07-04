import axios from 'axios';
import { configs } from '../configs';

const { apis } = configs;

export const getPrice = () => {
    return axios.request({ url: apis.economia });
}