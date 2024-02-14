import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import Greet, { Greet1 } from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/*  className="App-header" */}
      <header>
        {/* <Greet1 /> <!-- Functional Component -->
        <Greet /><!-- Functional Component -->
        <Welcome /> <!-- Class Component --> */}
        {/* <Hello /> */}
        {/* <Greet name="Deneshwara" heroName="Spiderman">
          <p> This is children props </p>
        </Greet>
        <Greet name="Sai" heroName="batman">
          <button> Click me </button>
        </Greet>
        <Greet name="Ila" heroName="DC">
          <input type="text"></input>
        </Greet>

        <Welcome name="Dineshwara" heroName="Spiderman">
          <button> Click me </button>
        </Welcome>
        <Welcome name="Sai" heroName="batman">
          <p> This is children props </p>
        </Welcome>
        <Welcome name="Ila" heroName="DC">
          <input type="text" placeholder="Search for animals"></input>
        </Welcome> */}
        {/* USE OF STATE */}
        {/* <Message></Message> */}
        {/* setState 
        <Counter></Counter> */}
        {/* <EventBind></EventBind> */}
        {/* <ParentComponent></ParentComponent> */}

        <ConditionalRendering></ConditionalRendering>
      </header>
    </div>
  );
}

export default App;
