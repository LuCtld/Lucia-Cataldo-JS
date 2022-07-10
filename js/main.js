//Determina Cantidad

let cantidadparafinas = prompt ("Pack parafinas $600, cuántas desea comprar?")
let valorunpack = 600;


function preciocompra (cantidadparafinas, valorunpack ){
    let preciofinal = cantidadparafinas * valorunpack ;
    console.log = preciofinal;
    alert (" El costo de" + " " + cantidadparafinas +" "+ "pack/s es $"  + preciofinal)

    let comoabona = prompt ("Efectivo con descuento del 20% o Tarjeta de credito con recargo del 10%?");

    if (comoabona == "efectivo") {
        let preciocondescuento = preciofinal - preciofinal *(20/100);
        console.log = preciocondescuento;
        alert ("El precio final de su compra es $" + preciocondescuento + " " + "Gracias! vuelva pronto :)");
        }
        else {
            let preciotarjeta = preciofinal + preciofinal *(20/100);
            console.log = preciotarjeta;
            alert ("Su compra se realizará en un pago de $" + " " + preciotarjeta + " " + "Gracias! vuelva pronto :)")
        }
    }


preciocompra (cantidadparafinas, valorunpack);



