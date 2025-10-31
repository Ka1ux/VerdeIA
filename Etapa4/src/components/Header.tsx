import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/projetos', label: 'Nossos Projetos' },
    { path: '/cadastro', label: 'Cadastro' },
  ];

  return (
    <header className="bg-zinc-950 border-b border-zinc-800">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <svg className="h-14 w-auto" viewBox="0 0 200 60">
              <path d="M25 10 Q30 5, 35 10 L42 30 Q43 35, 40 38 L35 45 Q32 48, 28 45 L20 35 Q18 30, 20 25 Z" fill="#22c55e"/>
              <path d="M28 15 L28 42 M28 22 L23 27 M28 28 L33 33 M28 35 L24 39" stroke="#86efac" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="28" cy="15" r="2" fill="#4ade80"/>
              <circle cx="23" cy="27" r="2" fill="#4ade80"/>
              <circle cx="33" cy="33" r="2" fill="#4ade80"/>
              <circle cx="28" cy="42" r="2" fill="#4ade80"/>
              <path d="M28 45 Q26 50, 28 55" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <text x="55" y="38" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700" fill="#22c55e">Verde</text>
              <text x="122" y="38" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700" fill="#ffffff">IA</text>
              <text x="55" y="50" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="400" fill="#a1a1aa" letterSpacing="0.5">TECNOLOGIA + NATUREZA</text>
            </svg>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-emerald-500 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-emerald-500 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
