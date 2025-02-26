export type ParamsProps = {
  fatorS: number;
  gama: number;
  beta: number;
  idade: number;
};

export type DataProps = {
  diameter: number;
  freq: number;
};

export type BodyProps = {
  numDesbastes: number;
  numSitios: number;
  params: ParamsProps[];
  percentual: number;
  data: DataProps[]
};