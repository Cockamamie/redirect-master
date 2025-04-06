import './App.css';
import Header from './Header/Header.tsx';
import Provider from 'components/ui/Provider.tsx'
import ReplacePage from 'App/ReplacePage/ReplacePage.tsx';
import Main from 'App/Main/Main.tsx';
import Footer from 'App/Footer/Footer.tsx';

export default function App() {
  return (
    <Provider>
      <Header></Header>
      <Main>
        <ReplacePage/>
      </Main>
      <Footer></Footer>
    </Provider>
  );
};
