import BasicForm from "./components/BasicForm";
import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <>
      <div className="app">
        <h2>Using Custom Hook</h2>
        <SimpleInput />
      </div>
      <div className="app">
        <h2>Using Custom Hook with Reducer</h2>
        <BasicForm />
      </div>
    </>
  );
}

export default App;
