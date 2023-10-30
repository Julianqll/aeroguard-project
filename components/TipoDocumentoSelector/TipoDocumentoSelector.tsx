import React from "react";
import { useQuery } from "@apollo/client";
import { Combobox, InputBase, Input, useCombobox, Text } from "@mantine/core";
import { GET_TIPOS_DOCUMENTO } from "../../queries/tipoDocumentoQuery";

interface TipoDocumentoSelectorProps {
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
}

const TipoDocumentoSelector: React.FC<TipoDocumentoSelectorProps> = ({ value, setValue }) => {
  const { data, loading, error } = useQuery(GET_TIPOS_DOCUMENTO);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = data && data.tipoDocumento ? data.tipoDocumento.map((item: any) => (
    <Combobox.Option value={item.tipoDocumento} key={item.idTipoDocumento}>
      {item.tipoDocumento}
    </Combobox.Option>
  )) : [];

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

export default TipoDocumentoSelector;
