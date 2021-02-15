import logo from '../logo.svg';
import './App.css';
import Header from "../components/Header/Header";
import PagesLayout from "../components/PagesLayout";

function App() {
    return (
        <div className="App">
            <div>
                <Header logo={logo}/>
            </div>
            <div>
                <PagesLayout/>
            </div>
        </div>
    );
}

export default App;
