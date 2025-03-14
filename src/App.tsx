import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/Header/Header";

function App() {
  return (
    <div className="container ">
      <Header />
      <Routes>
        <Route path="/meteoreact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
