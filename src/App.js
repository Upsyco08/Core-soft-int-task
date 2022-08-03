import './App.css';

import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { MainPost } from './components/mainPost';
import { HistoryPost } from './components/historyPost';
import { AboutPost } from './components/aboutPost';
import { Services } from './components/services';
import { Projects } from './components/projects';

function App() {
  return (
    <>
      <Navbar />
      <MainPost />
      <HistoryPost />
      <AboutPost />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
