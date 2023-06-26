// Pilas 3 
const pueblos = ["Pueblo Origen", "Pueblo1", "Pueblo2", "Pueblo3", "Destino"];

const pilaIda = [];
const pilaVuelta = [];

console.log("Recorrido:", pueblos);
for (let i = 0; i < pueblos.length; i++) {
    const pueblo = pueblos[i];
    pilaIda.push(pueblo);
}

while (pilaIda.length > 0) {
    const pueblo = pilaIda.pop();
    pilaVuelta.push(pueblo);
}

console.log("Regreso:", pilaVuelta)

// Pilas 4
function retirarContenedor(pila, contenedor) {
    const pilaAuxiliar = [];
    let contenedorEncontrado = false;
  
    while (!contenedorEncontrado && pila.length > 0) {
      const contenedorActual = pila.pop();
      if (contenedorActual === contenedor) {
        contenedorEncontrado = true;
      } else {
        pilaAuxiliar.push(contenedorActual);
      }
    }
  
    while (pilaAuxiliar.length > 0) {
      pila.push(pilaAuxiliar.pop());
    }
  
    if (contenedorEncontrado) {
      console.log(`El contenedor ${contenedor} ha sido retirado.`);
    } else {
      console.log(`El contenedor ${contenedor} no se encuentra en la pila.`);
    }
  
    return pila;
}

const Contenedores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const contenedorRetirado = 5;

console.log("Pila Original:", Contenedores);
console.log("Contenedor a retirar:", contenedorRetirado);

const pilaActualizada = retirarContenedor(Contenedores, contenedorRetirado);

console.log("Pila Actualizada:", pilaActualizada)