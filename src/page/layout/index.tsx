import { NavBar } from 'component';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className='w-screen h-screen overflow-hidden antialiased bg-green-base'>
      <NavBar />
      <div className='w-full md:max-w-4xl 2xl:max-w-8xl xl:max-w-6xl h-full mx-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
