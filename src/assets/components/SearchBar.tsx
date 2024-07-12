import { ChangeEvent, useState } from "react";
import "./SearchBar.css";
import.meta.env
const SearchBar = (): JSX.Element  => {
  const [term, setTerm] = useState<string>('')

  const[options,setOptions] = useState<[]>([])

  const getSearchOptions =(value: string) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value.trim()}&limit=5&appid=${import.meta.env.REACT_APP_API_KEY}`).then(res => res.json().then(data =>setOptions(data)))
  }

const onInputChange = (e:ChangeEvent <HTMLInputElement>) =>{
  const value = e.target.value.trim()
  setTerm(value)
  if (value ==='') return
 getSearchOptions(value)
}


  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a country"
        value={term}
        className="input-wrapper"
        onChange={onInputChange}
      ></input>

      
      <button className="input-submit" type="submit">
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
