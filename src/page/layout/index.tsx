import { NavBar } from 'component';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className='w-screen h-full  antialiased bg-green-base'>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
