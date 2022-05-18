import './App.css';
import Navbar from "./components/navbar.js";
import Section from "./components/section.js";
import Card from "./components/card.js";
import Data from "./data.js";
//import logo from './airbnb-log.png';
function App() {
  const mycards = Data.map((item)=>{
    return(
      <Card key={item.id} item={item}/>
    )
  });




  return (
    <>
      <Navbar/>
      <Section/>
      <section className="card-section">
        {mycards}
      </section>
    </>

  );
}

export default App;
