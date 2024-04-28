import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
// import InstructionPage from './pages/InstructionPage';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
