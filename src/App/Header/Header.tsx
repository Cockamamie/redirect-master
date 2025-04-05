import { ColorModeButton } from 'components/ui/ColorMode.tsx';
import Menu from 'App/Header/Menu.tsx';
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="logoContainer"></div>
      <div className="menuContainer">
        <Menu />
      </div>
      <ColorModeButton />
    </header>
  );
}