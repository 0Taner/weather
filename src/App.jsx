import Header from "./components/Header/Header";
import "./App.css";
import Search from "./components/Search/Search";
import Cards from "./components/cards/cards";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Search></Search>
      <Cards></Cards>
    </div>
  );
}

export default App;
