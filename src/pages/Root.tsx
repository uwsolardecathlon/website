import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <>
      <Navbar />
      <main className='py-20 px-8 md:px-11'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
