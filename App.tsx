
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  Star, 
  ArrowRight,
  Zap,
  Lock,
  Flame,
  Download,
  Eye,
  CreditCard,
  Target,
  UserCheck,
  ZapOff,
  Briefcase
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center btn-glow">
          <Target className="text-white w-5 h-5" />
        </div>
        <span className="font-display text-xl font-extrabold tracking-tighter uppercase">ALPHA<span className="text-primary">CORE</span></span>
      </div>
      <a 
        href="#checkout" 
        className="bg-primary text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all md:block hidden"
      >
        Acesso Imediato
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent blur-[120px] -z-10 opacity-60"></div>
    
    <div className="max-w-5xl mx-auto text-center space-y-8 relative">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
        <UserCheck className="w-4 h-4 fill-current" /> O Protocolo Definitivo de Evolução
      </div>
      
      <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter">
        DOMINE SUA <br />
        <span className="text-primary text-glow italic">IMAGEM</span> <br />
        E PRESENÇA.
      </h1>
      
      <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
        Não é sobre genética. É sobre <span className="text-white font-semibold">otimização estética, postura e mindset</span> em 30 dias. O guia prático para o homem de alto valor.
      </p>

      <div className="flex flex-col items-center gap-6 pt-6">
        <a 
          href="#checkout" 
          className="bg-primary btn-glow text-white px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-widest flex items-center gap-3 w-full max-w-md justify-center group"
        >
          INICIAR MINHA EVOLUÇÃO
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="flex items-center gap-4 text-xs text-white/40 font-bold uppercase tracking-widest">
           <Zap className="w-4 h-4 text-primary" /> +8.500 homens transformados este ano
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 px-6 bg-surface/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
            NÃO SEJA MAIS UM <br /><span className="text-primary">NA MULTIDÃO.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            A maioria dos homens negligencia 90% do seu potencial estético e social. O Protocolo Alpha entrega as ferramentas exatas para você se destacar em qualquer ambiente.
          </p>
          <div className="space-y-6">
            {[
              { icon: <Target className="text-primary" />, t: "Grooming & Rosto", d: "Técnicas de Mewing, cuidados com a barba e pele de forma simplificada." },
              { icon: <Eye className="text-secondary" />, t: "Estilo Estratégico", d: "Como se vestir para transmitir autoridade e confiança sem gastar muito." },
              { icon: <Zap className="text-white" />, t: "Postura & Linguagem", d: "Corrija sua postura e domine a linguagem corporal alfa em 7 dias." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{item.t}</h3>
                  <p className="text-white/40">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
            className="rounded-[2.5rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
            alt="Men's Professional Evolution" 
          />
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="checkout" className="py-32 px-6 relative">
    <div className="max-w-xl mx-auto">
      <div className="bg-glass p-12 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-[0_0_80px_rgba(14,165,233,0.1)]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
        
        <div className="text-center space-y-6">
          <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
            Acesso Vitalício
          </span>
          <h2 className="text-4xl font-display font-black">PROTOCOLO ALPHA</h2>
          
          <div className="flex flex-col items-center">
            <span className="text-white/30 line-through text-lg">De R$ 67,00</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">Por</span>
              <span className="text-8xl font-display font-black text-glow">9,90</span>
            </div>
            <p className="text-primary font-bold text-sm tracking-widest mt-2 uppercase">Investimento Único</p>
          </div>

          <div className="space-y-4 pt-8">
            <a href="https://lnk.ink/Glowup" className="w-full bg-primary btn-glow text-white py-6 rounded-2xl text-xl font-black uppercase tracking-widest flex items-center justify-center gap-3">
  GARANTIR MINHA VAGA
  <ArrowRight className="w-6 h-6" />
            </a>
            <div className="flex justify-center gap-4 opacity-30">
               <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-1.png" className="h-4" alt="Pix" />
               <img src="https://logodownload.org/wp-content/uploads/2014/10/cartao-visa-logo-1.png" className="h-4" alt="Visa" />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 gap-6">
           <div className="text-center">
              <p className="text-2xl font-black text-white">45+</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Lições de Evolução</p>
           </div>
           <div className="text-center">
              <p className="text-2xl font-black text-white">7</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Dias de Garantia</p>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-display font-black italic uppercase">HOMENS QUE DOMINARAM O JOGO</h2>
         <p className="text-white/40 uppercase tracking-[0.3em] text-[10px]">Resultados reais de quem aplicou o método</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Thiago R.", t: "Sempre fui o cara 'invisível'. Depois das técnicas de grooming e postura do AlphaCore, minha confiança no trabalho e nos eventos sociais mudou 180 graus.", avatar: "https://i.pravatar.cc/150?u=10" },
          { name: "Marcos A.", t: "O capítulo de estilo estratégico vale ouro. Aprendi a me vestir bem com peças básicas. O impacto na forma como as pessoas me tratam foi imediato.", avatar: "https://i.pravatar.cc/150?u=11" },
          { name: "Gabriel S.", t: "Por R$ 9,90 eu não esperava muito, mas o conteúdo é denso e prático. O checklist diário me ajudou a manter a disciplina.", avatar: "https://i.pravatar.cc/150?u=12" },
        ].map((item, i) => (
          <div key={i} className="bg-glass p-10 rounded-[2rem] border border-white/5 space-y-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-primary fill-current" />)}
            </div>
            <p className="text-white/70 italic font-light leading-relaxed">"{item.t}"</p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <img src={item.avatar} className="w-12 h-12 rounded-full grayscale border border-white/10" alt={item.name} />
              <span className="font-bold text-white tracking-tight uppercase text-xs">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);
  const items = [
    { q: "Como vou receber o material?", a: "Imediatamente após a aprovação do pagamento, você receberá o link de download no seu e-mail e poderá acessar de qualquer dispositivo." },
    { q: "Preciso de muito dinheiro para o estilo?", a: "Absolutamente não. O guia foca em 'Estilo Inteligente', ensinando como usar o que você já tem e o que comprar gastando o mínimo." },
    { q: "O pagamento é seguro?", a: "Sim, utilizamos criptografia de ponta a ponta e processamento através das maiores plataformas do Brasil." },
    { q: "E se eu não ver resultados?", a: "Se em 7 dias você não sentir que o material agregou valor à sua vida, devolvemos seu dinheiro sem burocracia." }
  ];

  return (
    <section className="py-24 px-6 bg-surface/20">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl font-display font-black text-center uppercase">DÚVIDAS <span className="text-primary">FREQUENTES</span></h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-glass rounded-2xl border border-white/5 overflow-hidden">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left font-bold hover:bg-white/5 transition-colors uppercase text-sm tracking-wide"
              >
                {item.q}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${active === i ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${active === i ? 'max-h-40 opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-8 text-white/50 leading-relaxed text-sm">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
          <Target className="text-white w-4 h-4" />
        </div>
        <span className="font-display font-black tracking-tighter">ALPHA<span className="text-primary">CORE</span></span>
      </div>
      
      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/30">
        <a href="#" className="hover:text-primary transition-colors">Termos</a>
        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
        <a href="#" className="hover:text-primary transition-colors">Suporte</a>
      </div>

      <div className="text-center space-y-4">
        <p className="text-[10px] text-white/20 max-w-2xl leading-relaxed uppercase tracking-tighter">
          ESTE SITE NÃO É AFILIADO AO GOOGLE OU FACEBOOK. OS RESULTADOS PODEM VARIAR DE ACORDO COM A APLICAÇÃO DO CONTEÚDO.
        </p>
        <p className="text-[10px] text-white/40">© 2024 Protocolo Alpha • Todos os Direitos Reservados</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-dark selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-8 left-6 right-6 z-40 md:hidden">
        <a 
          href="#checkout" 
          className="bg-primary btn-glow text-white py-5 rounded-2xl font-black uppercase tracking-widest text-center block shadow-2xl"
        >
          OBTER ACESSO - R$ 9,90
        </a>
      </div>
    </div>
  );
}
