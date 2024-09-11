import React from 'react';
import "./SearchBar.css";
interface SearchBarProps {
  term: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ term, onInputChange, onSubmit }) => {
  return (
    
    <form className="input" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Enter a country"
        value={term}
        className="input-wrapper"
        onChange={onInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
      />

      <button className="input-submit" type="button" onClick={onSubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
      
    </form>
    

  );
};

export default SearchBar;