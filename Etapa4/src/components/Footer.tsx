import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ka1ux/VerdeIA', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contato@verdeia.com', label: 'E-mail' },
  ];

  return (
    <footer className="mt-20 border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <h2 className="text-xl text-emerald-400 mb-4">
              Conecte-se conosco
            </h2>
            
            <div className="flex gap-4 justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-emerald-500 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <p className="text-zinc-400">
            💬 Cada mensagem é uma nova semente que pode mudar o mundo.
          </p>

          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} VerdeIA. Desenvolvido com <span className="text-emerald-400">♥</span> para um futuro sustentável.
          </p>
        </div>
      </div>
    </footer>
  );
}
