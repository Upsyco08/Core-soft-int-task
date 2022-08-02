import './App.css';
import { Construction } from './components/construction';
import {Footer} from './components/footer';
import {Navbar} from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Construction />
      <Footer />
    </>
  );
}

export default App;
