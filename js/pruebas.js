    
// Simulador
    
let tipo = prompt ("Hola! que parafina querés comprar? Base Coat, Summer Soft, Winter, Ultra Stick");
    
let cantidad = prompt ("Cuántas querés comprar?");
    
function compra (tipo, cantidad){
    
    for (let i = 0; i < 5; i++){  
        if (tipo.toLowerCase() == listadoParafinas[i].nombre){
            let preciofinal = cantidad * listadoParafinas[i].precio;
            let productoelegido = listadoParafinas[i];
            console.log = (listadoParafinas[i].nombre);   
            console.log = (preciofinal);   
            alert ("El costo de" + " " + cantidad +" "+ "pack/s es $" + preciofinal)   

        // Concreta Compra 

        let concretaCompra = prompt ("Agregar al carrito?");
        const compraFinal = [];


        function agregarAlCarrito(productoelegido){
        if (concretaCompra.toLowerCase() == "si"){
            compraFinal.push (productoelegido);
            console.log (compraFinal);
                } 
                else{

                }

            }
        }   
    }   
}
    
compra (tipo, cantidad);
agregarAlCarrito (productoelegido);



