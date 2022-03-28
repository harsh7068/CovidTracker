import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Filter from './Filter/Filter';
import Cards from './Cards/Cards';
import API from './API/API';
import CountryPicker from './CountryPicker/CountryPicker';
function App() {
  return (
    <>
    <Header />
    <Filter />
    <Cards />
    
    
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
