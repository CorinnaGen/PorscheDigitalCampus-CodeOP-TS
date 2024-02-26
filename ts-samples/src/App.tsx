import "./App.css";
import { TodoList } from "./TodoList";
import { AutocompleteInput } from "./components/Autocomplete";

function App() {
  return (
    <div className="App">
      <TodoList />
      <br/>
      <AutocompleteInput />
    </div>
  );
}

export default App;
