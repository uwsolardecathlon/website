import { Outlet, ScrollRestoration } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <>
      <Navbar />
      <main className='pt-20'>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Root;
