import { Bot, Brain, Cog, Sparkles } from 'lucide-react';
import type { InteractiveCardData } from '../../types/presentation';

interface InteractiveCardProps {
  data: InteractiveCardData;
  onClick: () => void;
}

const iconMap = {
  Bot,
  Brain,
  Cog,
  Sparkles
};

export const InteractiveCard: React.FC<InteractiveCardProps> = ({ data, onClick }) => {
  const IconComponent = iconMap[data.icon as keyof typeof iconMap] || Bot;

  return (
    <div className="interactive-card" onClick={onClick}>
      <div className="card-icon-container">
        <IconComponent size={28} className="card-icon" />
      </div>
      
      <h3 className="card-title">
        {data.title}
      </h3>
      
      <p className="card-description">
        {data.description}
      </p>
      
      {data.tags && (
        <div className="card-tags">
          {data.tags.map((tag, index) => (
            <span key={index} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {data.metrics && (
        <div className="card-metrics">
          {data.metrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <span className="metric-label">{metric.label}</span>
              <span className="metric-value">{metric.value}</span>
            </div>
          ))}
        </div>
      )}
      
      <div className="card-footer">
        <Sparkles size={16} className="footer-icon" />
        Hacer click para explorar
      </div>
    </div>
  );
};
