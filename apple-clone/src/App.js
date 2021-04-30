import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Square from './Components/Square';

function App() {
  return (
    <div className="App">
      {/* navbar component */}
      <Navbar/>
      {/* banners at top */}
      <div className="banner one">Evaluate COVID-19 symptoms and understand next steps</div>
      <div className="banner two"><div><span>Shop online</span> and get Specialist help, free no-contact delivery, and more.</div></div>
      {/* squares */}
      <Square />
      {/* footer */}
    </div>
  );
}

export default App;
