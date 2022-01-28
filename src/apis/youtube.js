import axios from 'axios';
const KEY = 'AIzaSyCH-3cmeapaR9sAKv83dy_l0JOa_d0sHAE';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
     part: 'snippet',
     type: 'video',
     maxResults: 5,
     key: KEY
   }
});
