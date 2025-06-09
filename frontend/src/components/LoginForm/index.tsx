import { useState } from 'react';

type LoginFormProps = {
  onSubmit: (credentials: { email: string; password: string }) => void;
  isLoading?: boolean; 
};

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}> 
        {isLoading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}