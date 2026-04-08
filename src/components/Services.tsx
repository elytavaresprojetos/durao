import { motion } from "framer-motion";
import { Car, ArrowRightLeft, RefreshCw, FileText } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "1º Emplacamento",
    desc: "Veículo zero km? Cuidamos de tudo para você sair rodando legalmente.",
    featured: false,
  },
  {
    icon: ArrowRightLeft,
    title: "Transferência",
    desc: "Comprou ou vendeu? Transferimos com agilidade e segurança.",
    featured: true,
    badge: "Mais procurado",
  },
  {
    icon: RefreshCw,
    title: "Mudança de Categoria",
    desc: "Particular para aluguel (ou vice-versa) com a documentação correta.",
    featured: false,
  },
  {
    icon: FileText,
    title: "2ª Via de DUT",
    desc: "Perdeu o documento? Emitimos a segunda via rapidamente.",
    featured: false,
  },
];

const Services = () => (
  <section id="servicos" className="py-20 lg:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <span className="inline-block bg-soft text-primary font-extrabold text-sm px-4 py-1.5 rounded-full mb-3">
          Nossos Serviços
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
          Soluções completas para seu veículo
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden ${
              s.featured
                ? "bg-deep-gradient text-primary-foreground shadow-lg"
                : "bg-card border border-border shadow-sm"
            }`}
          >
            {s.badge && (
              <span className="absolute top-3 right-[-28px] bg-primary text-primary-foreground text-[11px] font-extrabold px-10 py-1 rotate-45">
                {s.badge}
              </span>
            )}
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                s.featured ? "bg-primary-foreground/15" : "bg-soft"
              }`}
            >
              <s.icon className={`w-7 h-7 ${s.featured ? "text-primary-foreground" : "text-primary"}`} />
            </div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className={`text-sm leading-relaxed ${s.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {s.desc}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
