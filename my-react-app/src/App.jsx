import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import {SocketProvider} from "./providers/index";

function App() {
  return (
    <SocketProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </SocketProvider>
  );
}

export default App;
