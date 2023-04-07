import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default App;
