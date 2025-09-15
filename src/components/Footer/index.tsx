const Footer = () => {
  return (
    <footer className="bg-amber-100 border-t border-amber-300 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-black">
        <h2 className="text-xl font-bold text-black">🍴 Sree's Food</h2>
        <nav className="flex gap-6 text-sm mt-4 md:mt-0">
          <a href="#" className="hover:text-orange-600 transition">Home</a>
          <a href="#" className="hover:text-orange-600 transition">Profile</a>
          <a href="#" className="hover:text-orange-600 transition">Category</a>
          <a href="#" className="hover:text-orange-600 transition">Country</a>
        </nav>
        <p className="text-xs text-black mt-4 md:mt-0">
          © {new Date().getFullYear()} Sree's Food. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
