import { SSignin } from '../../components/SigninForm/styles'; 
import { SigninForm } from '../../components/SigninForm';
import ImagemSignIn from '../../assets/ImagemSignIn.png'; 
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

export function Signin() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: SigninData) => {
    setLoading(true);

    try {
      console.log('Dados enviados:', data);

      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SSignin>
      <section>
        <h1>Cadastro</h1>
        <SigninForm onSubmit={handleSubmit} isLoading={loading} />
      </section>
      <div className="image-side">
        <img src={ImagemSignIn} alt="Cadastro" />
      </div>
    </SSignin>
  );
}
