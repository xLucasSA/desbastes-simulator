import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh_-_60px)] flex flex-col justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculo" element={<Calculator />} />
          <Route path="sobre" element={<></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
