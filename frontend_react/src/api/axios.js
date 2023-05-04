import axios from 'axios';

export const axiosAuthentication = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const axiosContentData = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const getPeoplePage = async (pageParam = 1) => {
  const response = await axiosContentData.get(`pop_people/?page=${pageParam}`);
  return response.data;
};

export const getMoviesPage = async (pageParam = 1) => {
  const response = await axiosContentData.get(`pop_movies/?page=${pageParam}`);
  return response.data;
};