//Ej_01
// const agendaEscolar = [
//     {
//         day: "Lunes",
//         subject: "Matemáticas",
//     },
//     {
//         day: "Martes",
//         subject: "Lengua",
//     },
//     {
//         day: "Miércoles",
//         subject: "Física",
//     },
//     {
//         day: "Jueves",
//         subject: "Química",
//     },
//     {
//         day: "Viernes",
//         subject: "Gimnasia",
//     },
// ]

//EJ_01 · OPCION 1
const dayOption1 = "lunes"
if (dayOption1 == "lunes"){
    console.log ("Hoy es lunes! Tienes clase de Matemáticas");
}
 
//EJ_01 · OPCION 2

let dayOption2 = "Viernes";
switch (dayOption2){
    case "Lunes" : console.log("Hoy es Lunes, tienes clase de Matemáticas") ; break;
    case "Martes" : console.log("Hoy es martes, tienes clasee de Lengua") ; break;
    case "Miércoles" : console.log("Hoy es miércoles tienes clase de Física") ; break;
    case "Jueves" : console.log("Hoy es jueves, tienes clase de Química") ; break;
    case "Viernes" : console.log("¡Hoy es viernes! tienes clase de Gimnasia") ; break;
};


//EJ_02
const hora = 23;

if (hora >= 6 && hora <= 12) {
    console.log("Buenos días!!");
} else if (hora>=13 && hora<=20) {
    console.log("Buenas tardes!!");
} else if(hora>=21 && hora<=24) {
    console.log("Buenas noches!!");
} else if(hora>=1 && hora<=5) {
    console.log("Buenas noches!!");
} else {
    console.log("No es una hora válida.");
}

//EJ_03
const diaSemana = 4;
switch (diaSemana) {
    case 1: console.log("Hoy es Lunes"); break;
    case 2: console.log("Hoy es Martes"); break;
    case 3: console.log("Hoy es Miércoles"); break;
    case 4: console.log("Hoy es Jueves"); break;
    case 5: console.log("Hoy es Viernes"); break;
    case 6: console.log("Hoy es Sábado"); break;
    case 7: console.log("Hoy es Domingo"); break;
}

//EJ_04 * notas modificadas del enunciado
const nombreAlumna = {
    nota1 : 5,
    nota2 : 10,
    nota3 : 10,
}

const notaMedia = (nombreAlumna.nota1 + nombreAlumna.nota2 + nombreAlumna.nota3) / 3;
if (notaMedia < 5) {
    console.log("Tu nota es un", notaMedia , ", tienes un SUSPENSO.");
} else if (notaMedia >= 5 && notaMedia < 7) {
    console.log("Tu nota es un", notaMedia , ", eres APTO.");
} else if (notaMedia >= 7 && notaMedia <9 ) {
    console.log("Tu nota es un", notaMedia , ", ¡tienes un NOTABLE!");
} else if (notaMedia >= 9 && notaMedia <10 ) {
    console.log("Tu nota es un", notaMedia , ", ¡felicidades! Tienes un SOBRESALIENTE!");
}  else if (notaMedia == 10 ) {
    console.log("Tu nota es un", notaMedia , ", ¡ENHORABUENA tienes una MATRÍCULA DE HONOR!");
} else {
    console.log("ERROR. Comprueba que la nota está correctamente introducida.");
}

//EJ_05

