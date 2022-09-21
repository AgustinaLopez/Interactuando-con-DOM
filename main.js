let cantidad = 0;
let precio = 0;
let costo= 0;
let seguirCotizando = false;



const Hoteles = [
   Hotel1 = {nombre: 'All Star Movies', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido"},
   Hotel2 = {nombre: 'All Star Music', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido"},
   Hotel3 = {nombre: 'All Star Sports', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido"},
   Hotel4 = {nombre: 'Caribbean Beach Resort', price: 2000, extra: "entrada temprana"},
   Hotel5 = {nombre: 'Coronado Spring', price: 2000, extra: "entrada temprana"},
   Hotel6 = {nombre: 'Port Orleans', price: 2000, extra: "entrada temprana"}, 
   Hotel7 = {nombre: 'Contemporany Resort', price: 3500, extra: "descuento"},
   Hotel8 = {nombre: 'Animal Kingdom Lodge', price: 3500, extra: "descuento"},
   Hotel9 = {nombre: 'Grand Floridian', price: 3500, extra: "descuento"},
];

const tickets = ["Un parque-Un día", "Dos parques-Un dia"];


const nombreIngresado= prompt ("Hola! Cotizamos tu paquete Disney! ¿Cual es tu nombre?");

let personalizado = document.getElementById('personalizado');
personalizado.innerText = 'Hola '+ nombreIngresado + ' !!';
console.log (personalizado.innerText);


let correoIngresado= prompt ("Hola "+ nombreIngresado + "! Dejanos tu correo electronico" );



do{
    let producto= prompt ("¿Que te gustaría cotizar? Hotel+Tickets , Solo Hotel, Solo Tickets, Memory Maker, Plan de Comidas, Tour VIP", "Ej:Hotel+Tickets");
    cantidad = parseInt (prompt("¿Cuantas personas viajan?"));

 switch (producto){
    case 'Hotel+Tickets':
        //precio= 3000
        prompt ("¿Que tipo de Hotel prefieres? - Economico, Moderado o Deluxe", "Ej:Moderado")
        console.log (Hoteles.join (','));
        if ("Economico"){
          precio = 1500 ;
         }else if ("Moderado"){
          precio = 2000 ;
         }
         else {("Deluxe")
         precio = 3500};      
        prompt ("¿Que tipo de Tickets Necesitas? - Un parque-Un día, Dos parques-Un dia" , "Ej: Un parque-Un día ")
        break;
    case 'Solo Hotel':
        //precio= 2500
        prompt ("¿Que tipo de Hotel prefieres? - Economico, Moderado o Deluxe", "Ej:Moderado")
        console.log (Hoteles.join (','));
          if ("Economico"){
           precio = 1500 ;
          }else if ("Moderado"){
           precio = 2000 ;
          }
          else {("Deluxe")
           precio = 3500};
        break;
    case 'Solo Tickets':
        precio= 1000
        prompt ("¿Que tipo de Tickets Necesitas? - Un parque-Un día, Dos parques-Un dia" , "Ej: Un parque-Un día ")
        break;
    case "Memory Maker":
          costo = 200;
        break;
    case "Plan de Comidas":
          costo = 600;
        break;
    case "Tour VIP":
          costo = 1500;
        break;    
    default:
    alert ("No se ajusta a lo que buscas? Dejanos tu contacto!");
    precio=0
  }
  

 seguirCotizando= confirm("¿Quieres agregar más cosas a tu paquete?");

} while (seguirCotizando);


const promo = Hoteles.filter (hotel => hotel.extra == 'desayuno incluido');
console.log (promo)

const categoria = Hoteles.filter (hotel => hotel.categoria == 'economico' )

const actualizacionTemporada = Hoteles.map (hotel => {
  return {
    nombre: hotel.nombre,
    precio: hotel.price * 1.15
  }
})
console.log (actualizacionTemporada)

console.log(precio)
console.log(cantidad)
console.log (costo)


let precioTotal = (precio * cantidad) + (costo * cantidad);
console.log(precioTotal)




alert ('El costo total del paquete es de: $ '+precioTotal);

let finalizarCotizacion= confirm("¿Desea finalizar su cotización?")



if(finalizarCotizacion) alert ("Tu cotización ha sido enviada a tu correo electronico!");
else {alert ("Consultanos tus dudas por whatsapp!")};



let contenedor = document.getElementById ('contenedor');
contenedor.innerHTML = '<h2> El viaje más mágico del mundo </h2>';
contenedor.className = 'container row'

let texto = document.createElement ('p');
texto.innerHTML = '<p> Texto informativo - Quienes somos </p>'
document.body.append (texto);

let container = document.getElementById ('hoteles');
for (const hotel of Hoteles){
   let li = document.createElement('li');
   li.innerHTML =  hotel.nombre;
   container.appendChild (li);
}