import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import JoinUs from './components/joinus/JoinUs';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonals from './components/testimonals/Testimonals';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonals/>
      <JoinUs/>
      <Footer/>
    </div>
  );
}

export default App;
