function SitiosParams() {
  return (
    <div className="grid w-full gap-8">
      <p>Parâmetros:</p>
      <div className="flex gap-8 w-full">
        <div className="grid grid-rows-4 grid-cols-2 gap-4">
          <label>Fator S:</label>
          <input
            type="number"
            step="0.01"
            name="fatorS"
            id="fatorS"
            className="bg-white rounded max-w-10"
          />

          <label>Gama:</label>
          <input
            type="number"
            step="0.01"
            name="gama"
            id="gama"
            className="bg-white rounded max-w-10"
          />

          <label>Beta:</label>
          <input
            type="number"
            step="0.01"
            name="beta"
            id="beta"
            className="bg-white rounded max-w-10"
          />

          <label>Idade:</label>
          <input
            type="number"
            step="0.01"
            name="idade"
            id="idade"
            className="bg-white rounded max-w-10"
          />
        </div>
      </div>
    </div>
  );
}

export default SitiosParams;
