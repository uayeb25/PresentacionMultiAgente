import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide } from './Slide';
import { Modal } from '../UI/Modal';
import { InteractiveCard } from '../UI/InteractiveCard';
import { slidesData, interactiveCardsData } from '../../data/slides';
import type { PresentationState } from '../../types/presentation';

export const Presentation: React.FC = () => {
  const [state, setState] = useState<PresentationState>({
    currentSlide: 0,
    totalSlides: slidesData.length,
    modal: {
      isOpen: false,
      title: '',
      content: null
    }
  });

  const nextSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlide: prev.currentSlide < prev.totalSlides - 1 
        ? prev.currentSlide + 1 
        : 0
    }));
  }, []);

  const prevSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlide: prev.currentSlide > 0 
        ? prev.currentSlide - 1 
        : prev.totalSlides - 1
    }));
  }, []);

  const openModal = useCallback((cardData: typeof interactiveCardsData[0]) => {
    setState(prev => ({
      ...prev,
      modal: {
        isOpen: true,
        title: cardData.details.title,
        content: cardData.details.content
      }
    }));
  }, []);

  const closeModal = useCallback(() => {
    setState(prev => ({
      ...prev,
      modal: {
        isOpen: false,
        title: '',
        content: null
      }
    }));
  }, []);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          e.preventDefault();
          closeModal();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, closeModal]);

  const currentSlideData = slidesData[state.currentSlide];

  return (
    <div className="presentation-container">
      <nav className="presentation-nav">
        <div className="nav-content">
          <div className="nav-title">
            <div className="nav-logo">
              <span>SMA</span>
            </div>
            <h1>Sistema Multiagente</h1>
          </div>
          <div className="nav-progress">
            {state.currentSlide + 1} / {state.totalSlides}
          </div>
        </div>
      </nav>

      <main className="presentation-main">
        <div className="slide-container">
          <Slide 
            slide={currentSlideData} 
            isActive={true}
            currentSlide={state.currentSlide + 1}
            totalSlides={state.totalSlides}
          />
        </div>
        
        {state.currentSlide === 1 && (
          <div className="interactive-cards-container">
            {interactiveCardsData.map((cardData) => (
              <InteractiveCard
                key={cardData.id}
                data={cardData}
                onClick={() => openModal(cardData)}
              />
            ))}
          </div>
        )}
      </main>

      <div className="presentation-controls">
        <button 
          className="control-button"
          onClick={prevSlide}
          disabled={state.currentSlide === 0}
          aria-label="Slide anterior"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="progress-bar-container">
          <div 
            className="progress-bar"
            style={{ 
              width: `${((state.currentSlide + 1) / state.totalSlides) * 100}%` 
            }}
          />
        </div>
        
        <button 
          className="control-button"
          onClick={nextSlide}
          disabled={state.currentSlide === state.totalSlides - 1}
          aria-label="Siguiente slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <Modal
        isOpen={state.modal.isOpen}
        title={state.modal.title}
        onClose={closeModal}
      >
        {state.modal.content}
      </Modal>
    </div>
  );
};
