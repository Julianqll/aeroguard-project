import React from "react";
import { useQuery } from "@apollo/client";
import { Combobox, InputBase, Input, useCombobox, Text } from "@mantine/core";
import { GET_ROLS } from "../../queries/rolQuery";

interface RolSelectorProps {
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
}

const RolSelector: React.FC<RolSelectorProps> = ({ value, setValue }) => {
  const { data, loading, error } = useQuery(GET_ROLS);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = data && data.rol ? data.rol.map((item: any) => (
    <Combobox.Option value={item.nombre} key={item.rolId}>
      {item.nombre}
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

export default RolSelector;
