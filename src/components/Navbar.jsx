const Navbar = () => {
  return (
    <>
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://placehold.co/24x24"
              alt="Laundry logo"
              className="w-6 h-6"
            />
            <span className="text-xl font-bold text-foreground">Laundry</span>
          </div>

          <div className="flex space-x-6 text-foreground">
            <a href="#" className="hover:text-primary">
              Produk
            </a>
            <a href="#" className="hover:text-primary">
              Solusi
            </a>
            <a href="#" className="hover:text-primary">
              Fitur
            </a>
            <a href="#" className="hover:text-primary">
              Harga
            </a>
            <a href="#" className="hover:text-primary">
              Testimoni
            </a>
            <a href="#" className="hover:text-primary">
              Download
            </a>
          </div>

          <div>
            <button className="flex items-center space-x-2 border border-border px-4 py-2 rounded-full text-foreground hover:bg-secondary hover:text-secondary-foreground">
              <img
                src="https://placehold.co/16x16"
                alt="Demo icon"
                className="w-4 h-4"
              />
              <span>Demo Aplikasi</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
