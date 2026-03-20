export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="font-bold">Gayathri</h1>
        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}