
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
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116941.74724247917!2d-47.94081553818141!3d-24.487892442613087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db01a5d41b36a9%3A0xa48d25b32d96b169!2sRegistro%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1719945000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Registro e Região"
                className="w-full h-full"
              ></iframe>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
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
