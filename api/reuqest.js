import axios from 'axios';

export  function setInterceptors(instance)  {
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  // Add a response interceptor
   instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      alert('error');
      return Promise.reject(error);
    },
  );

  return instance;
}
export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:80802345',
  headers: {
    'Content-Type': "application/json",
  }

});