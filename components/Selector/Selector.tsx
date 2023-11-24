import React, { useState } from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { Combobox, InputBase, Input, useCombobox, Text } from "@mantine/core";
import { GET_ROL } from "../../queries/rolQuery";
import { GET_TIPOS_DOCUMENTO } from "../../queries/tipoDocumentoQuery";
import { GET_TECNICOS } from "../../queries/usuarioQuery";

interface SelectorProps {
  type: string;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
}

const Selector: React.FC<SelectorProps> = ({ type, value, setValue }) => {
  const [selectedOption, setSelectedOption] = useState({ id: null, text: '' });
  let nombre_selector;
  let query_type : DocumentNode;
  let onOptionSubmit;

  if (type === "rol")
  {
    query_type = GET_ROL;
    nombre_selector = "Rol";
  }
  else if (type === "estadoCambioPartes")
  {

  }
  else if (type === "tipoDocumento")
  {
    query_type = GET_TIPOS_DOCUMENTO;
    nombre_selector = "Tipo Documento";
  }
  else if (type === "tecnico")
  {
    query_type = GET_TECNICOS;
    nombre_selector = "Tecnicos";
  }

  const { data, loading, error } = useQuery(query_type!);
  
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  let options = [];

  if (type === "rol")
  {
    options = data && data.rol ? data.rol.map((item: any) => (
      <Combobox.Option value={item.idRol} key={item.idRol}>
        {item.nombre}
      </Combobox.Option>
    )) : [];  

    onOptionSubmit = (val:any) => {
      const selectedText = data.rol.find((item: { idRol: any; }) => item.idRol === val)?.nombre;
      setSelectedOption({ id: val, text: selectedText || '' });
      setValue(val);
      combobox.closeDropdown();
    };

  }
  else if (type === "estadoCambioPartes")
  {

  }
  else if (type === "tipoDocumento")
  {
    options = data && data.tipoDocumento ? data.tipoDocumento.map((item: any) => (
      <Combobox.Option value={item.idTipoDocumento} key={item.idTipoDocumento}>
        {item.tipoDocumento}
      </Combobox.Option>
    )) : [];  

    onOptionSubmit = (val:any) => {
      const selectedText = data.tipoDocumento.find((item: { idTipoDocumento: any; }) => item.idTipoDocumento === val)?.tipoDocumento;
      setSelectedOption({ id: val, text: selectedText || '' });
      setValue(val);
      combobox.closeDropdown();
    };
  }
  else if (type === "tecnico")
  {
    options = data && data.usuario ? data.usuario.map((item: any) => (
      <Combobox.Option value={item.idUsuario} key={item.idUsuario}>
        {item.nombres} {item.apellidos}
      </Combobox.Option>
    )) : [];  

    onOptionSubmit = (val:any) => {
      const selectedText = data.usuario.find((item: { idUsuario: any; }) => item.idUsuario === val)?.nombres + ' '+ data.usuario.find((item: { idUsuario: any; }) => item.idUsuario === val)?.apellidos;
      setSelectedOption({ id: val, text: selectedText || '' });
      setValue(val);
      combobox.closeDropdown();
    };
  }


  return (
    <div>
      <Text>{nombre_selector}</Text>
      <Combobox
        width="md"
        store={combobox}
        onOptionSubmit={onOptionSubmit}
      >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {selectedOption.text || <Input.Placeholder>Seleccione</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export default Selector;
