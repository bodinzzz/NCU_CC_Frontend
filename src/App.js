import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Future from "./pages/Future";
import Graduated from "./pages/Graduated";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/future" element={<Future />} />
        <Route path="/graduated" element={<Graduated />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
