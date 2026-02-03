import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowRight,
  Zap,
  Eye,
  Target,
  UserCheck,
} from "lucide-react";

/* ===============================
   META PIXEL TYPESCRIPT FIX
================================ */
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/* ===============================
   HELPERS
================================ */
const trackPageView = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

const trackInitiateCheckout = (url: string) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout");
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  } else {
    window.location.href = url;
  }
};

/* ===============================
   NAVBAR
================================ */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center btn-glow">
          <Target className="text-white w-5 h-5" />
        </div>
        <span className="font-display text-xl font-extrabold tracking-tighter uppercase">
          ALPHA<span className="text-primary">CORE</span>
        </span>
      </div>

      <button
        onClick={() =>
          document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-primary text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all md:block hidden"
      >
        Acesso Imediato
      </button>
    </div>
  </nav>
);

/* ===============================
   HERO
================================ */
const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden">
    <div className="max-w-5xl mx-auto text-center space-y-8 relative">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
        <UserCheck className="w-4 h-4 fill-current" /> O Protocolo Definitivo de Evolução
      </div>

      <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter">
        DOMINE SUA <br />
        <span className="text-primary text-glow italic">IMAGEM</span> <br />E
        PRESENÇA.
      </h1>

      <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
        Não é sobre genética. É sobre{" "}
        <span className="text-white font-semibold">
          otimização estética, postura e mindset
        </span>{" "}
        em 30 dias.
      </p>

      <div className="flex flex-col items-center gap-6 pt-6">
        <button
          onClick={() =>
            document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-primary btn-glow text-white px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-widest flex items-center gap-3 w-full max-w-md justify-center group"
        >
          INICIAR MINHA EVOLUÇÃO
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-4 text-xs text-white/40 font-bold uppercase tracking-widest">
          <Zap className="w-4 h-4 text-primary" /> +8.500 homens transformados
        </div>
      </div>
    </div>
  </section>
);

/* ===============================
   PRICING
================================ */
const Pricing = () => (
  <section id="checkout" className="py-32 px-6 relative">
    <div className="max-w-xl mx-auto">
      <div className="bg-glass p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-display font-black">PROTOCOLO ALPHA</h2>

          <div className="flex flex-col items-center">
            <span className="text-white/30 line-through text-lg">De R$ 67,00</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">Por</span>
              <span className="text-8xl font-display font-black text-glow">9,90</span>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <button
              onClick={() => trackInitiateCheckout("https://pay.kiwify.com.br/PEGgdkP")}
              className="w-full bg-primary btn-glow text-white py-6 rounded-2xl text-xl font-black uppercase tracking-widest flex items-center justify-center gap-3"
            >
              GARANTIR MINHA VAGA
              <ArrowRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-6 opacity-50">
              <Eye className="h-5 text-primary" />
              <Eye className="h-5 text-white" />
              <Eye className="h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ===============================
   DEPOIMENTOS
================================ */
const Testimonials = () => (
  <section className="py-24 px-6 bg-surface/10">
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-display font-black text-center uppercase mb-12">
        O QUE HOMENS QUE USARAM ESTÃO DIZENDO
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=crop&h=512&w=512"
            alt="João S."
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <p className="text-white/80 italic">
              "Após aplicar técnicas de otimização de postura, respiração consciente e micro-hábitos do Protocolo Alpha, minha presença mudou completamente. Minha energia e confiança cresceram muito."
            </p>
            <span className="text-xs text-white/40 font-bold mt-2 block">
              — João S., treinos de postura e micro-hábitos
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
            alt="Carlos M."
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <p className="text-white/80 italic">
              "Usei os micro-drills de imagem e técnicas de respiração do Protocolo Alpha. Em 30 dias notei diferença enorme: mais foco, magnetismo e segurança social."
            </p>
            <span className="text-xs text-white/40 font-bold mt-2 block">
              — Carlos M., micro-drills e respiração
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
          <img
            src="https:https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
            alt="Rafael P."
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <p className="text-white/80 italic">
              "Apliquei a sequência de micro-movimentos, ajustes de postura e treino de presença. Em poucas semanas minha postura melhorou e minha energia chamou atenção positiva das pessoas."
            </p>
            <span className="text-xs text-white/40 font-bold mt-2 block">
              — Rafael P., micro-movimentos e presença
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);


/* ===============================
   FAQ
================================ */
const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  const items = [
    { q: "Como vou receber o material?", a: "Após a aprovação do pagamento, você recebe o acesso por e-mail." },
    { q: "O pagamento é seguro?", a: "Sim. Processado por plataformas líderes no Brasil." },
    { q: "Existe garantia?", a: "Você tem 7 dias para testar sem risco." },
  ];

  return (
    <section className="py-24 px-6 bg-surface/20">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl font-display font-black text-center uppercase">
          DÚVIDAS <span className="text-primary">FREQUENTES</span>
        </h2>

        {items.map((item, i) => (
          <div key={i} className="bg-glass rounded-2xl border border-white/5 overflow-hidden">
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full px-8 py-6 flex items-center justify-between font-bold uppercase text-sm"
            >
              {item.q}
              <ChevronDown className={`w-5 h-5 transition-transform ${active === i ? "rotate-180 text-primary" : ""}`} />
            </button>

            {active === i && (
              <div className="px-8 pb-6 text-white/50 text-sm">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ===============================
   FOOTER
================================ */
const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 text-center">
    <p className="text-[10px] text-white/30">© 2024 Protocolo Alpha • Todos os direitos reservados</p>
  </footer>
);

/* ===============================
   APP
================================ */
export default function App() {
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div className="bg-dark selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />

      {/* CTA MOBILE COM TRACKING */}
      <div className="fixed bottom-8 left-6 right-6 z-40 md:hidden">
        <button
          onClick={() => trackInitiateCheckout("https://pay.kiwify.com.br/PEGgdkP")}
          className="bg-primary btn-glow text-white py-5 rounded-2xl font-black uppercase tracking-widest text-center block shadow-2xl w-full"
        >
          OBTER ACESSO - R$ 9,90
        </button>
      </div>
    </div>
  );
}
