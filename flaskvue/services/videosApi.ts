import axios from 'axios';
import  Video  from '../types';

const API_URL = 'http://localhost:5000/';

console.log('API_URL', API_URL);
const PATHS = {
    "POST_CRIARVIDEOS": "videos",
    "GET_VIDEOS": "videos",
    "GET_VIDEO": "videos/",

}



console.log("Videos: ")


  async function getVideos() {
    const url = `${API_URL}${PATHS.GET_VIDEOS}`;
    return axios.get(url).then(response => response.data as Video[]);
  }

  async function addVideo(video: Video) {
    const url = `${API_URL}${PATHS.POST_CRIARVIDEOS}`;
    return axios.post(url, video).then(response => response.data as Video);
  }

  async function deleteVideo(video: Video) {
    const url = `${API_URL}${PATHS.GET_VIDEO}${video.id}`;
    return axios.delete(url).then(response => response.data as Video);
  }




  const videos= await getVideos();
  console.log(videos);



export default {
    getVideos,
    addVideo,
    deleteVideo
}
