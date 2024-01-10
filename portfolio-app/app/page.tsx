"use client"

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

export default function Home() {
  return (
    <>
    <div className='container'>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
    </>
  );
}
