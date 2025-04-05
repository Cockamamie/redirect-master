import './App.css';
import Header from './Header/Header.tsx';
import Provider from 'components/ui/Provider.tsx'
import ReplacePage from 'App/ReplacePage/ReplacePage.tsx';

export default function App() {
  return (
    <Provider>
      <Header></Header>
      <ReplacePage/>
    </Provider>
  );
};
