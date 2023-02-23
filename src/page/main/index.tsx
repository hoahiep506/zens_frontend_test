import { Button } from 'component';
import { isString } from 'ramda-adjunct';
import { useJokes } from './helper';

const MainPage = () => {
  const { jokeDisplay, loading, likeJoke } = useJokes();
  return (
    <>
      <div className='text-white text-center font-semibold h-48 flex flex-col justify-center'>
        <p className='text-4xl'>A joke a day keeps the doctor away</p>
        <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
      </div>
      <div className='w-full bg-white flex flex-col'>
        <div className='grow'>
          <div className='w-full md:max-w-4xl 2xl:max-w-8xl xl:max-w-6xl mx-auto pt-12 px-4 pb-16'>
            {isString(jokeDisplay?.content) && (
              <p className='text-gray-dark-1 text-lg'>{jokeDisplay?.content}</p>
            )}
            {!jokeDisplay?.id && (
              <p className='text-gray-dark-1 text-lg text-center'>
                That's all the jokes for today! Come back another day!
              </p>
            )}
            <div className='w-3/4 border-b border-gray-light-1 mx-auto my-14'></div>
            <div className='flex justify-center gap-8'>
              <Button
                label='This is Funny!'
                color='bg-blue-base'
                onClick={() =>
                  likeJoke({ jokeId: jokeDisplay?.id, isLike: true })
                }
                disabled={loading || !jokeDisplay?.id}
              />
              <Button
                label='This is not Funny!'
                onClick={() =>
                  likeJoke({ jokeId: jokeDisplay?.id, isLike: false })
                }
                disabled={loading || !jokeDisplay?.id}
              />
            </div>
          </div>
        </div>

        <div className='border-t grow-0 h-40'>
          <div className='w-full md:max-w-4xl 2xl:max-w-8xl xl:max-w-6xl mx-auto py-8 px-4'>
            <p className='text-gray-base text-sm text-center mb-4'>
              This website is created as part of Hlsolutions program. The
              materials contained on this website are provided for general
              information only and do not constitute any form of advice. HLS
              assumes no responsibility for the accuracy of any particular
              statement and accepts no liability for any loss or damage which
              may arise from reliance on the information contained on this site.
            </p>
            <p className='text-gray-dark-1 text-sm text-center'>
              Copyright 2023 Cyan Blue.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
