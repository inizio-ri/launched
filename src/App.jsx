import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import './App.css'
import Companies from './components/Companies/Companies.jsx';
import Stats from './Stats/Stats.jsx';
import Featured from './components/Featured/Featured.jsx';
import FlipCarousel from './components/Course/Course.jsx';
import Media from './components/Media/Media.jsx';
import Abroad from './components/Abroad/Abroad.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Mentor from './components/Mentor/Mentor.jsx';
import Form from './components/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
      <Header />
      <Hero />
      </div>
      <Stats />
      <Companies />
      <Featured />
      <FlipCarousel />
      <Media/>
      <Abroad />
      <Testimonials />
      <Mentor />
      <Form />
      <Footer />
    </div>
  );
}

export default App