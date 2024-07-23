import './App.css';
import { Header } from './Header';
import IconGrid from './IconGrid';
import { MastHead } from './MastHead';
import { Footer } from './Footer';
import { CallToAction } from './CallToAction';
import { Testimonials } from './Testimonials';
import { ImageShowCase } from './ImageShowCase';


function App() {
  return (
    <div >
      <Header />
      <MastHead />
      <IconGrid />
      <ImageShowCase/>
      <Testimonials/>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
