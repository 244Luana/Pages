import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LoginForm } from '../../components/LoginForm';
import { useState } from 'react';
import { SLoginPage } from './styles'; 
import { Link } from 'react-router-dom';
import ImagemLogin  from "../../assets/ImagemLogin.png"

export function Login() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (credentials: { email: string; password: string }) => {
    setError(null);
    try {
      await login(credentials.email, credentials.password);
      navigate('/perfil');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Email ou senha incorretos.'); 
      }
    }
  };

  return (
    <SLoginPage>  
      <section> 
        <h1>Bem-vindo de volta</h1>
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} /> 
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p>Não tem uma conta? <Link to="/signin">Cadastre-se</Link></p>
      </section>
      <img src={ImagemLogin} alt="Ilustração Login" />
    </SLoginPage>
  );
}