import { ResultsProps } from "../types";
import Chart from "./Chart";
import Table from "./table";

function ResultContent({ results, quantRemove, finalItems }: ResultsProps) {
  return (
    <>
      <h3>
        Será necessário retirar {quantRemove}, restando assim {finalItems}{" "}
        unidades ao final do desbaste. Seguem os dados e tabela para
        demonstrativo
      </h3>
      <p className="my-4">
        De acordo com os dados fornecidos e aplicando o teorema XXXX, foi gerada
        a seguinte tabela com o resulto para o desbaste, sendo DAP - Diamentro a
        altura do Peito, FT - Frequência Total, FD - Frequência Desbastada e FR
        - Frequencia relutante.
      </p>
      <div className="grid grid-cols-12 min-h-[500px]">
        <Table results={results} />
        <Chart results={results} />
      </div>
    </>
  );
}

export default ResultContent;
