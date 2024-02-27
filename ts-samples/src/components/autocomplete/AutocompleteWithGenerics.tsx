import React, { useState } from "react";
import type { CarModel, Weekday } from "../../overview";
import "./Autocomplete.css";

interface Props<T extends CarModel | Weekday> {
  suggestions: T[];
  placeholder: string;
}

export const AutocompleteInput = <T extends CarModel | Weekday>({
  suggestions,
  placeholder,
}: Props<T>) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<T[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    setFilteredSuggestions(
      suggestions.filter(
        (suggestion) =>
          suggestion.toString().toLowerCase().indexOf(userInput.toLowerCase()) >
          -1
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
      <h2>Autocomplete With Generics</h2>
      <input
        type="text"
        onChange={onChange}
        value={inputValue}
        placeholder={placeholder}
      />
      {showSuggestions && inputValue && <SuggestionsListComponent />}
    </div>
  );
};
