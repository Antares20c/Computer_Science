// Parte 1 
class Pila {
    constructor() {
        this.elementos = [];
    }

    push(elemento) {
        this.elementos.push(elemento);
    }

    pop() {
        if (this.elementos.length === 0) {
            return "La pila está vacía";
        }
        return this.elementos.pop();
    }

    peek() {
        if (this.elementos.length === 0) {
            return "La pila está vacía";
        }
        return this.elementos[this.elementos.length - 1];
    }

    isEmpty() {
        return this.elementos.length === 0;
    }

    size() {
        return this.elementos.length;
    }

    clear() {
        this.elementos = [];
    }
}

function obtenerElementos(pila, numero) {
    const elementosObtenidos = [];

    while (numero > 0 && !pila.isEmpty()) {
        elementosObtenidos.push(pila.pop())
        numero--;
    }

    return elementosObtenidos.reverse();
}

const pila = new Pila();
pila.push("Manzana");
pila.push("Cebolla");
pila.push("Apio");
pila.push("Naranja");
pila.push("Papaya");
pila.push("Sandia");
pila.push("Mélon");

const elementos = obtenerElementos(pila, 4);
console.log(elementos);



// Parte 2
class Pila1 {
  constructor() {
    this.elementos = [];
  }

  push(elemento) {
    this.elementos.push(elemento);
  }

  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.elementos.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.elementos[this.elementos.length - 1];
  }

  isEmpty() {
    return this.elementos.length === 0;
  }

  size() {
    return this.elementos.length;
  }

  clear() {
    this.elementos = [];
  }
}

function reemplazar(pila, nuevo, viejo) {
  const pilaTemp = new Pila1();
  let encontrado = false;

  while (!pila.isEmpty()) {
    const elemento = pila.pop();
    if (elemento === viejo && !encontrado) {
      pilaTemp.push(nuevo);
      encontrado = true;
    } else {
      pilaTemp.push(elemento);
    }
  }

  const nuevaPila = new Pila1();
  while (!pilaTemp.isEmpty()) {
    nuevaPila.push(pilaTemp.pop());
  }

  return nuevaPila;
}

const pila1 = new Pila1();
pila1.push(3);
pila1.push(2);
pila1.push(3);
pila1.push(4);
pila1.push(6);
pila1.push(8);
pila1.push(1);
pila1.push(2);
pila1.push(5);
pila1.push(5);

const nuevaPila = reemplazar(pila1, 7, 2);

const salida = [];
while (!nuevaPila.isEmpty()) {
  salida.unshift(nuevaPila.pop());
}

console.log("Salida:", salida);
