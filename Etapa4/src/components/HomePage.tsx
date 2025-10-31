import { Target, Eye, Heart, Mail, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { useState } from 'react';

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast.success('Mensagem enviada com sucesso! 🌱');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const cards = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Utilizar inteligência artificial para monitorar, proteger e restaurar o meio ambiente.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência global em soluções tecnológicas para sustentabilidade.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Inovação, sustentabilidade, educação e transparência.',
    },
  ];

  return (
    <div className="py-16">
      {/* Hero */}
      <section className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-6xl mb-4 text-emerald-400">
          🌱 Bem-vindo ao VerdeIA
        </h1>
        <p className="text-2xl text-zinc-300 mb-4">
          Tecnologia + Natureza = Futuro Sustentável
        </p>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Somos uma ONG dedicada a combinar inteligência artificial com preservação ambiental.
        </p>
      </section>

      {/* Mission Cards */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl text-center mb-12 text-emerald-400">
          Nossa Missão
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-emerald-500 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-emerald-400 mb-3">{card.title}</h3>
              <p className="text-zinc-300">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 max-w-xl">
        <h2 className="text-3xl text-center mb-8 text-emerald-400">
          Entre em Contato
        </h2>

        <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Seu nome completo"
                className="bg-zinc-900 border-zinc-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="seuemail@exemplo.com"
                className="bg-zinc-900 border-zinc-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2">
                Mensagem *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Digite sua mensagem..."
                rows={5}
                className="bg-zinc-900 border-zinc-700 text-white resize-none"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
