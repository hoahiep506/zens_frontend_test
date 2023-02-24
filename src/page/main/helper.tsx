import { apiGetJokes, apiLikeJoke } from 'api';
import Cookies from 'js-cookie';
import { useCallback, useEffect, useRef, useState } from 'react';
export interface Joke {
  id: string;
  content: string;
  total_like: number;
  total_dislike: number;
}

export const useJokes = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState(false);
  const [jokeDisplay, setJokeDisplay] = useState<Joke | null>();

  const readJokeIds = useRef<string[]>([]);
  readJokeIds.current = Cookies.get('readJokeIds')?.split(' ') || [];

  const selectJoke = useCallback((currentJokes: Joke[]) => {
    const unreadJokes = currentJokes.filter(
      (joke: Joke) => !readJokeIds.current.includes(joke.id)
    );
    if (unreadJokes.length) setJokeDisplay(unreadJokes[0]);
    else setJokeDisplay(null);
  }, []);

  const getJokes = useCallback(() => {
    setLoading(true);
    apiGetJokes()
      .then((res) => {
        setLoading(false);
        if (!res.data?.length) return;
        setJokes(res.data);
        selectJoke(res.data);
      })
      .catch((err) => {
        const confirmed = window.confirm(
          'Maybe server is starting up, try again?'
        );
        if (confirmed) return getJokes();
        else alert(err);
      });
  }, []);

  useEffect(() => {
    if (!jokes.length) {
      getJokes();
    }
  }, []);

  const likeJoke = useCallback(
    ({ jokeId, isLike }: { jokeId?: string; isLike: boolean }) => {
      if (!jokeId) return;
      apiLikeJoke({ jokeId, isLike })
        .then(() => {
          readJokeIds.current.push(jokeId);
          Cookies.set('readJokeIds', readJokeIds.current.join(' '));
          selectJoke(jokes);
        })
        .catch((err) => alert(err));
    },
    [jokes]
  );

  return { jokeDisplay, loading, likeJoke };
};
