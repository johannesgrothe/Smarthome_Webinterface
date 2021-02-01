import logo from '../logo.svg';
import './App.css';
import Header from "../components/Header/Header";
import SideNavPage from "../components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <SideNavPage/>
    </div>
  );
}

export default App;
