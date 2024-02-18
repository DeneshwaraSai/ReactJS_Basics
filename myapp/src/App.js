import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import Greet, { Greet1 } from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/Welcome";
import "./appStyle.css";
import styles from './appStyle.module.css';
import Form from "./components/Form";

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
        {/* <ConditionalRendering></ConditionalRendering> */}
        
        {/* <NameList></NameList> */}

        {/* <h1> Testing CSS </h1>

        <h3 className="error"> Testing CSS FILE </h3>

        <h3 className={styles.success}> Testing CSS using module </h3> */}

        <Form></Form>
      </header>
    </div>
  );
}

export default App;
