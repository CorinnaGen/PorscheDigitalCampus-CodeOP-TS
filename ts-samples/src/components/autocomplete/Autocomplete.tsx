import React, { useState } from "react";
import "./Autocomplete.css";
import { CarModel } from "../../overview";

export const AutocompleteInput = () => {
  const suggestions: CarModel[] = ["Taycan", "Panamera", "Macan", "Cayenne", "911"];
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    setFilteredSuggestions(
      suggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
    );
    setShowSuggestions(true);
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    setInputValue(target.innerText);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          return (
            <li key={index} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };

  return (
    <div>
    <h2>Autocomplete</h2>
      <input
        type="text"
        onChange={onChange}
        value={inputValue}
        placeholder="Porsche model"
      />
      {showSuggestions && inputValue && <SuggestionsListComponent />}
    </div>
  );
};
