// PRODUCTOS: alimentación 10%,  libros 4%,  else 21%


const product = { count: 3, price: 12.55, type: "ropa" };


// //count negativo o 0    +   PRECIO SIN IVA
const productPrice = product.count * product.price > 0 ? product.count * product.price : 0;
console.log("El importe (sin IVA) es de:" , productPrice , "€");


// //if...else...      +    PRECIO CON IVA
// let productIVA;
// if (product.type == "libros") {
//     productIVA = productPrice * 0.04;
// } else if (product.type == "alimentacion") {
//     productIVA = productPrice * 0.1;
// } else {
//     productIVA = productPrice * 0.21;
// }

// const totalPrice = productPrice + productIVA;
// console.log("El precio total es de:" , totalPrice , "€");


// SWITCH
let productIVA;
switch (product.type){
    case "alimentacion" : productIVA = 0.1 ; break;
    case "libros" : productIVA = 0.04 ; break;
    default : productIVA = 0.21 ; break;
};

 //AÑADIDO para mostrar el IVA aplicado
 let IVA;

if (productIVA === 0.1){
    IVA = "10%";
} else if (productIVA === 0.04){
    IVA = "4%";
} else{
    IVA = "21%";
};
console.log("Se le ha aplicado un IVA del" , IVA , "; esto son:" , productIVA , "€");
console.log("El precio total es de:" , productPrice + productPrice * productIVA , "€");

