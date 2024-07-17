import Nav from "./components/Nav";
import Home from "./components/Home"
import "./globals.css";
import Categories from "./components/Categories";
import Openings from "./components/Openings";
import RenownedCompanies from "./components/RenownedCompanies";
import FeaturedCompanies from "./components/FeaturedCompanies";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <Categories/>
      <Openings/>
      <RenownedCompanies/>
      <FeaturedCompanies/>
      <Testimonials/>
    </>
  );
}

export default App;
