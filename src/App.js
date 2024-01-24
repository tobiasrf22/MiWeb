import { Principal } from './components/ui';
import logo from './logo.svg';
import './styles/app.scss';
import Secciones from './components/Secciones';
import NavegationMenu from './components/ui/NavegationMenu';
function App() {
  return (
    <>
    <NavegationMenu />
    <Secciones />
    </>
  );
}

export default App;
