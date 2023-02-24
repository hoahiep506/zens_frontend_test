import { Img } from 'assets';

const NavBar = () => {
  return (
    <div className='bg-white h-24 w-full drop-shadow-md px-3 md:px-0'>
      <div className='w-full md:max-w-4xl xl:max-w-6xl h-full mx-auto bor'>
        <div className='flex justify-between items-center h-full -mx-6'>
          <img src={Img.logo} className='object-contain h-16 w-16'></img>
          <div className='flex gap-3 items-center'>
            <div className='text-right'>
              <p className='text-gray-base italic text-sm'>Handcrafted by</p>
              <p className='text-gray-dark-1'>Cyan Blue</p>
            </div>
            <img
              src={Img.avatar}
              className='rounded-full object-cover h-16 w-16'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
