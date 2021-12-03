import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";


export function BrandSelect() {
  const [selected, setSelected] = useState("");
  console.log(selected)
  return (
    <ReactFlagsSelect
      className="flags-select"
      selected={selected}
      onSelect={(code) => setSelected(code)}
      countries={["BR", "FR", "JP","VE"]}
      customLabels={{"BR": "Brasil","FR": "França","JP": "Japão","VE": "Venezuela"}}
      placeholder="Escolha uma marca"
      searchable
    />
  );
}
