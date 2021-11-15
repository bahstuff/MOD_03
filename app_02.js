
//Datos IRPF y SS en imagenes
const empleado = {
    bruto: 16500,
    hijos: 2,
    pagas: 14
}
console.log (empleado);

//SS
const segSocial = empleado.bruto < 50000 ? empleado.bruto * 0.0635 : 3101.42;

//IRPF
let deduccionIRPF;



if (empleado.bruto <= 14000) {
    if (empleado.hijos < 0) {
        console.log("El número introducido no es correcto");
    } else {
    deduccionIRPF = 0;
    }
} else if (empleado.bruto > 14000 && empleado.bruto <= 14690) {
    if (empleado.hijos < 0) {
        console.log("El número introducido no es correcto");
    } else if (empleado.hijos = 0) {
        deduccionIRPF = 0.05;
    } else if (empleado.hijos = 1) {
        deduccionIRPF = 0.03;
    } else {
        deduccionIRPF = 0;
    }
} else if (empleado.bruto > 14690 && empleado.bruto <= 15420) {
    if (empleado.hijos < 0) {
        console.log("El número introducido no es correcto");
    } else if (empleado.hijos = 0) {
        deduccionIRPF = 0.06;
    } else if (empleado.hijos = 1) {
        deduccionIRPF = 0.04;
    } else if (empleado.hijos = 2) {
        deduccionIRPF = 0.02;
    } else {
        deduccionIRPF = 0;
    }
} else if (empleado.bruto > 15420 && empleado.bruto <= 16310) {
    if (empleado.hijos < 0) {
        console.log("El número introducido no es correcto");
    } else if (empleado.hijos = 0) {
        deduccionIRPF = 0.07;
    } else if (empleado.hijos = 1) {
        deduccionIRPF = 0.05;
    } else if (empleado.hijos = 2) {
        deduccionIRPF = 0.03;
    } else {
        deduccionIRPF = 0;
    }
} else if (empleado.bruto > 16310 && empleado.bruto <= 17540) {
    if (empleado.hijos < 0) {
        console.log("El número introducido no es correcto");
    } else if (empleado.hijos = 0) {
        deduccionIRPF = 0.08;
    } else if (empleado.hijos = 1) {
        deduccionIRPF = 0.06;
    } else if (empleado.hijos = 2) {
        deduccionIRPF = 0.04;
    } else {
        deduccionIRPF = 0;
    }
} else if (empleado.bruto > 17540 && empleado.bruto <= 18970) {
    if (empleado.hijos < 0) {
        console.log("El número introducido no es correcto");
    } else if (empleado.hijos = 0) {
        deduccionIRPF = 0.09;
    } else if (empleado.hijos = 1) {
        deduccionIRPF = 0.07;
    } else if (empleado.hijos = 2) {
        deduccionIRPF = 0.05;
    } else if (empleado.hijos = 3) {
        deduccionIRPF = 0.02;
    } else {
        deduccionIRPF = 0;
    }
} else if (empleado.bruto > 18970 && empleado.bruto <= 20500) {
    if (empleado.hijos < 0) {
        console.log("El número introducido no es correcto");
    } else if (empleado.hijos = 0) {
        deduccionIRPF = 0.1;
    } else if (empleado.hijos = 1) {
        deduccionIRPF = 0.08;
    } else if (empleado.hijos = 2) {
        deduccionIRPF = 0.07;
    } else if (empleado.hijos = 3) {
        deduccionIRPF = 0.03;
    } else {
        deduccionIRPF = 0;
    }
} else if (empleado.bruto > 20500 && empleado.bruto <= 21840) {
    if (empleado.hijos < 0) {
        console.log("El número introducido no es correcto");
    } else if (empleado.hijos = 0) {
        deduccionIRPF = 0.11;
    } else if (empleado.hijos = 1) {
        deduccionIRPF = 0.1;
    } else if (empleado.hijos = 2) {
        deduccionIRPF = 0.08;
    } else if (empleado.hijos = 3) {
        deduccionIRPF = 0.05;
    } else if (empleado.hijos = 4) {
        deduccionIRPF = 0.01;
    } else {
        deduccionIRPF = 0;
    }
} else {
    console.log('No están metidos esos datos, SORRY')
}


const IRPF = empleado.bruto * deduccionIRPF;

const netoAnual = empleado.bruto - IRPF - segSocial;
const netoMensual = netoAnual / empleado.pagas;
console.log('Tu sueldo neto mensual es de : ', netoMensual, '€')

