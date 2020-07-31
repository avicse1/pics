import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID PAKIA-GzUfVn_9FeglTTIxfUAK66f5BoF1N-Nbe9Xwo' 
    }
});