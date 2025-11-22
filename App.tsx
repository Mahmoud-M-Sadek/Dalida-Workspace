import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <BookingForm />
      </main>
      
      <Footer />
      
      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;