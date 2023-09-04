const SI="si"
const NO="no"
let nombreusuario;
let nombreproducto;
let precio;
let cantidad;
let total=0;
let continuar;
let ticket="nombre   precio   cantidad   total \n";
let detalle;

nombreusuario=prompt("Bienvenido al carrito de compras \n ingrese su nombre ");

function carrito (){
nombreproducto=prompt("ingrese el nombre del producto");
precio= +prompt("ingrese precio del producto");
cantidad=+prompt("ingrese cantidad de productos");
}
do{
    carrito ();
    total= total+precio*cantidad;
    continuar=prompt("desea ingresar otro item al carrito? si/no");
    while(continuar!==SI && continuar !==NO){
    continuar=prompt("respuesta invalida, por favor vuelva a indicar si desea agregar otro producto o no");
    }
    detalle=`${nombreproducto}                    ${precio}             ${cantidad}           ${precio*cantidad} \n`;
    ticket=ticket+detalle;
}while(continuar== SI);

ticket=`${nombreusuario} \n ${ticket} \n total ${total}\n`;
alert(ticket);

let pago=prompt("desea pagar en cuotas si/no");
function valorcuotas(total){
let totalvalorcuotas;
let cuotas;
let interes=total*0.30;
cuotas= +prompt("ingrese cantidad de cuotas");
totalvalorcuota= ((total+interes)/cuotas);
return totalvalorcuotas;
}

if(pago=="si"){
valorcuotas(total)
alert("el precio de cada cuota es $"+ totalvalorcuota);
}
else{
     alert("el precio total es $"+ total); 
};

// function suma(num1,num2){
// resultado=num1+num2;
// return resultado;
// };

// let cuenta= suma(+prompt("ingrese precio del producto"),+prompt("ingrese cantidad de productos"))

// alert(cuenta)