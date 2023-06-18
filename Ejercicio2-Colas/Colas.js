// Cola de Colores
class Cola {
    constructor() {
        this.elementos = [];
    }

    enqueue(elemnto) {
        this.elementos.push(elemnto);
    }

    dequeue() {
        return this.elementos.shift();
    }

    isEmpty() {
        return this.elementos.length === 0;
    }

    size() {
        return this.elementos.length;
    }

    front() {
        return this.elementos[0];
    }
}


function dividirCola(colaOriginal) {
    const cola1 = new Cola();
    const cola2 = new Cola();
    let indice = 0;

    while (!colaOriginal.isEmpty()) {
        const elemento = colaOriginal.dequeue();

        if (indice % 2 === 0) {
            cola1.enqueue(elemento);
        } else {
            cola2.enqueue(elemento);
        }

        indice++;
    }

    return[cola1, cola2];
}

const colaOriginal = new Cola();
colaOriginal.enqueue("Amarillo");
colaOriginal.enqueue("Rosa");
colaOriginal.enqueue("Rojo");
colaOriginal.enqueue("Verde");
colaOriginal.enqueue("Azul");
colaOriginal.enqueue("Negro");
colaOriginal.enqueue("Morado");
colaOriginal.enqueue("Blanco");

const [cola1, cola2] = dividirCola(colaOriginal);

console.log("Cola 1:", JSON.stringify(cola1.elementos));
console.log("Cola 2:", JSON.stringify(cola2.elementos));


// Cola de Tickets
class Cola1 {
    constructor() {
        this.elementos = [];
    }

    enqueue(elemento) {
        this.elementos.push(elemento);
    }

    dequeue() {
        return this.elementos.shift()
    }

    isEmpty() {
        return this.elementos.length === 0;
    }
}

function reitarColados(cola) {
    const colaInicial = new Cola();
    const colaFinal = new Cola();
    const retirados = []

    console.log("Cola Inicial:", cola.elementos);

    while (!cola.isEmpty()) {
        const elemento = cola.dequeue();

        if (elemento.ticket) {
            colaFinal.enqueue(elemento);
        } else {
            retirados.push(elemento);
        }

        colaInicial.enqueue(elemento);
    }

    console.log("Elementos retirados:", retirados);

    console.log("Cola Final:", colaFinal.elementos);

    return { colaInicial, retirados, colaFinal};
}

const cola = new Cola();
cola.enqueue({user: 'Persona 1', ticket: true});
cola.enqueue({user: 'Persona 2', ticket: false});
cola.enqueue({user: 'Persona 3', ticket: true});
cola.enqueue({user: 'Persona 4', ticket: false});
cola.enqueue({user: 'Persona 5', ticket: true});
cola.enqueue({user: 'Persona 6', ticket: true});
cola.enqueue({user: 'Persona 7', ticket: false});
cola.enqueue({user: 'Persona 8', ticket: false});
cola.enqueue({user: 'Persona 9', ticket: true});
cola.enqueue({user: 'Persona 10', ticket: true});

const resultado = reitarColados(cola);

