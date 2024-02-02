import './App.css';
import Greet, { Greet1 } from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/*  className="App-header" */}
      <header>
        {/* <Greet1 /> <!-- Functional Component -->
        <Greet /><!-- Functional Component -->
        <Welcome /> <!-- Class Component --> */}
        <Hello />
      </header>
    </div>
  );
}

export default App;