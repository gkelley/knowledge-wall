import axios from 'axios';

const firebaseInstance = axios.create({
    baseURL: 'https://knowledge-wall-2019.firebaseio.com/'
});

export default firebaseInstance;