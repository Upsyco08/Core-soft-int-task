import './App.css';

import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { MainPost } from './components/mainPost';
import { HistoryPost } from './components/historyPost';
import { AboutPost } from './components/aboutPost';
import { Services } from './components/services';
import { Projects } from './components/projects';
import { Gallery } from './components/gallery/Gallery';
import { DashLine } from './components/common/dashLine';

function App() {
  return (
    <div>
      <Navbar />
      <MainPost />
      <HistoryPost />
      <AboutPost />
      <Services />
      <Projects />
      <Gallery />
      <Footer />
      <DashLine />
    </div>
  );
}

export default App;
