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
      console.log(error);
      let response = error.response;
      let data = response.data;
      if(checkexpireLogin(response.status,data.message)){
        location.href='/login?nextUrl='+location.href;
      }
      return Promise.reject(error);
    },
  );

  return instance;
}
export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': "application/json",
  }

});