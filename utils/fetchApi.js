import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
const { data } = await axios.get((url), {
    headers: {
    'X-RapidAPI-Key': '3a71d71b16msh192b8a1b2c7d629p109b5fjsn7416da672680',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
})
return data;
}

