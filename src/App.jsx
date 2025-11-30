import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import './App.css'
import Companies from './components/Companies/Companies.jsx';
import Stats from './Stats/Stats.jsx';
import Featured from './components/Featured/Featured.jsx';
import FlipCarousel from './components/Course/Course.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';

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
      <Testimonials />
    </div>
  );
}

export default App