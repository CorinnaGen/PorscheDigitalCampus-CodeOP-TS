import "./App.css";
import { TodoList } from "./components/TodoList";
import { AutocompleteInput } from "./components/autocomplete/Autocomplete";
import { AutocompleteInput as AutocompleteGenerics } from "./components/autocomplete/AutocompleteWithGenerics";
import { AutocompleteInput as AutocompleteWithUnionType } from "./components/autocomplete/AutocompleteWithUnionType";
import { CarModel, Weekday } from "./overview";

const suggestions: CarModel[] = [
  "Taycan",
  "Panamera",
  "Macan",
  "Cayenne",
  "911",
];

const allSuggestion = [
  ...suggestions,
  ...(Object.values(Weekday) as Weekday[]),
];

function App() {
  return (
    <div className="App">
      <TodoList />
      <br />
      <AutocompleteInput />
      <br />
      <AutocompleteWithUnionType
        suggestions={allSuggestion}
        placeholder="PorscheModel or Week day"
      />
      <br />
      <AutocompleteGenerics suggestions={suggestions} placeholder="Week day" />
      <br />
    </div>
  );
}

export default App;
