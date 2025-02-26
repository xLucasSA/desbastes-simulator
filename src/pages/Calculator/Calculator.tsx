import { useState, useEffect } from "react";
import Section from "./components/Section";
import DataForms from "./DataForms";
import InfoForms from "./InfoForms";
import { BodyProps } from "./types";
import { ResultsProps } from "../Relatorio/types";
import { useNavigate } from "react-router-dom";

type CalculatorProps = {
  setResult: Function;
};

function Calculator({ setResult }: CalculatorProps) {
  let navigate = useNavigate();
  const [body, setBody] = useState<BodyProps>({
    numDesbastes: 1,
    numSitios: 1,
    params: [
      {
        beta: 0,
        fatorS: 0,
        gama: 0,
        idade: 0,
      },
    ],
    percentual: 50,
    data: [
      {
        diameter: 0,
        freq: 0,
      },
    ],
  });

  function handleSubmit() {
    fetch("http://127.0.0.1:8000/api/desbaste", {
      body: JSON.stringify(body),
      method: "POST",
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        const newData: ResultsProps = {
          results: data.results,
          finalItems: data.final_items,
          quantRemove: data.quant_remove,
        };

        setResult(newData);
      });

    navigate("/calculo/resultado");
  }

  return (
    <div className="py-2 min-h-[calc(100vh_-_60px)] flex flex-col gap-4">
      <Section
        title="Informação dos Desbastes"
        content={<InfoForms body={body} setBody={setBody} />}
      />
      <Section
        title="Dados dos Sítios"
        content={<DataForms setBody={setBody} handleClick={handleSubmit} />}
      />
    </div>
  );
}

export default Calculator;
