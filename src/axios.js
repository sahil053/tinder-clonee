import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinderclone-la04.onrender.com/'
})

export default instance;
