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
      <main className="forgotpasswordcontainer">
        <PasswordForm onSubmit={handleRecover} />
      </main>
      <Footer />
    </>
  );
}
