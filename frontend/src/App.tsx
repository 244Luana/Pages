import { AppRoutes } from "./routes";
import { AuthProvider } from "./contexts/AuthProvider"; 
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
