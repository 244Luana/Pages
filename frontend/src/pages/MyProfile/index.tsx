import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SProfile } from './styles';

export function MyProfile() {

  return (
    <SProfile>
      <Header />
        <main>
            <h2>Dados do Usuário</h2>
        
            <form className="form-grid">
                <figure>
                    <img src="img/User.png" alt="Usuário" />
                </figure>
            
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" />
                </div>
            
                <div className="form-group">
                    <label htmlFor="nascimento">Data de Nascimento</label>
                    <input type="date" id="nascimento" />
                </div>
            
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
            
                <div className="form-group">
                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" id="endereco" />
                </div>
            
                <div className="form-group">
                    <label htmlFor="celular">Celular</label>
                    <input type="tel" id="celular" />
                </div>
            
                <div className="form-group">
                    <label htmlFor="idioma">Idioma</label>
                    <select id="idioma">
                        <option>Português</option>
                        <option>Inglês</option>
                        <option>Espanhol</option>
                    </select>
                </div>
            
                <div className="form-button">
                    <button type="submit">Salvar</button>
                </div>
            </form>
            
        </main>
        <Footer />
    </SProfile>
  );
}
