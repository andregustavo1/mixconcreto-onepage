
import AnimatedElement from './AnimatedElement';

const CallToAction = () => {
  return (
    <section className="py-24 bg-cta-pattern bg-cover bg-center text-minermix-dark-gray">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="slide-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Pronto para Iniciar Sua Obra com o Melhor Concreto?
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={200}>
            <p className="text-lg md:text-xl mb-8">
              Conte com a MinerMix para fornecer concreto usinado de alta qualidade, com entrega pontual e suporte técnico especializado.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={400}>
            <a 
              href="#contact" 
              className="btn bg-minermix-red text-white hover:bg-minermix-blue text-lg px-8 py-4"
            >
              Solicitar Orçamento Agora
            </a>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
