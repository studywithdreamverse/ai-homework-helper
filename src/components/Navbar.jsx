function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Study with Dreamverse AI
        </h1>
        <p className="text-pink-200 mt-1">
          Your Personal AI Tutor
        </p>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-lg">
        <a href="#" className="hover:text-pink-300 transition">Home</a>
        <a href="#" className="hover:text-pink-300 transition">Features</a>
        <a href="#" className="hover:text-pink-300 transition">Pricing</a>
        <a href="#" className="hover:text-pink-300 transition">About</a>
      </div>

      {/* Button */}
      <button className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;