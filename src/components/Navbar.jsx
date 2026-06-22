export default function Navbar() {
  const navItems = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wider">PORTFOLIO</div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}