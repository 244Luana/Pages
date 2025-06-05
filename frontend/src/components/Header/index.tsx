import { SHeader } from "./styles";
import BooksIcon from '../../assets/BooksIcon.png';

export function Header (){
    return(
        <SHeader>
            <h1>Pages & Pages</h1>
            <nav>
                <div>
                    <a href="index.html">Pagina Inicial</a>
                    <a>Reviews</a>
                    <a href="perfil.html">Meu Perfil</a>
                    <a href="login.html">Login</a>
                </div>
                <div>
                    <input placeholder="Busque aqui um livro ou usuário"></input>
                    <img src={BooksIcon} alt="Livros Logo" />
                </div>
            </nav>
        </SHeader>
    )
}