import Section from "../Calculator/components/Section";
import ResultContent from "./components/ResultContent";
import { ResultsProps } from "./types";

function Resultados({ results, finalItems, quantRemove }: ResultsProps) {
  return (
    <>
      <Section
        title="Resultado"
        content={
          <ResultContent
            results={results}
            finalItems={finalItems}
            quantRemove={quantRemove}
          />
        }
        isClickble={false}
      />
    </>
  );
}

export default Resultados;
