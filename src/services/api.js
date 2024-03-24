import axios from 'axios';
//const ACCESS_KEY = 'eg025x8Xhb-_SCm_dMhaGwSom46g0aD2naHiHNJiK24';
const ACCESS_KEY = '7ZEn7lAVuqaxVN5Jfk3uCc0FF92W5A47SMVM98qjJZo';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos1`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page: page,
      per_page: 12,
    },
  });
  return { data: response.data.results, totalPages: response.data.total_pages };
};
