
//Objetos

function Producto (parafina) {

    this.id = parafina.id;

    this.nombre = parafina.nombre;
    
    this.marca = parafina.marca;
    
    this.precio = parafina.precio;
    
}
    
const parafinaBase = new Producto ({id: 1, nombre: "base", marca: "keep surfing", precio: 400});
    
const parafinaSummer = new Producto ({id: 2, nombre: "summer", marca: "free life", precio: 350});
    
const parafinaWinter = new Producto ({id: 3, nombre: "winter", marca: "free life", precio: 500});
    
const parafinaUltra = new Producto ({id: 4, nombre: "ultra", marca: "keep surfing", precio: 450});
    

//Arrays
    
const listadoParafinas = [ parafinaBase, parafinaSummer, parafinaWinter, parafinaUltra];
    


// Funcion

let quecompra = prompt ("Hola! que parafina querés comprar? Base, Summer, Winter, Ultra ");
let quecantidad = prompt ("Cuántas querés comprar?");

function compra (quecompra, quecantidad){    
    for (let i = 0; i < 5; i++){  
        if (quecompra.toLowerCase() == listadoParafinas[i].nombre){
            let preciofinal = quecantidad * listadoParafinas[i].precio;
            console.log  (preciofinal);   
            alert ("El costo de" + " " + quecantidad +" "+ "pack/s es $" + preciofinal);

            let concretaCompra = prompt ("Agregar al carrito?");
            const comprafinal = [];

            if (concretaCompra.toLowerCase() === "si"){
            
                function agregaralcarrito (listadoParafinas){
                    comprafinal.push (listadoParafinas[i].nombre);
                    console.log  (comprafinal);   
                    alert ("Se agregó" + " " + listadoParafinas[i].nombre + " " + "al carrito")

                }
            }


        }   
    }
}
compra (quecompra, quecantidad);
agregaralcarrito (listadoParafinas);
