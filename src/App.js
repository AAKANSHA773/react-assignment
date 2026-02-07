
import './App.css';
import UserForm from './components/UserFrom';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
  <h1 className="text-3xl font-bold text-cyan-950">
      User Dashboard
    </h1>
      <div className=' m-20'>
        {/* <UserForm/> */}
        <UserList/>
      </div>
    </div>
  );
}

export default App;
