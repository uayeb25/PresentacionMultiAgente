import React from 'react';
import type { SlideData } from '../../types/presentation';

interface SlideProps {
  slide: SlideData;
  isActive: boolean;
  currentSlide: number;
  totalSlides: number;
}

export const Slide: React.FC<SlideProps> = ({ slide, isActive, currentSlide, totalSlides }) => {
  if (!isActive) return null;

  return (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-header-content">
          <div className="slide-title-container">
            <div className="slide-number">{currentSlide}</div>
            <h1 className="slide-title">{slide.title}</h1>
          </div>
          <div className="slide-progress-indicator">
            {currentSlide} / {totalSlides}
          </div>
        </div>
      </div>

      <div className="slide-content">
        <div className="prose">
          {slide.content}
        </div>
      </div>

      <div className="slide-footer">
        <div className="footer-content">
          <div className="footer-text">
            Sistema Multiagente • Análisis de Literatura Académica
          </div>
          <div className="footer-progress">
            <div className="progress-text">
              {Math.round((currentSlide / totalSlides) * 100)}% completado
            </div>
            <div className="progress-bar-background">
              <div 
                className="progress-bar-foreground"
                style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
