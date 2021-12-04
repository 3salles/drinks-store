import { Dispatch, SetStateAction } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Brands } from "../../models";


interface BrandSelectProps {
  selected: string;
  setSelected: (brand: any) => void;
}

export function BrandSelect({ selected, setSelected}: BrandSelectProps) {
  return (
    <ReactFlagsSelect
      className="flags-select"
      selected={selected}
      onSelect={(code: string | Brands) => setSelected(code)}
      countries={["BR", "FR", "JP","VE"]}
      customLabels={{"BR": "Brasil","FR": "França","JP": "Japão","VE": "Venezuela"}}
      placeholder="Escolha uma marca"
      searchable
    />
  );
}
