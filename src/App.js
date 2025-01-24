import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';

function App() {
  return (
    <>
      <Navbar title="Text Specifier" text="About us" />
      <div className="container my-3">
        <TextForm heading="Enter the text" />
        <About />
      </div>
    </>
  );
}

export default App;
