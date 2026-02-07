import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserFrom';

function App() {
  return (
    <div className="App">
  <h1 className="text-3xl font-bold underline">
      User Dashboard
    </h1>
      <div>
        <UserForm/>
      </div>
    </div>
  );
}

export default App;
