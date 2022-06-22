import './App.css';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Profile />
       <Login />
       <ChangeColor />
      </header>
    </div>
  );
}

export default App;
