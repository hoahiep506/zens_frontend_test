import { Button } from 'component';

const MainPage = () => {
  return (
    <>
      <div className='text-white text-center font-semibold h-48 flex flex-col justify-center'>
        <p className='text-4xl'>A joke a day keeps the doctor away</p>
        <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
      </div>
      <div className='w-full bg-white flex flex-col'>
        <div className='grow'>
          <div className='w-full md:max-w-4xl 2xl:max-w-8xl xl:max-w-6xl mx-auto pt-12 px-4 pb-16'>
            <p className='text-gray-dark-1 text-lg'>
              A child asked his father, "How were people born?" So his father
              said, "Adam and Eve made babies, then their babies became adults
              and made babies, and so on." The child then went to his mother,
              asked her the same question and she told him, "We were monkeys
              then we evolved to become like we are now." The child ran back to
              his father and said, "You lied to me!" His father replied, "No,
              your mom was talking about her side of the family."
            </p>

            <div className='w-3/4 border-b border-gray-light-1 mx-auto my-14'></div>
            <div className='flex justify-center gap-8'>
              <Button label='This is Funny!' color='bg-blue-base' />
              <Button label='This is not Funny!' />
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
