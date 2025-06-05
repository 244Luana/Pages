import { SSignin } from "./styles";
import imagemSignIn from "../../assets/ImagemSignIn.png"; 

export function SigninForm() {
  return (
    <SSignin>
      <section>
        <h1>Bem Vindo!</h1>
        <form>
          <label htmlFor="nomecompleto">Nome Completo:</label>
          <input type="text" id="nomecompleto" placeholder="Digite seu nome completo" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Digite seu email" />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Digite uma nova senha" />

          <label htmlFor="confirmaçaosenha">Confirmação da Senha:</label>
          <input type="password" id="confirmaçaosenha" placeholder="Digite a senha novamente" />

          <a href="index.html">Cadastrar</a>

          <p>Já tem uma conta? <a href="login.html">ENTRE</a></p>
        </form>
      </section>

      <img src={imagemSignIn} alt="Imagem de leitura" />
    </SSignin>
  );
}
