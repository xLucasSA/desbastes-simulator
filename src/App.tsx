import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Calculator from "./pages/Calculator";
import Relatorio from "./pages/Relatorio";
import { ResultsProps } from "./pages/Relatorio/types";
import { useState } from "react";

function App() {
  const [result, setResult] = useState<ResultsProps>({
    results: [{ diameter: 0, fd: 0, fr: 0, ft: 0 }],
    finalItems: 0,
    quantRemove: 0,
  });

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh_-_60px)] flex flex-col justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<></>} />
          <Route path="calculo">
            <Route index element={<Calculator setResult={setResult} />} />
            <Route
              path="resultado"
              element={
                <Relatorio
                  results={result.results}
                  finalItems={result.finalItems}
                  quantRemove={result.quantRemove}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
