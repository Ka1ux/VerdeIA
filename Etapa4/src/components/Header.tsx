import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

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
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-2 rounded-lg ${
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
            className="md:hidden p-2 hover:bg-zinc-800 rounded-lg"
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
                className={`block px-4 py-3 rounded-lg ${
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
