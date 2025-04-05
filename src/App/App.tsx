import './App.css';
import Header from './Header/Header.tsx';
import Provider from 'components/ui/Provider.tsx'

export default function App() {
  return (
    <Provider>
      <Header></Header>
    </Provider>
  );
};
