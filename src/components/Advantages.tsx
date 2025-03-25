
import AnimatedElement from './AnimatedElement';
import { ShieldCheck, Truck, Settings, HeadphonesIcon } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: <ShieldCheck className="w-16 h-16 text-minermix-yellow" />,
      title: 'Alta Resistência',
      description: 'Nosso concreto atende às normas técnicas mais rigorosas, garantindo durabilidade e segurança para suas estruturas.'
    },
    {
      icon: <Truck className="w-16 h-16 text-minermix-yellow" />,
      title: 'Logística Ágil',
      description: 'Contamos com frota própria para entrega pontual, seguindo rigorosamente o cronograma da sua obra.'
    },
    {
      icon: <Settings className="w-16 h-16 text-minermix-yellow" />,
      title: 'Personalização',
      description: 'Desenvolvemos formulações específicas para cada tipo de aplicação, otimizando recursos e resultados.'
    },
    {
      icon: <HeadphonesIcon className="w-16 h-16 text-minermix-yellow" />,
      title: 'Assistência Técnica',
      description: 'Oferecemos acompanhamento especializado desde o pedido até a aplicação final do concreto.'
    }
  ];

  return (
    <section id="advantages" className="section bg-white">
      <div className="container">
        <AnimatedElement>
          <h2 className="section-title text-minermix-blue">
            Vantagens do Nosso Concreto Usinado
          </h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <AnimatedElement key={index} delay={index * 150} animation="slide-up">
              <div className="card border border-minermix-blue/10 flex flex-col items-center text-center h-full">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-minermix-blue">{item.title}</h3>
                <p className="text-minermix-dark-gray/90">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
