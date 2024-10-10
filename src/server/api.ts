import { getCookie } from '@/utils/helper';
import axios, { AxiosInstance } from 'axios';
import { destroyCookie, setCookie } from 'nookies';

const authTokenBearer = getCookie('auth-teacher');
const bearer = getCookie('Bearer');

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': bearer ? `Bearer ${bearer}` : undefined,
  },
});

api.interceptors.request.use(async config => {
  const bearer = getCookie('Bearer');
  if (!config.headers.getAuthorization()) {
    config.headers['Authorization'] = `Bearer ${bearer}`;
    return config;
    const authTokenBearer = getCookie('Bearer');
    const data = {
      token: authTokenBearer
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/auth/login/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseBody = await res.json();
    if (!res.ok) {
      if (res.status == 401) {
        destroyCookie(null, 'Bearer');
      }
      const errorData = {
        message: 'Erro na requisição',
        status: res.status,
        response: responseBody
      };
     console.error(JSON.stringify(errorData));
    }
    if(responseBody && responseBody.access_token){
      config.headers['Authorization'] = `Bearer ${responseBody.access_token}`;
      setCookie(null, 'Bearer', responseBody.access_token);
    }
    config.headers['UserProfile'] = getCookie('Bearer')
  }
  console.log()
  return config;
}, error => {
  return Promise.reject(error);
});


export default api;
