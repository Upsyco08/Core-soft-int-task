import './App.css';

import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { MainPost } from './components/mainPost';
import { HistoryPost } from './components/historyPost';

function App() {
  return (
    <>
      <Navbar />
      <MainPost />
      <HistoryPost />
      <Footer />
    </>
  );
}

export default App;
