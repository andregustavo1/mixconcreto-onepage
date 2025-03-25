
import AnimatedElement from './AnimatedElement';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-minermix-light-gray">
      <div className="container">
        <AnimatedElement>
          <h2 className="section-title text-minermix-blue">
            Fale com a MinerMix
          </h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <AnimatedElement animation="slide-up" delay={0}>
            <a 
              href="https://wa.me/5513997529017" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card flex flex-col items-center text-center h-full hover:bg-minermix-yellow/10"
            >
              <div className="bg-minermix-yellow/20 p-5 rounded-full mb-6">
                <Phone className="w-10 h-10 text-minermix-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-minermix-blue">WhatsApp</h3>
              <p className="text-minermix-dark-gray mb-4">(13) 99752-9017</p>
              <p className="text-minermix-dark-gray/70 text-sm">Ricardo Concreto</p>
              
              <div className="mt-auto pt-6">
                <span className="inline-block px-4 py-2 bg-minermix-yellow/10 rounded-full text-sm font-medium text-minermix-blue">
                  Clique para conversar
                </span>
              </div>
            </a>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={150}>
            <a 
              href="mailto:grupo_rac@hotmail.com" 
              className="card flex flex-col items-center text-center h-full hover:bg-minermix-yellow/10"
            >
              <div className="bg-minermix-yellow/20 p-5 rounded-full mb-6">
                <Mail className="w-10 h-10 text-minermix-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-minermix-blue">E-mail</h3>
              <p className="text-minermix-dark-gray mb-4">grupo_rac@hotmail.com</p>
              <p className="text-minermix-dark-gray/70 text-sm">Atendimento comercial</p>
              
              <div className="mt-auto pt-6">
                <span className="inline-block px-4 py-2 bg-minermix-yellow/10 rounded-full text-sm font-medium text-minermix-blue">
                  Clique para enviar e-mail
                </span>
              </div>
            </a>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={300}>
            <a 
              href="https://maps.google.com/?q=R. do Chazal, N° 85 - Jardim Esperança, Registro - SP, 11900-000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card flex flex-col items-center text-center h-full hover:bg-minermix-yellow/10"
            >
              <div className="bg-minermix-yellow/20 p-5 rounded-full mb-6">
                <MapPin className="w-10 h-10 text-minermix-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-minermix-blue">Endereço</h3>
              <p className="text-minermix-dark-gray mb-4">
                R. do Chazal, N° 85 - Jardim Esperança, Registro - SP, 11900-000
              </p>
              
              <div className="mt-auto pt-6">
                <span className="inline-block px-4 py-2 bg-minermix-yellow/10 rounded-full text-sm font-medium text-minermix-blue">
                  Ver no mapa
                </span>
              </div>
            </a>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
