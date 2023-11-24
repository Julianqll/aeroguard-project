import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import FormularioDirectivas from '../FormularioDirectivas/FormularioDirectivas';
import { useQuery } from '@apollo/client';
import { GET_TIPOS_DIRECTIVA } from '../../queries/tipoDirectivaQuery';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

function StepperDirectivas() {
  const [active, setActive] = useState(0);
  const [arrayForms, setArrayForms] = useState<any>([]);

  const addFormDirectiva = () => {
    let formDirectiva = {
        fechaDirectiva:valueFecha,
        idAsignacionAvion:1,
        idEstadoDir:1,
        idIntervaloDir: valueIntervalo,
        idTipoDir:active+1,
        ad:valueAdDirectiva,
        adDescrip:valueAdDescrip,
        adRemp:valueAdReemp,
        docInstruc:valueDocumInstruc,
        documentoRef:valueDocumentoRef
    }
    setArrayForms((prevForms: any) => [...prevForms, formDirectiva]);
  };
  const nextStep = () => {
    if (active < 5) {
      addFormDirectiva();
      setActive(current => current + 1);
    }
  };

  const prevStep = () => {
    if (active > 1) {
      setArrayForms((prevForms: any) => prevForms.slice(0, -1));
      setActive(current => current - 1);
    }
  };

  const [valueAdDirectiva, setValueAdDirectiva] = useState<string>("");
  const [valueDocumentoRef, setValueDocumentoRef] = useState<string>("");
  const [valueAdReemp, setValueAdReemp] = useState<string>("");
  const [valueAdDescrip, setValueAdDescrip] = useState<string>("");
  const [valueDocumInstruc, setValueDocumInstruc] = useState<string>("");
  const [valueIntervalo, setValueIntervalo] = useState<string>("");
  const [valueFecha, setValueFecha] = useState<Date>(new Date());
  const { data, loading, error } = useQuery(GET_TIPOS_DIRECTIVA);
  let steppers;
  if (!loading) {
    steppers = data.tipoDirectiva!.map((item:any) => (
        <Stepper.Step key={item.idTipoDir} label={item.nombre} description={item.descripcion}>
        <FormularioDirectivas
            nombre={item.nombre}
            values={{valueAdDirectiva, valueDocumentoRef, valueAdReemp, valueAdDescrip, valueDocumInstruc, valueIntervalo, valueFecha}}
            setters={{setValueAdDirectiva,setValueDocumentoRef, setValueAdReemp, setValueAdDescrip, setValueDocumInstruc, setValueIntervalo, setValueFecha}}
        ></FormularioDirectivas>
        </Stepper.Step>
      ));
  }


  const handleRegister = async () => {
    console.log(arrayForms);
    if (!valueAdDirectiva || !valueDocumentoRef || !valueAdReemp || !valueAdDescrip || !valueDocumInstruc || !valueIntervalo || !valueFecha) {
        notifications.show({
            color: 'red',
            title: 'Completar todos los campos',
            message: 'Por favor completa todos los campos',
            icon: <IconX size="1rem" />,
            autoClose: false
          });
    }
        else {

        const directiva = {
            //nombreTipoDirectiva: valueNombreDirectiva,
            //descripTipoDirectiva: valueDescripcionDirectiva,
        };
    
        try {
            notifications.show({
            color: 'green',
            title: 'Tipo Directiva Registrada',
            message: <>
            </>,
            icon: <IconCheck size="1rem" />,
            autoClose: false
            });
        } catch (error) {
            console.log(error);
            notifications.show({
                color: 'red',
                title: 'Error en el registro',
                message: 'Hubo un error registrando la directiva',
                icon: <IconX size="1rem" />,
                autoClose: false
                });
        }    
    }
  };

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        {steppers}
        <Stepper.Completed>
          Completed, click back button to get to previous step
          <Button onClick={handleRegister}>Registrar</Button>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

export default StepperDirectivas;
