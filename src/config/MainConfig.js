import { main_api, popular_movie, action_movie, comedy_movie } from "../MAIN_API";
import axios from 'axios';


export const getPopularMovie = async () => {
    return await axios.get(popular_movie)
    .then(response =>{ 
        return response.data.results;
    })
}

export const getBestComediesMovie = async () => {
    return await axios.get(comedy_movie)
    .then(response =>{
        return response.data.results;
    })
}
export const getVideos = async () => {
    return await axios.get('./videosdb.json')
    .then(response =>{
        return response.data;
    })
}

