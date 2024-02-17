/*import logo from './logo.svg';*/
import './App.css';
import ImageSlider from './components/ImageSlider';
import {SliderData} from './components/SliderData';

function App() {
  return <ImageSlider slides={SliderData} />;
  
  /*( 
    <div className="App">
      Slider
      

       </div>
  );*/
}

export default App;
