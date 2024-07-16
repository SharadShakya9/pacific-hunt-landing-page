import Nav from "./components/Nav";
import Home from "./components/Home"
import "./globals.css";
import Categories from "./components/Categories";
import Openings from "./components/Openings";
import RenownedCompanies from "./components/RenownedCompanies";

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <Categories/>
      <Openings/>
      <RenownedCompanies/>
    </>
  );
}

export default App;