const día = 14;
const mesNacimiento = "Marzo";
let fecha = día + ' de ' + mesNacimiento;
console.log(fecha);
if(día >= 20 && 31>= día && mesNacimiento == 'Enero' ) {
    console.log('ACUARIO: vas a morir!');
} else if (día >= 1 && 18 >= día && mesNacimiento == 'Febrero' ) {
    console.log('ACUARIO: vas a morir!');
} else if (día >= 19 && 29 >= día && mesNacimiento == 'Febrero' ) {
    console.log('PISCIS: vas a morir!');
} else if (día >= 1 && 20 >= día && mesNacimiento == 'Marzo' ) {
    console.log('PISCIS: vas a morir!');
} else if (día >= 21 && 31 >= día && mesNacimiento == 'Marzo' ) {
    console.log('ARIES: vas a morir!');
} else if (día >= 1 && 19 >= día && mesNacimiento == 'Abril' ) {
    console.log('PISCIS: vas a morir!');
} else if (día >= 20 && 30 >= día && mesNacimiento == 'Abril' ) {
    console.log('TAURO: vas a morir!');
} else if (día >= 1 && 20 >= día && mesNacimiento == 'Mayo' ) {
    console.log('TAURO: vas a morir!');
} else if (día >= 21 && 31 >= día && mesNacimiento == 'Mayo' ) {
    console.log('GÉMINIS: vas a morir!');
} else if (día >= 1 && 20 >= día && mesNacimiento == 'Junio' ) {
    console.log('GÉMINIS: vas a morir!');
} else if (día >= 21 && 31 >= día && mesNacimiento == 'Junio' ) {
    console.log('CANCER: vas a morir!');
} else if (día >= 1 && 22 >= día && mesNacimiento == 'Julio' ) {
    console.log('CANCER: vas a morir!');
} else if (día >= 23 && 31 >= día && mesNacimiento == 'Julio' ) {
    console.log('LEO: vas a morir!');
} else if (día >= 1 && 22 >= día && mesNacimiento == 'Agosto' ) {
    console.log('LEO: vas a morir!');
} else if (día >= 23 && 31 >= día && mesNacimiento == 'Agosto' ) {
    console.log('VIRGO: vas a morir!');
} else if (día >= 1 && 22 >= día && mesNacimiento == 'Septiembre' ) {
    console.log('VIRGO: vas a morir!');
} else if (día >= 23 && 31 >= día && mesNacimiento == 'Septiembre' ) {
    console.log('LIBRA: vas a morir!');
} else if (día >= 1 && 22 >= día && mesNacimiento == 'Octubre' ) {
    console.log('LIBRA: vas a morir!');
} else if (día >= 23 && 31 >= día && mesNacimiento == 'Octubre' ) {
    console.log('ESCORPIO: hoy es tu día!');
} else if (día >= 1 && 21 >= día && mesNacimiento == 'Noviembre' ) {
    console.log('ESCORPIO: hoy es tu día!');
} else if (día >= 22 && 31 >= día && mesNacimiento == 'Noviembre' ) {
    console.log('SAGITARIO: hoy es tu día!');
} else if (día >= 1 && 21 >= día && mesNacimiento == 'Diciembre' ) {
    console.log('SAGITARIO: hoy es tu día!');
} else if (día >= 22 && 31 >= día && mesNacimiento == 'Diciembre' ) {
    console.log('CAPRICORNIO: hoy es tu día!');
} else if (día >= 1 && 19 >= día && mesNacimiento == 'Enero' ) {
    console.log('CAPRICORNIO: hoy es tu día!');
} else {
    console.log('¿¿¿¿Qué fecha es esa????');
}


//EJ_06 , EJ_07 y EJ_08
const numero = -5;
const numeroPar =  numero % 2 == 0 ? console.log("El número" , numero , "es par") : console.log("El número" , numero , "es impar");
const valorNumero = numero < 0 ? console.log("El número" , numero , "es negativo"): console.log("El número" , numero , "es positivo");
const  mayor100= numero > 100 ? console.log("El número" , numero , "es mayor que 100"): console.log("El número" , numero , "es menor que 100");

//EJ_09
const a = 3;
const b = 4;
const c= 15;
const sonSuma = a + b === c ? console.log (a + ' + ' + b + ' = ' , c) : console.log (a + ' + ' + b + ' ≠ ' + c);

//EJ_10
var square ={
    sideOne: 1,
    sideTwo: 3,
    typeOfGeometricFigure: 'Cuadrado'
}

var circle = {
    radius: 5,
    typeOfGeometricFigure: 'Circulo'
}

const squareArea = square.sideOne * square.sideTwo;
const Pi = 3.14;
const circleArea = Math.pow(Pi * circle.radius , 2);
console.log('Area del cuadrado:', squareArea , 'Area del circulo:' , circleArea);

