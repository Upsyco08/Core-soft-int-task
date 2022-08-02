import './App.css';

import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { MainPost } from './components/mainPost';

function App() {
  return (
    <>
      <Navbar />
      <MainPost />
      <Footer />
    </>
  );
}

export default App;
