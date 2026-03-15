import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, HeartPulse, User, Calendar } from 'lucide-react';
import { Animal } from '../data';
import { ImageCarousel } from './ImageCarousel';

interface AnimalCardProps {
  animal: Animal;
  onAdoptClick: (animal: Animal) => void;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onAdoptClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-orange-100 flex flex-col h-full"
    >
      <ImageCarousel images={animal.images} alt={animal.name} />
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-heading font-bold text-gray-800">{animal.name}</h3>
            <p className="text-primary font-medium">{animal.breed}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            animal.gender === 'Female' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'
          }`}>
            {animal.gender === 'Female' ? '女生' : '男生'}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 mb-4 mt-2 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-gray-400" />
            <span>{animal.age}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User size={16} className="text-gray-400" />
            <span>{animal.type === 'dog' ? '狗狗' : '貓咪'}</span>
          </div>
        </div>

        <div className="space-y-3 mb-6 flex-grow">
          <div>
            <div className="flex items-center gap-1.5 text-gray-800 font-semibold mb-1 text-sm">
              <Sparkles size={16} className="text-secondary" />
              <h4>個性描述</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{animal.personality}</p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-gray-800 font-semibold mb-1 text-sm">
              <HeartPulse size={16} className="text-red-400" />
              <h4>健康狀況</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{animal.health}</p>
          </div>
        </div>

        <button
          onClick={() => onAdoptClick(animal)}
          className="w-full mt-auto bg-primary hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
        >
          <Heart size={18} className="group-hover:scale-110 transition-transform" />
          我想認養 {animal.name}
        </button>
      </div>
    </motion.div>
  );
};
