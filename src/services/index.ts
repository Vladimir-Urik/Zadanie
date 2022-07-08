import axios, {AxiosRequestConfig} from 'axios';

export const client = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {
    'app-id': process.env.REACT_APP_ID,
  },
  responseType: 'json',
});

interface ServiceError {
    endpoint: string;
    message: string;
    status: number;
}

export async function createRequest<T>(cfg: AxiosRequestConfig) {
  const res = await client.request(cfg);

  if (res === undefined || !(res.status >= 200 && res.status < 300)) {
    let error: ServiceError;
    if (res !== undefined) {
      error = {
        endpoint: cfg.url,
        message: res.data?.message || 'Not specified.',
        status: res.status,
      };
    } else {
      error = {
        endpoint: cfg.url,
        message: 'Not specified.',
        status: 0,
      };
    }

    return Promise.reject(error);
  }

  return res.data as T;
}

export {getUsers, getUser} from './users';
