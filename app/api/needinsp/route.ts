function getRandomDiagnosis() {
    let diagnosis = [
      { name: 'Propeller', correct: true , pieces:<any>[]},
      { name: 'Engine', correct: true , pieces:<any>[]},
      { name: 'Aircraft', correct: true , pieces:<any>[]},
      { name: 'Magneto', correct: true , pieces:<any>[]},
      { name: 'Appliance', correct: true , pieces:<any>[]}
    ];
  
    // Seleccionar un índice al azar para establecer correct a false
    const randomIndex = Math.floor(Math.random() * diagnosis.length);
    diagnosis[randomIndex].correct = false;
  
    // Si el elemento tiene correct: false, agregar la lista 'pieces'
    if (!diagnosis[randomIndex].correct) {
      diagnosis[randomIndex].pieces = ['a', 'b'];
    }
  
    return diagnosis;
  }

export async function GET() {
    const diagnosis = getRandomDiagnosis();

    // Construimos la respuesta final con el diagnóstico
    const response = {
      diagnosis: diagnosis.reduce((acc : any, curr) => {
        acc[curr.name] = { correct: curr.correct };
        if (curr.pieces) {
          acc[curr.name].pieces = curr.pieces;
        }
        return acc;
      }, {})
    };
   
    return Response.json({ response })
  }