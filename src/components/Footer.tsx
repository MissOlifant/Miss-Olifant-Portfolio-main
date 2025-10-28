const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} <span className="gradient-text font-semibold">Nombulelo Olifant</span>. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              Built with passion, powered by innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
