import { motion } from "framer-motion";
import { MapPin, Instagram } from "lucide-react";

const Contact = () => (
  <section id="contato" className="py-20 lg:py-28 bg-soft">
    <div className="container">
      <div className="text-center mb-14">
        <span className="inline-block bg-card text-primary font-extrabold text-sm px-4 py-1.5 rounded-full mb-3">
          Contato
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
          Vamos conversar?
        </h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Estamos prontos para atender você da melhor forma possível.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <a
            href="https://wa.me/5573988378774"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <div className="w-13 h-13 rounded-xl bg-soft flex items-center justify-center shrink-0 p-3">
              <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.111.553 4.094 1.515 5.815L.05 23.5l5.832-1.529A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.876 0-3.628-.52-5.124-1.424l-.368-.218-3.81.999 1.016-3.712-.24-.379A9.692 9.692 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
            </div>
            <div>
              <strong className="text-foreground text-sm">WhatsApp</strong>
              <span className="block text-muted-foreground text-sm">(73) 98837-8774</span>
            </div>
          </a>

          <a
            href="https://instagram.com/durao_despachante"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <div className="w-13 h-13 rounded-xl bg-soft flex items-center justify-center shrink-0 p-3">
              <Instagram className="w-6 h-6 text-primary" />
            </div>
            <div>
              <strong className="text-foreground text-sm">Instagram</strong>
              <span className="block text-muted-foreground text-sm">@durao_despachante</span>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 shadow-sm">
            <div className="w-13 h-13 rounded-xl bg-soft flex items-center justify-center shrink-0 p-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <strong className="text-foreground text-sm">Localização</strong>
              <span className="block text-muted-foreground text-sm">Bairro Jardim Primavera - Itabuna, BA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="bg-deep-gradient rounded-2xl min-h-[300px] flex flex-col items-center justify-center gap-4 text-center p-8">
            <MapPin className="w-10 h-10 text-primary-foreground/60" />
            <p className="text-primary-foreground font-semibold">
              Jardim Primavera<br />Itabuna - BA
            </p>
            <a
              href="https://maps.google.com/?q=Jardim+Primavera+Itabuna+BA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card text-foreground px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" /> Ver no Mapa
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
