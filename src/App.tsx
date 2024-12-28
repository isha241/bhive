import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Spaces from './components/Spaces/Spaces';
import AppDownload from './components/AppDownload/AppDownload';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Spaces />
        <AppDownload />
      </main>
    </div>
  );
}

export default App;