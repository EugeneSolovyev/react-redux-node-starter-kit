import request from 'axios';

const getCurrentState = {
    init: () => {
        const base = 'http://data.fixer.io/api/latest?access_key=61f9e492d84f986225b810a9fcf91f0e';
        return request.get(`${base}`);
    }
};

export default getCurrentState;
