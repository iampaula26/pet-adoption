import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PawPrint, Heart, Mail, Phone, MapPin, X } from 'lucide-react';
import { animals, Animal, AnimalType } from './data';
import { AnimalCard } from './components/AnimalCard';

export default function App() {
  const [filter, setFilter] = useState<'all' | AnimalType>('all');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filteredAnimals = animals.filter(
    (animal) => filter === 'all' || animal.type === filter
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <PawPrint size={32} />
            <h1 className="text-2xl font-heading font-bold text-gray-800 tracking-tight">
              毛孩找家 <span className="text-primary">Paws & Hearts</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
            <a href="#adopt" className="hover:text-primary transition-colors">認養專區</a>
            <a href="#about" className="hover:text-primary transition-colors">關於我們</a>
            <a href="#contact" className="hover:text-primary transition-colors">聯絡資訊</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-light/20 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Happy dog" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative blob behind image */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl -z-10 transform rotate-3"></div>
              <div className="absolute -inset-4 bg-secondary/20 rounded-3xl -z-10 transform -rotate-3"></div>
            </motion.div>

            {/* Text on the right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                給牠們一個溫暖的家 <br/>
                <span className="text-primary">遇見你生命中的毛小孩</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                這裡有許多可愛的狗狗和貓咪正在等待一個永遠的家。
                領養代替購買，讓愛延續。來看看有沒有與你有緣的毛孩吧！
              </p>
              <a
                href="#adopt"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-md"
              >
                <Heart size={20} />
                開始尋找夥伴
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 text-primary/10 rotate-12">
          <PawPrint size={120} />
        </div>
        <div className="absolute bottom-10 left-1/2 text-secondary/10 -rotate-12">
          <PawPrint size={80} />
        </div>
      </section>

      {/* Main Content - Adoption Section */}
      <main id="adopt" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl font-heading font-bold text-gray-800 flex items-center gap-3">
            <Heart className="text-red-400" fill="currentColor" />
            等家毛孩
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
            {(['all', 'dog', 'cat'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {f === 'all' ? '全部' : f === 'dog' ? '狗狗' : '貓咪'}
              </button>
            ))}
          </div>
        </div>

        {/* Animal Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredAnimals.map((animal) => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                onAdoptClick={setSelectedAnimal} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <PawPrint size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-xl">目前沒有符合條件的毛孩喔！</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <PawPrint size={28} />
                <h3 className="text-xl font-heading font-bold text-white">毛孩找家</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                我們致力於為每一隻流浪動物找到溫暖的家。
                透過認養，你不僅拯救了一個生命，更獲得了一生忠誠的伴侶。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 font-heading">聯絡我們</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-secondary" />
                  <span>(02) 1234-5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-secondary" />
                  <span>adopt@pawsandhearts.tw</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-secondary" />
                  <span>台北市信義區愛心路 99 號</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 font-heading">開放時間</h4>
              <ul className="space-y-2 text-gray-400">
                <li>週一至週五：10:00 - 18:00</li>
                <li>週六至週日：10:00 - 20:00</li>
                <li className="text-primary mt-2 text-sm">* 來訪前請先電話預約</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Paws & Hearts Adoption. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Adoption Modal */}
      <AnimatePresence>
        {selectedAnimal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedAnimal(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full text-gray-600 transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="h-48 relative">
                <img 
                  src={selectedAnimal.images[0]} 
                  alt={selectedAnimal.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-3xl font-heading font-bold text-white">
                  認養 {selectedAnimal.name}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  感謝您對 <span className="font-bold text-gray-800">{selectedAnimal.name}</span> 有興趣！
                  請留下您的聯絡方式，我們的志工會盡快與您聯繫，安排互動時間。
                </p>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('表單已送出！我們會盡快聯絡您。'); setSelectedAnimal(null); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="王小明" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">聯絡電話</label>
                    <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="0912-345-678" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">想說的話 (選填)</label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none h-24" placeholder="例如：我有養狗經驗..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-colors mt-2">
                    送出認養申請
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
