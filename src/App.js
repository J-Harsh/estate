import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Filterbar from "./components/Filterbar";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <div >
      <Navbar/>
      <main>
        <Header/>
        <Filterbar/>
        <CardGrid/>
      </main>
    </div>
  );
}

export default App;
