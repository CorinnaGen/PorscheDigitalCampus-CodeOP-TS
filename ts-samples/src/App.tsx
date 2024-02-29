import "./App.css";
import { TodoList } from "./components/TodoList";
import { AutocompleteInput } from "./components/autocomplete/Autocomplete";
import { AutocompleteInput as AutocompleteGenerics } from "./components/autocomplete/AutocompleteWithGenerics";
import { AutocompleteInput as AutocompleteWithUnionType } from "./components/autocomplete/AutocompleteWithUnionType";
import { CarModel, Weekday } from "./overview";

const cars: CarModel[] = [
  "Taycan",
  "Panamera",
  "Macan",
  "Cayenne",
  "911",
  "Carrera"
];

const weekdays = (Object.values(Weekday) as Weekday[])

const allSuggestion = [
  ...cars,
  ...weekdays,
];

function App() {
  return (
    <div className="App">
      <TodoList />
      <br />
      <AutocompleteInput />
      <br />
      <AutocompleteWithUnionType
        suggestions={cars}
        placeholder="Porsche Model"
      />
      <br />
      <AutocompleteGenerics suggestions={weekdays} placeholder="Week day" />
  <br />
    </div>
  );
}

export default App;
