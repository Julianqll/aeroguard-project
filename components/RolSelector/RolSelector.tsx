import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { Combobox, InputBase, Input, useCombobox, Text } from "@mantine/core";
import { GET_ROLS } from "../../queries/rolQuery";
import { GET_TIPOS_DOCUMENTO } from "../../queries/tipoDocumentoQuery";

interface RolSelectorProps {
  type: string;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
}

const RolSelector: React.FC<RolSelectorProps> = ({ type, value, setValue }) => {
  let query_type : DocumentNode;
  if (type === "rol")
  {
    query_type = GET_ROLS;
  }
  else if (type === "estadoCambioPartes")
  {

  }
  else if (type === "tipoDocumento")
  {
    query_type = GET_TIPOS_DOCUMENTO;
  }

  const { data, loading, error } = useQuery(query_type!);
  
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  let options = [];

  if (type === "rol")
  {
    options = data && data.rol ? data.rol.map((item: any) => (
      <Combobox.Option value={item.nombre} key={item.rolId}>
        {item.nombre}
      </Combobox.Option>
    )) : [];  
  }
  else if (type === "estadoCambioPartes")
  {

  }
  else if (type === "tipoDocumento")
  {
    options = data && data.rol ? data.rol.map((item: any) => (
      <Combobox.Option aria-label={item.id} value={item.nombre} key={item.rolId}>
        {item.nombre}
      </Combobox.Option>
    )) : [];  
  }


  return (
    <div>
      <Text>Rol</Text>
      <Combobox
        width="md"
        store={combobox}
        onOptionSubmit={(val) => {
          setValue(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            component="button"
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => combobox.toggleDropdown()}
          >
            {value || <Input.Placeholder>Seleccione</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export default RolSelector;
