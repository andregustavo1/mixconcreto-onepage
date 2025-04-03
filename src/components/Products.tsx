import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const products = [
    {
      title: 'Fundações e Baldrames',
      description: 'Concreto especial para fundações, com alta resistência e impermeabilidade.',
      image: '/images/image2.png'
    },
    {
      title: 'Lajes e Vigas',
      description: 'Formulação específica para elementos estruturais, com resistência otimizada para cargas.',
      image: '/images/image4.png'
    },
    {
      title: 'Pisos Industriais Polidos',
      description: 'Concreto de alta performance para áreas de tráfego intenso, com acabamento polido.',
      image: '/images/image5.png'
    },
    {
      title: 'Concreto Projetado',
      description: 'Solução avançada para aplicações especiais, com técnica de projeção de concreto.',
      image: '/images/image3.png'
    },
    {
      title: 'Concreto com Fibras',
      description: 'Reforçado com fibras para maior resistência à tração e controle de fissuras.',
      image: '/images/image6.png'
    },
    {
      title: 'Outros Serviços',
      description: 'Outros Serviços.',
      image: 'images/1.mp4'
    },
    {
      title: 'Outros Serviços',
      description: 'Outros Serviços.',
      image: 'images/2.mp4'
    },
    {
      title: 'Outros Serviços',
      description: 'Outros Serviços.',
      image: 'images/3.mp4'
    },
    {
      title: 'Outros Serviços',
      description: 'Outros Serviços.',
      image: 'images/4.mp4'
    },
    {
      title: 'Outros Serviços',
      description: 'Outros Serviços.',
      image: 'images/5.mp4'
    },
  ];
  
  // Helper function to check if the file is a video
  const isVideo = (filename: string) => {
    return filename.endsWith('.mp4') || filename.endsWith('.webm') || filename.endsWith('.mov');
  };
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };
  
  return (
    <section id="products" className="section bg-minermix-blue/5">
      <div className="container">
        <AnimatedElement>
          <h2 className="section-title text-minermix-blue">
            Concreto para Todas as Etapas da Obra
          </h2>
        </AnimatedElement>
        
        <div className="relative mt-12">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96">
                    {isVideo(product.image) ? (
                      <video 
                        src={product.image} 
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-minermix-dark-gray to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                      <p className="text-white/90">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-minermix-yellow p-3 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-minermix-dark-gray" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-minermix-yellow p-3 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-minermix-dark-gray" />
          </button>
          
          <div className="flex justify-center space-x-2 mt-4">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-minermix-yellow' : 'bg-minermix-blue/20'
                }`}
              />
            ))}
          </div>
        </div>
        
        <AnimatedElement animation="fade-in" className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  index === activeSlide 
                    ? 'border-minermix-yellow bg-white shadow-md' 
                    : 'border-transparent hover:border-minermix-blue/20'
                }`}
                onClick={() => setActiveSlide(index)}
              >
                <h4 className="font-bold text-minermix-blue">{product.title}</h4>
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Products;
