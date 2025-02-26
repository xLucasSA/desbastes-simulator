import { ResultsProps } from "../types";

type Content = {
  text: string | number;
};

function Th({ text }: Content) {
  return (
    <th className="px-4 py-2 bg-[#d9d9d9] w-16 border border-black text-center">
      {text}
    </th>
  );
}
function Td({ text }: Content) {
  return (
    <td className="px-4 py-1 bg-white w-16 border border-black text-center">
      {text}
    </td>
  );
}

function Table({ results }: ResultsProps) {
  return (
    <div className="col-start-1 col-end-3">
      <table>
        <thead>
          <tr>
            <Th text="DAP" />
            <Th text="FT" />
            <Th text="FD" />
            <Th text="FR" />
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return (
              <tr>
                <Td text={result.diameter} />
                <Td text={result.ft} />
                <Td text={result.fd} />
                <Td text={result.fr} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
