
import AnimatedElement from './AnimatedElement';
import { FileText, Beaker, Calendar, Truck, HardHat } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      icon: <FileText className="w-12 h-12 text-minermix-yellow" />,
      title: 'Demanda',
      description: 'Avaliação do tipo de concreto e volume necessário para sua obra.'
    },
    {
      icon: <Beaker className="w-12 h-12 text-minermix-yellow" />,
      title: 'Dosagem Técnica',
      description: 'Definição da mistura ideal para atender às especificações técnicas.'
    },
    {
      icon: <Calendar className="w-12 h-12 text-minermix-yellow" />,
      title: 'Agendamento',
      description: 'Programação de produção e entrega conforme seu cronograma.'
    },
    {
      icon: <Truck className="w-12 h-12 text-minermix-yellow" />,
      title: 'Produção e Entrega',
      description: 'Fabricação e transporte com nossa frota própria até o local.'
    },
    {
      icon: <HardHat className="w-12 h-12 text-minermix-yellow" />,
      title: 'Aplicação',
      description: 'Suporte técnico durante a aplicação, caso necessário.'
    }
  ];

  return (
    <section className="section bg-minermix-blue">
      <div className="container">
        <AnimatedElement>
          <h2 className="section-title text-white">
            Como Trabalhamos
          </h2>
        </AnimatedElement>
        
        <div className="hidden md:block">
          <AnimatedElement animation="fade-in">
            <div className="relative mt-16">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-minermix-yellow/50 transform -translate-y-1/2"></div>
              
              <div className="flex justify-between relative">
                {steps.map((step, index) => (
                  <AnimatedElement 
                    key={index} 
                    animation="slide-up" 
                    delay={index * 200} 
                    className="flex flex-col items-center w-1/5 px-2"
                  >
                    <div className="bg-minermix-blue p-4 rounded-full border-4 border-minermix-yellow mb-4 z-10">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-white/80 text-center text-sm">
                      {step.description}
                    </p>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <div className="md:hidden space-y-8 mt-12">
          {steps.map((step, index) => (
            <AnimatedElement key={index} animation="slide-up" delay={index * 100}>
              <div className="flex items-start gap-4">
                <div className="bg-minermix-blue p-3 rounded-full border-4 border-minermix-yellow shrink-0">
                  {step.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
