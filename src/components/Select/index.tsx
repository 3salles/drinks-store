import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

import {SelectStyles} from './styles'

export function CountriesSelect() {
  const [selected, setSelected] = useState("");
  console.log(selected)
  return (
    <ReactFlagsSelect
    className={SelectStyles}
      selected={selected}
      onSelect={(code) => setSelected(code)}
      countries={["BR", "FR", "JP","VE"]}
      customLabels={{"BR": "Brasil","FR": "França","JP": "Japão","VE": "Venezuela"}}
      placeholder="Escolha uma marca"
      searchable
    />
  );
}
