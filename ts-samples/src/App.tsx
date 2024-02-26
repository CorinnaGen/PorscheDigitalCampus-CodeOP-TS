import "./App.css";
import { TodoList } from "./components/TodoList";
import { AutocompleteInput } from "./components/Autocomplete";
import { AutocompleteInput as AutocompleteGenerics } from "./components/AutocompleteWithGenerics";
import { AutocompleteInput as AutocompleteWithUnionType } from "./components/AutocompleteWithUnionType";
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
      <AutocompleteGenerics
        suggestions={Object.values(Weekday) as Weekday[]}
        placeholder="Week day"
      />
      <br />
      <AutocompleteWithUnionType
        suggestions={allSuggestion}
        placeholder="PorscheModel or Week day"
      />
    </div>
  );
}

export default App;
