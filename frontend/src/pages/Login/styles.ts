import styled from "styled-components";

export const SLoginPage = styled.main` // Use styled.main ou styled.div para a página
  height: 100vh;
  background: linear-gradient(to right, #ffffff 50%, #01232F 50%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  // Estilos para o h1 na página Login
  h1 {
    font-size: 35px;
    color: #01232F;
    font-weight: 500;
    font-family: 'Eczar', serif;
    text-align: left;
  }

  // Estilos para o LoginForm (que é o form em si)
  form { /* Este seletor afeta o <form> dentro da SLoginPage, que é o LoginForm */
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;

    label {
      font-size: 16px;
      color: #01232F;
    }

    input {
      padding: 12px;
      border: none;
      border-radius: 12px;
      background-color: #f0f0f0;
      font-size: 14px;
    }

    a { /* Links dentro do formulário */
      font-size: 12px;
      color: #01232F;
      text-align: right;
      text-decoration: none;
    }

    /* Estilo para o link de cadastro, se ele estiver dentro do formulário */
    /* A etiqueta a[href="index.html"] não é boa prática no React-Router-Dom.
       Você deve usar <Link to="/register">Cadastre-se</Link> e estilizá-lo com um className ou um styled(Link) */
    a.register-link { /* Exemplo de classe para o link de cadastro */
      display: inline-block;
      padding: 15px 40px;
      background-color: #aef7f7;
      color: #001f26;
      text-decoration: none;
      border-radius: 50px;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
    }


    p { /* Parágrafo "Não tem uma conta?" */
      font-size: 14px;
      margin-top: 10px;

      a { /* Link "Cadastre-se" dentro do parágrafo */
        font-weight: bold;
        color: #01232F;
        text-decoration: underline;
        font-size: 14px;
      }
    }
  }

  // Estilos para a imagem (se houver uma imagem na página Login)
  img {
    max-width: 650px;
    height: auto;
  }

  // Media Queries
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    section { /* Se você tiver uma <section> na página Login */
      max-width: 90%;
    }

    img {
      max-width: 90%;
      margin-top: 20px;
    }
  }
`;