class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class LIstaEnlazada {
    constructor() {
        this.inicio = null;
    }


    insertarAlFinal(dato) {

        if (this.buscarDato(dato)) {
            console.log("Este dato ya esta almacenado en la lista.");
            return;
        }

        const nuevoNodo = new Nodo(dato);

        if(!this.inicio) {
            this.inicio = nuevoNodo;
        } else {
            let nodoActual = this.inicio;
            while (nodoActual.siguiente) {
                nodoActual = nodoActual.siguiente;
            }
            nodoActual.siguiente = nuevoNodo;
        }
        console.log("Dato insertado correctamnete en la lista.")
    }

    buscarDato(dato) {
        let nodoActual = this.inicio;
        while (nodoActual) {
            if (nodoActual === dato) {
                return true;
            }
            nodoActual = nodoActual.siguiente;
        }
        return false;
    }

    mostrarNodosSuperiores(valor) {
        let nodoActual = this.inicio;
        while (nodoActual) {
            if (nodoActual.dato > valor) {
                console.log(nodoActual.dato);
            }
            nodoActual = nodoActual.siguiente;
        }
    }
}

const lista = new LIstaEnlazada();

lista.insertarAlFinal(5);
lista.insertarAlFinal(10);
lista.insertarAlFinal(7);
lista.insertarAlFinal(5);

console.log("Numeros Superiores a 6:")
lista.mostrarNodosSuperiores(6);