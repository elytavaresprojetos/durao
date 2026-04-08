import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const links = [
  {
    title: "Detran Bahia",
    desc: "Acesse o portal oficial do Detran-BA para consultas, agendamentos e serviços online.",
    url: "https://www.detran.ba.gov.br",
  },
  {
    title: "Sentran Itabuna",
    desc: "Superintendência de Trânsito de Itabuna - consulte multas, infrações e serviços locais.",
    url: "https://www.itabuna.ba.gov.br/sentran",
  },
];

const UsefulLinks = () => (
  <section id="links" className="py-20 lg:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <span className="inline-block bg-soft text-primary font-extrabold text-sm px-4 py-1.5 rounded-full mb-3">
          Links Úteis
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
          Acesso rápido aos órgãos de trânsito
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {links.map((link, i) => (
          <motion.a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{link.title}</h3>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{link.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default UsefulLinks;
