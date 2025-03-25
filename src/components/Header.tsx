
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-minermix-blue py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-2xl font-extrabold ${scrolled ? 'text-minermix-blue' : 'text-minermix-yellow'}`}>
            MinerMix
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Início', href: '#home' },
            { name: 'Sobre', href: '#about' },
            { name: 'Vantagens', href: '#advantages' },
            { name: 'Produtos', href: '#products' },
            { name: 'Contato', href: '#contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors duration-300 ${
                scrolled 
                  ? 'text-minermix-dark-gray hover:text-minermix-blue' 
                  : 'text-white hover:text-minermix-yellow'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact" 
          className={`btn ${scrolled ? 'btn-primary' : 'bg-minermix-yellow text-minermix-dark-gray hover:bg-white'}`}
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
};

export default Header;
