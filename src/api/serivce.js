// src/services/AnimeService.js
import axios from 'axios';

const BASE_URL = 'https://api.consumet.org/anime/gogoanime';

const Service = {
  async getAnimeList() {
    const response = await axios.get(`${BASE_URL}/anime`);
    return response.data;
  },
  async getAnimeDetails(id) {
    const response = await axios.get(`${BASE_URL}/anime/${id}`);
    return response.data;
  },
  async getEpisodeList(id) {
    const response = await axios.get(`${BASE_URL}/anime/${id}/episodes`);
    return response.data;
  },
  async getEpisodeDetails(id, episode) {
    const response = await axios.get(`${BASE_URL}/anime/${id}/episode/${episode}`);
    return response.data;
  },
};

export default Service;
