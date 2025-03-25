
import AnimatedElement from './AnimatedElement';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-hero-pattern bg-cover bg-center py-32"
      style={{ paddingTop: '7rem' }}
    >
      <div className="container">
        <div className="max-w-3xl">
          <AnimatedElement animation="slide-down">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Concreto Usinado de Alta Resistência para Sua Obra
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={300}>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Fundações, lajes, pisos industriais e mais. Entregamos qualidade e agilidade em Registro e região.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={600}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn bg-minermix-red text-white hover:bg-minermix-yellow hover:text-minermix-dark-gray"
              >
                Fale com Nossa Equipe
              </a>
              
              <a 
                href="#products" 
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-minermix-blue"
              >
                Nossos Produtos
              </a>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
