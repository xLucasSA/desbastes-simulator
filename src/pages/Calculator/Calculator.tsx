import Section from "./components/Section";
import DataForms from "./DataForms";
import InfoForms from "./InfoForms";

function Calculator() {
  return (
    <>
      <Section title="Informação dos Desbastes" content={<InfoForms />} />
      <Section title="Dados dos Sítios" content={<DataForms />} />
    </>
  );
}

export default Calculator;
