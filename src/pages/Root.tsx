import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <>
      <Navbar />
      <main className='py-20 px-4 md:px-11'>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
