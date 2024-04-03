// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" contact="Contact" />
      {/* passing props */}
      {/* <Navbar/> */}


      <div className="container">
        <TextForm heading="Enter the text to analyze below:"/>
      </div> 
      
     {/* <About/> */}




    </>
  );
}

export default App;
