
const Footer = () => {
  return (
    <footer className="bg-minermix-blue text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-extrabold mb-4 text-minermix-yellow">MinerMix</h2>
            <p className="text-white/80">
              Concreto usinado de alta qualidade para qualquer tipo de obra, desde fundações até pisos polidos industriais.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-minermix-yellow">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre', href: '#about' },
                { name: 'Vantagens', href: '#advantages' },
                { name: 'Produtos', href: '#products' },
                { name: 'Contato', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/80 hover:text-minermix-yellow transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-minermix-yellow">Contato</h3>
            <p className="text-white/80 mb-2">
              WhatsApp: (13) 99752-9017
            </p>
            <p className="text-white/80 mb-2">
              E-mail: grupo_rac@hotmail.com
            </p>
            <p className="text-white/80">
              Endereço: R. do Chazal, N° 85 - Jardim Esperança, Registro - SP
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/60">
            © 2025 MinerMix Concreto Usinado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
