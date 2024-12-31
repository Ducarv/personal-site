import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { TechGrid } from './components/TechStack/TechGrid';
import { Projects } from './components/Projects';
import { GameContainer } from './components/Game/GameContainer';
import { ContactForm } from './components/Contact/ContactForm';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-gray-900 text-white min-h-screen">
        <Header />
        <Hero />
        <TechGrid />
        <Projects />
        <GameContainer />
        <ContactForm />
      </div>
    </LanguageProvider>
  );
}