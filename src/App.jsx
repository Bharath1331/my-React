//import logo from './logo.svg';
import "./App.css";
// import ComponentA from "./component/ComponentA";
// import Inline from "./component/Inline";
//import NameList from "./component/NameList";
// import PersonList from "./component/PersonList";
//import EventBind from "./component/EventBind";
//import FunctionClick from "./component/FunctionClick";
// import Header from './component/Header';

// import Greet from "./component/Greet";
//import {Greet} from './component/Greet';
// import Welcome from "./component/ClassComp";
//import ParentComponent from "./component/ParentComponent";
// import StyleSheet from "./component/StyleSheet";
import "./component/appStyles.css";
// import PureComp from "./component/PureComp";
// import ReferenceDemo from "./component/ReferenceDemo";
// import FragementDemo from "./component/FragementDemo";
// import Table from "./component/Table";
//import styles from './component/appStyles.module.css'
//import Form from "./component/Form";
//import LifeCycleA from "./component/LifeCycleA";
// import FocusInput from "./component/FocusInput";
//import FRinput from "./component/FRinput";
// import FRParentInput from "./component/FRParentInput";
// import PortalDemo from "./component/PortalDemo";
// import Hero from "./component/Hero";
// import ErrorBoundary from "./component/ErrorBoundary";
// import ClickCounter from "./component/ClickCounter";
// import HoveredCounter from "./component/HoveredCounter";
// import HookCounter from "./component/HookCounter";
// import HookCounter2 from './component/HookCounter2'
// import HookCounter3 from "./component/HookCounter3";
// import HookCounterOne from "./component/HookCounterOne";
// import HookMouse from "./component/HookMouse";
// import MouseContainer from "./component/MouseContainer";
// import IntervalHookCounter from './component/IntervalHookCounter'
// import IntervalHookCounter from './component/IntervalHookCounter'
// import DataFetching from './component/DataFetching'
import CountReducer from "./component/CountReducer";

// import React from "react";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* Hooks */}
      <CountReducer />

      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounterOne /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalHookCounter /> */}

      {/*Data Fetching  */}
      {/* <DataFetching /> */}

      {/* useContext */}
      {/* <UserContext.Provider value={'Bharath'} />
      <ChannelContext.Provider value={'Codevolution'} >
        <ComponentA />
       </ChannelContext.Provider >
      <UserContext.Provider /> */}


      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}

      {/* Higher Order Components */}
      {/* <ClickCounter /> */}
      {/* <HoveredCounter /> */}

      {/* Error Handling */}
      {/* <ErrorBoundary>
        <Hero name={'Batman'}/>
      </ErrorBoundary> 

      <ErrorBoundary>
        <Hero name={'Superman'}/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name={"Joker"} />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}

      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}

      {/* <ReferenceDemo/> */}

      {/* <Table /> */}

      {/* <PureComp/> */}

      {/* <FragementDemo/> */}

      {/* <LifeCycleA /> */}

      {/* <Form /> */}

      {/* <h1 className="error"> Error </h1>
      <h1 className={styles.success}> Success </h1> */}

      {/* <Inline /> */}

      {/* <StyleSheet primary={true}/> */}

      {/* <PersonList/> */}

      {/* <NameList/> */}

      {/* <ParentComponent/> */}

      {/* <EventBind /> */}

      {/* <FunctionClick /> */}

      {/* <Greet name="Bharath" lname="B C">
      </Greet> */}

      {/* <Welcome></Welcome> */}
      {/* <Header></Header> */}
    </div>
  );
}

// function App() {
//   return (
//   <>
//   <h1 className="text-3xl font-bold underline">Hello world!</h1>
//   <Header />
//   </>

//   );
// }

export default App;
