import React, { useState, useEffect } from 'react';
import ROROverallImprovements from './components/ror-overall-improvements';
import RORSchemaV2 from './components/ror-schema-v2';
import ROR2025Roadmap from './components/ror-2025-roadmap';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: <ROROverallImprovements />, title: "ROR Data: Overall Improvements in 2024" },
    { component: <RORSchemaV2 />, title: "ROR Data: Schema V2 Updates" },
    { component: <ROR2025Roadmap />, title: "ROR Data: 2025 Roadmap" }
  ];

  useEffect(() => {
    document.title = slides[currentSlide].title;
  }, [currentSlide, slides]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <button 
          onClick={goToPrevSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">{slides[currentSlide].title}</span>
        <button 
          onClick={goToNextSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          {slides[currentSlide].component}
        </div>
      </div>
    </div>
  );
};

export default App;
