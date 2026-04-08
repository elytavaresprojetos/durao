import { motion } from "framer-motion";
import { Star, Shield, Clock } from "lucide-react";

const Testimonials = () => (
  <section id="depoimentos" className="py-20 lg:py-28 bg-soft">
    <div className="container">
      <div className="text-center mb-14">
        <span className="inline-block bg-card text-primary font-extrabold text-sm px-4 py-1.5 rounded-full mb-3">
          Depoimentos
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 border border-border shadow-sm"
        >
          <div className="flex gap-1 text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-foreground/80 leading-relaxed mb-6">
            "Serviço de excelência! Equipe competente e qualificada. Confio e recomendo! 
            Tudo resolvido de forma rápida e sem dor de cabeça."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center text-primary-foreground font-bold">
              C
            </div>
            <div>
              <strong className="text-foreground text-sm">Cliente Verificado</strong>
              <span className="block text-muted-foreground text-xs">Via Instagram</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid gap-4"
        >
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-soft flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <strong className="text-foreground text-sm">100% Seguro</strong>
              <p className="text-muted-foreground text-xs">Processos regulamentados pelo Detran</p>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-soft flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <strong className="text-foreground text-sm">Atendimento Rápido</strong>
              <p className="text-muted-foreground text-xs">Respostas em minutos pelo WhatsApp</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Testimonials;
