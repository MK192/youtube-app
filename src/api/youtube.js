import axios from 'axios';

const KEY='AIzaSyAlfUjP2F-WLvDA1Rj9rmfxNxCLa3Klllg';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
   params:{ 
       part:'snippet',
        maxResults:5,
        key:KEY,
   }
});

