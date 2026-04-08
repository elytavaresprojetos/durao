import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-lg">D</span>
          </div>
          <span className={`font-semibold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Durão <strong className="font-extrabold">Despachante</strong>
          </span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`md:flex items-center gap-8 ${
            menuOpen
              ? "flex flex-col absolute top-full right-4 bg-card rounded-2xl shadow-lg border border-border p-4 min-w-[220px] gap-3"
              : "hidden"
          }`}
        >
          <li>
            <a
              href="#servicos"
              onClick={() => setMenuOpen(false)}
              className={`font-medium transition-colors hover:text-primary ${
                scrolled || menuOpen ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#depoimentos"
              onClick={() => setMenuOpen(false)}
              className={`font-medium transition-colors hover:text-primary ${
                scrolled || menuOpen ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              Depoimentos
            </a>
          </li>
          <li>
            <a
              href="#links"
              onClick={() => setMenuOpen(false)}
              className={`font-medium transition-colors hover:text-primary ${
                scrolled || menuOpen ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              Links Úteis
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className={`font-medium transition-colors hover:text-primary ${
                scrolled || menuOpen ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              Contato
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5573988378774?text=Olá!%20Gostaria%20de%20informações%20sobre%20os%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gradient text-primary-foreground px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.111.553 4.094 1.515 5.815L.05 23.5l5.832-1.529A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.876 0-3.628-.52-5.124-1.424l-.368-.218-3.81.999 1.016-3.712-.24-.379A9.692 9.692 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
              Fale Agora
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
