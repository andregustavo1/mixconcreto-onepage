
import AnimatedElement from './AnimatedElement';
import { ShieldCheck, Clock, Headset, Sliders } from 'lucide-react';

const About = () => {
  const differentials = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-minermix-blue" />,
      title: 'Resistência e qualidade',
      description: 'Produtos que atendem às normas técnicas mais rigorosas.'
    },
    {
      icon: <Clock className="w-12 h-12 text-minermix-blue" />,
      title: 'Entrega pontual',
      description: 'Logística eficiente para que sua obra não pare.'
    },
    {
      icon: <Headset className="w-12 h-12 text-minermix-blue" />,
      title: 'Atendimento técnico',
      description: 'Suporte especializado do início ao fim do processo.'
    },
    {
      icon: <Sliders className="w-12 h-12 text-minermix-blue" />,
      title: 'Dosagem precisa',
      description: 'Formulações específicas para cada tipo de obra.'
    }
  ];

  return (
    <section id="about" className="section bg-minermix-light-gray">
      <div className="container">
        <AnimatedElement>
          <h2 className="section-title text-minermix-blue">
            Soluções em Concreto Usinado com Excelência
          </h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="slide-up">
            <div>
              <p className="text-lg mb-6">
                A MinerMix é referência em concreto usinado na região de Registro-SP. Oferecemos produtos sob medida para cada etapa da sua obra, desde baldrames até pisos industriais polidos. Garantimos resistência, durabilidade e atendimento personalizado para construtoras, empreiteiras e indústrias.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {differentials.map((item, index) => (
                  <AnimatedElement key={index} delay={index * 150} animation="fade-in">
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-minermix-dark-gray">{item.title}</h3>
                      <p className="text-minermix-dark-gray/80">{item.description}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-in-right">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[500px]">
              <img 
                src="https://img.freepik.com/free-photo/pouring-concrete-as-foundation_23-2151933441.jpg?t=st=1742914544~exp=1742918144~hmac=3578fb2b9a84a844d7126e71954bbcaa94c46154b205b3a848be1e4ab5b942b4&w=900" 
                alt="Concreto de alta qualidade sendo despejado" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-minermix-blue/60 to-transparent"></div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;
