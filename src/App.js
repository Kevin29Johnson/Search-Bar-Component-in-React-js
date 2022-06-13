import "./styles.css";
import "./SearchBar";
import SearchBar from "./SearchBar";
// search bar can take custom arrays to search from
// prop for component 1
const teams = [
  "arsenal",
  "man city",
  "man utd",
  "chelsea",
  "tottenham",
  "liverpool",
  "west ham",
  "aston villa"
];
// prop for component 2
const prod = ["iphone", "mouse", "keyboard", "laptop"];
export default function App() {
  return (
    <div className="App">
      <SearchBar items={teams} />
      {/* <SearchBar items={prod}/> */}
    </div>
  );
}
