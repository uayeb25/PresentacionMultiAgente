export interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  type: 'intro' | 'content' | 'interactive' | 'conclusion';
}

export interface InteractiveCardData {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: {
    title: string;
    content: React.ReactNode;
  };
  tags?: string[];
  metrics?: { label: string; value: string }[];
}

export interface ModalData {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
}

export interface PresentationState {
  currentSlide: number;
  totalSlides: number;
  modal: ModalData;
}
