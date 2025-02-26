type Result = {
  diameter: number;
  ft: number;
  fd: number;
  fr: number;
};

interface ResultsProps {
  results: Result[];
  finalItems?: number;
  quantRemove?: number;
}

export type { ResultsProps, Result };
