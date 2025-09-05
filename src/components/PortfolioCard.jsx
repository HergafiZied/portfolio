import React from 'react';
import { ExternalLink } from 'lucide-react';

// interface PortfolioItem {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   year: string;
// }

// interface PortfolioCardProps {
//   item: PortfolioItem;
//   onClick: () => void;
// }

const PortfolioCard = ({ item, onClick }) => {
  return (
    <div
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <ExternalLink
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100"
            size={24}
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-sm font-medium rounded-full">
            {item.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
            {item.year}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-500 transition-colors">
          {item.title}
        </h3>
        <p className="text-slate-600 leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;