import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';



function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 200,
    });

    Aos.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
