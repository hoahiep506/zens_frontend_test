import { callApi } from 'helper';

export const apiGetJokes = () => {
  return callApi.get('/getJokes');
};
