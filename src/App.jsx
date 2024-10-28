import "./App.css";
import Sidebar from "./components/Sidebar";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <ToDo />
    </div>
  );
}

export default App;
