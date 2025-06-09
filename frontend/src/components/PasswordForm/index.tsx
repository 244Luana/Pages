import { useState } from "react";
import { SPassword } from "./styles";
import ForgotPassword from "../../assets/ForgotPassword.png";

type PasswordFormProps = {
  onSubmit: (email: string) => void;
};

export function PasswordForm({ onSubmit }: PasswordFormProps) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !nome) {
      alert("Preencha todos os campos");
      return;
    }
    onSubmit(email);
  };

  return (
    <SPassword>
      <section>
        <h1>Esqueci a Senha</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>Um email para redefinir sua senha chegará</p>
          <p>na sua caixa postal em alguns minutos</p>

          <button type="submit">Enviar</button>

          <a href="#"><u>Não recebi o email</u></a>
        </form>
      </section>

      <img src={ForgotPassword} alt="Imagem de leitura" />
    </SPassword>
  );
}
