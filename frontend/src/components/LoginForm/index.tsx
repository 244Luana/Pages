import { SLogin } from "./styles";
import ImagemLogin from '../../assets/ImagemSignIn.png';
{/*import {  Link }         from "react-dom";*/}

export function LoginForm() {
  return (
    <SLogin>
      <header>
        <section>
          <h1>Bem-vindo de volta</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Digite seu email" />

            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />

            {/* <Link to="/forgotpassword">Esqueci minha senha</Link> */}

            <a href="/home">Entrar</a>

            <p>
              Ainda não tem uma conta? <a href="/signin">CADASTRE-SE</a>
            </p>
          </form>
        </section>

        <img src={ImagemLogin} alt="Imagem de leitura" />
      </header>
    </SLogin>
  );
}
