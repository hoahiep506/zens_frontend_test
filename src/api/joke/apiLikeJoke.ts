import { callApi } from 'helper';

export type TLikeJokeParams = {
  jokeId: string;
  isLike: boolean;
};

export const apiLikeJoke = (params: TLikeJokeParams) => {
  return callApi.post('/likeJoke', params);
};
