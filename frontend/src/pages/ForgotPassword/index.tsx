import { useNavigate } from "react-router-dom";
import { PasswordForm } from "../../components/PasswordForm";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function ForgotPassword() {
  const navigate = useNavigate();

  const handleRecover = (email: string) => {
    alert(`Um link de recuperação foi enviado para ${email}`);
    navigate("/login");
  };

  return (
    <>
      <Header />
      <main className="forgot-password-container">
        <h1>Recuperar Senha</h1>
        <PasswordForm onSubmit={handleRecover} />
      </main>
      <Footer />
    </>
  );
}
