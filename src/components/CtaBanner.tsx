import { motion } from "framer-motion";

const CtaBanner = () => (
  <section className="py-10">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-deep-gradient rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
      >
        <div className="absolute -right-10 -top-24 w-60 h-60 rounded-full bg-primary/10" />
        <div className="relative z-10">
          <h2 className="text-primary-foreground text-2xl md:text-3xl font-extrabold mb-2">Pronto para regularizar?</h2>
          <p className="text-primary-foreground/75">Chame agora e resolva ainda hoje.</p>
        </div>
        <a
          href="https://wa.me/5573988378774?text=Olá!%20Preciso%20de%20ajuda%20com%20documentação%20veicular."
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-2 bg-card text-foreground px-7 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 shrink-0"
        >
          <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.111.553 4.094 1.515 5.815L.05 23.5l5.832-1.529A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.876 0-3.628-.52-5.124-1.424l-.368-.218-3.81.999 1.016-3.712-.24-.379A9.692 9.692 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
          Chamar no WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
