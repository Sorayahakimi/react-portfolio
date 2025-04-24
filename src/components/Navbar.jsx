function Navbar() {
  return (
    <nav className="bg-black text-white p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Thuraya</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
