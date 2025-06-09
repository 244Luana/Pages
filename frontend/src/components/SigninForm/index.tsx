import { useState } from 'react';

type SigninData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  nascimento: string;
  endereco: string;
  celular: string;
  idioma: string;
};

type SigninFormProps = {
  onSubmit: (data: SigninData) => void;
  isLoading?: boolean;
};

export function SigninForm({ onSubmit, isLoading = false }: SigninFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [celular, setCelular] = useState('');
  const [idioma, setIdioma] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    const data: SigninData = {
      name,
      email,
      password,
      confirmPassword,
      nascimento,
      endereco,
      celular,
      idioma,
    };

    onSubmit(data); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={nascimento}
        onChange={(e) => setNascimento(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Celular"
        value={celular}
        onChange={(e) => setCelular(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Idioma"
        value={idioma}
        onChange={(e) => setIdioma(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirme a senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
