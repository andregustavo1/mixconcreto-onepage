
import AnimatedElement from './AnimatedElement';
import { MapPin } from 'lucide-react';

const ServiceArea = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <AnimatedElement>
          <h2 className="section-title text-minermix-blue">
            Atendemos Registro e Região
          </h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slide-up">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
              <img 
                src="/map.jpg" 
                alt="Mapa de cobertura da MinerMix" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-minermix-blue/10"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-pulse">
                  <MapPin className="w-16 h-16 text-minermix-red" />
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-in-right">
            <div className="bg-minermix-blue/5 rounded-lg p-8 border-l-4 border-minermix-yellow">
              <h3 className="text-2xl font-bold mb-4 text-minermix-blue">
                Nossa Área de Cobertura
              </h3>
              
              <p className="text-lg mb-4">
                Disponibilidade para obras em toda a região do Vale do Ribeira, atendendo:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-minermix-yellow rounded-full w-2 h-2 mr-3"></div>
                  <span>Registro - Centro de operações</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-minermix-yellow rounded-full w-2 h-2 mr-3"></div>
                  <span>Juquiá</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-minermix-yellow rounded-full w-2 h-2 mr-3"></div>
                  <span>Miracatu</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-minermix-yellow rounded-full w-2 h-2 mr-3"></div>
                  <span>Sete Barras</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-minermix-yellow rounded-full w-2 h-2 mr-3"></div>
                  <span>Jacupiranga</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-minermix-yellow rounded-full w-2 h-2 mr-3"></div>
                  <span>Cananéia</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-minermix-yellow rounded-full w-2 h-2 mr-3"></div>
                  <span>E outras cidades (consulte disponibilidade)</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <a href="#contact" className="btn btn-primary">
                  Verificar Disponibilidade
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
