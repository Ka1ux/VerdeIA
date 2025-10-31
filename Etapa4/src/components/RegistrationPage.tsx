import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', cpf: '', cep: '', state: '',
    city: '', street: '', number: '', complement: ''
  });

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
    'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Cadastro realizado com sucesso! 🌱');
    setFormData({
      name: '', email: '', phone: '', cpf: '', cep: '', state: '',
      city: '', street: '', number: '', complement: ''
    });
  };

  return (
    <div className="py-16">
      <section className="container mx-auto px-6 text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-emerald-400">
          📝 Cadastro
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Preencha o formulário abaixo para se cadastrar em nossos projetos.
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-2xl">
        <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Dados Pessoais */}
            <div>
              <h2 className="text-xl font-bold text-emerald-400 mb-6">Dados Pessoais</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Seu nome completo"
                    className="bg-zinc-900 border-zinc-700 text-white"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-white">E-mail *</Label>
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
                    <Label htmlFor="phone" className="text-white">Telefone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="(00) 00000-0000"
                      className="bg-zinc-900 border-zinc-700 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cpf" className="text-white">CPF *</Label>
                  <Input
                    id="cpf"
                    value={formData.cpf}
                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    required
                    placeholder="000.000.000-00"
                    maxLength={14}
                    className="bg-zinc-900 border-zinc-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div>
              <h2 className="text-xl font-bold text-emerald-400 mb-6">Endereço</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cep" className="text-white">CEP *</Label>
                    <Input
                      id="cep"
                      value={formData.cep}
                      onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                      required
                      placeholder="00000-000"
                      className="bg-zinc-900 border-zinc-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-white">Estado *</Label>
                    <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                      <SelectTrigger className="bg-zinc-900 border-zinc-700 text-white">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                        {estados.map((estado) => (
                          <SelectItem key={estado} value={estado}>{estado}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="city" className="text-white">Cidade *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    placeholder="Sua cidade"
                    className="bg-zinc-900 border-zinc-700 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="street" className="text-white">Rua *</Label>
                  <Input
                    id="street"
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    required
                    placeholder="Nome da rua"
                    className="bg-zinc-900 border-zinc-700 text-white"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="number" className="text-white">Número *</Label>
                    <Input
                      id="number"
                      value={formData.number}
                      onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      required
                      placeholder="123"
                      className="bg-zinc-900 border-zinc-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="complement" className="text-white">Complemento</Label>
                    <Input
                      id="complement"
                      value={formData.complement}
                      onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                      placeholder="Apto, bloco... (opcional)"
                      className="bg-zinc-900 border-zinc-700 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6">
              Cadastrar
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
