import { SHeader } from "./styles";
import BooksIcon from '../../assets/BooksIcon.png';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <SHeader>
            <h1>Pages & Pages</h1>
            <nav>
                <div>
                    <Link to="/">Página Inicial</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/perfil">Meu Perfil</Link>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <input placeholder="Busque aqui um livro ou usuário"></input>
                    <img src={BooksIcon} alt="Livros Logo" />
                </div>
            </nav>
        </SHeader>
    );
}