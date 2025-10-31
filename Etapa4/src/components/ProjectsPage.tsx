import { Satellite, BookOpen, Trees, Users, DollarSign, Handshake } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      icon: Satellite,
      title: 'IA pelo Planeta',
      description: 'Utilizamos redes neurais convolucionais para analisar imagens de satélite em tempo real, detectando áreas de desmatamento.',
      features: [
        'Monitoramento em tempo real de áreas florestais',
        'Alertas automáticos para desmatamento ilegal',
        'Parceria com órgãos ambientais governamentais',
      ],
    },
    {
      icon: BookOpen,
      title: 'Consciente Digital',
      description: 'Oferecemos oficinas gratuitas em escolas públicas, ensinando programação e conscientização ambiental.',
      features: [
        'Workshops de programação para jovens',
        'Educação ambiental através da tecnologia',
        'Material didático gratuito e acessível',
      ],
    },
    {
      icon: Trees,
      title: 'Verde nas Ruas',
      description: 'Promovemos o plantio de árvores em áreas urbanas usando IA para mapear os melhores locais.',
      features: [
        'Análise inteligente de locais para plantio',
        'Monitoramento do crescimento das árvores',
        'Engajamento comunitário e voluntariado',
      ],
    },
  ];

  const ways = [
    { icon: Users, title: 'Voluntariado', description: 'Contribua com seu tempo e habilidades.' },
    { icon: DollarSign, title: 'Doações', description: 'Ajude a expandir nossos projetos.' },
    { icon: Handshake, title: 'Parcerias', description: 'Amplie o impacto positivo.' },
  ];

  return (
    <div className="py-16">
      {/* Hero */}
      <section className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-6xl mb-4 text-emerald-400">
          🚀 Nossos Projetos
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Conheça nossas iniciativas que combinam inteligência artificial com sustentabilidade.
        </p>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-6 mb-20 max-w-4xl space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-emerald-500 flex items-center justify-center">
                <project.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl text-emerald-400">{project.title}</h2>
            </div>

            <p className="text-zinc-300 mb-6">{project.description}</p>

            <div className="space-y-3 bg-zinc-900 p-6 rounded-xl">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl text-center mb-12 text-emerald-400">
          Seja Parte da Mudança
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ways.map((way) => (
            <div key={way.title} className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 text-center">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-6 mx-auto">
                <way.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3">{way.title}</h3>
              <p className="text-zinc-400">{way.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
