import { useState } from "react";
import PlusCircle from "../../assets/icons/PlusCircle";
import MinusCircle from "../../assets/icons/MinusCircle";
import { DataProps, BodyProps } from "./types";

type DataFormsProps = {
  setBody: Function;
  handleClick: Function;
};

function DataForms({ setBody, handleClick }: DataFormsProps) {
  const [dataInputs, setdataInputs] = useState<DataProps[]>([
    { diameter: 0, freq: 0 },
  ]);

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    name: "diameter" | "freq"
  ) {
    const values = [...dataInputs];
    values[index][name] = Number(e.target.value);
    setdataInputs(values);
    setBody((prev: BodyProps) => {
      return { ...prev, data: dataInputs };
    });
  }

  function handleAddInputs() {
    setdataInputs([...dataInputs, { diameter: 0, freq: 0 }]);
  }

  function handleRemoveInputs(index: number) {
    const newInputs = [...dataInputs];
    newInputs.splice(index, 1);
    setdataInputs(newInputs);
    setBody((prev: BodyProps) => {
      return { ...prev, data: newInputs };
    });
  }

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <div className="font-bold px-4 py-2 bg-[#d9d9d9]">
          Preenchimento Manual
        </div>
        <div className="font-bold px-4 py-2">Importar Dados</div>
      </div>
      <div className="p-4 bg-[#d9d9d9]">
        <p>Sítio 1</p>
        <div className="flex flex-col w-[200px]">
          <div className="flex flex-row">
            <p className="bg-white border-b-2 border-r-[1px] border-gray-400 text-center w-[100px]">
              Diametro
            </p>
            <p className="bg-white border-b-2 border-l-[1px] border-gray-400 text-center w-[100px]">
              Frequencia
            </p>
          </div>
          {dataInputs.map((value, i) => {
            const diamenterName = `diameter-${i}`;
            const freqName = `freq-${i}`;

            return (
              <div key={i} className="flex flex-row w-[240px]">
                <input
                  type="number"
                  step="1"
                  key={diamenterName}
                  name={diamenterName}
                  id={diamenterName}
                  value={value.diameter}
                  className="bg-white border-[1px] border-l-0 border-gray-400 w-[100px] h-[26px] relative"
                  onChange={(e) => handleInputChange(e, i, "diameter")}
                />
                <input
                  type="number"
                  step="1"
                  key={freqName}
                  name={freqName}
                  id={freqName}
                  value={value.freq}
                  className="bg-white border-[1px] border-r-0 border-gray-400 w-[100px] h-[26px] relative"
                  onChange={(e) => handleInputChange(e, i, "freq")}
                />
                {i > 0 ? (
                  <MinusCircle
                    key={i}
                    className="hover:cursor-pointer ml-4"
                    onClick={() => handleRemoveInputs(i)}
                  />
                ) : (
                  <></>
                )}
              </div>
            );
          })}
          <PlusCircle
            key="plusCircle"
            className="hover:cursor-pointer my-2"
            onClick={handleAddInputs}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => handleClick()}
        className="border w-32 "
      >
        Calcular!
      </button>
    </div>
  );
}

export default DataForms;
