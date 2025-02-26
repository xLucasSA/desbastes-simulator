import { BodyProps } from "./types";
import SitiosParams from "./components/SitiosParams";

type InfoProps = {
  body: BodyProps;
  setBody: Function;
};

function InfoForms({ body, setBody }: InfoProps) {
  return (
    <>
      <form action="" className="flex flex-col gap-8">
        <div className="flex gap-8 w-full">
          <div className="flex gap-2">
            <label>Número de Desbastes</label>
            <input
              type="number"
              name="numDesbastes"
              id="numDesbastes"
              step={1}
              className="bg-white rounded max-w-10"
            />
          </div>

          <div className="flex gap-2">
            <label>Número de Sítios</label>
            <input
              type="number"
              name="numSitios"
              id="numSitios"
              className="bg-white rounded max-w-10"
            />
          </div>

          <div className="flex gap-2">
            <label>Percentual Desbastado (%)</label>
            <input
              type="number"
              step={0.01}
              name="percentual"
              id="percentual"
              className="bg-white rounded max-w-10"
            />
          </div>
        </div>
        <SitiosParams />
      </form>
    </>
  );
}

export default InfoForms;
