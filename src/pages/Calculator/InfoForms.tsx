function InfoForms() {
  return (
    <>
      <form action="" className="">
        <div>
          <div>
            <label>Número de Desbastes</label>
            <input
              type="number"
              name="numDesbastes"
              id="numDesbastes"
              step={0.01}
            />
          </div>

          <div>
            <label>Número de Sítios</label>
            <input type="number" name="numSitios" id="numSitios" />
          </div>
        </div>
      </form>
    </>
  );
}

export default InfoForms;
