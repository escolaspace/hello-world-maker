const Navbar = () => {
  const scrollToCTA = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4">
      <div>
        <p className="font-display text-lg font-bold text-foreground">Dani Oliveira</p>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Secretária de Alto Valor</p>
      </div>
      <button
        onClick={scrollToCTA}
        className="flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-colors px-4 py-2 rounded-full text-sm font-medium"
      >
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
        Vagas abertas
      </button>
    </nav>
  );
};

export default Navbar;
