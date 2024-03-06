import './App.css';
import About from './Component/About';
import Animation from './Component/Animation';
import HomeSlider from './Component/HomeSlider';
import TopNav from './Component/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <HomeSlider />
      <Animation />
      <About />
    </div>
  );
}

export default App;
