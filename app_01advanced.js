//ADVANCED VAT EXERCISE

var product = {
    count: 3,
    price: 12.55,
    type: "ropa",
};

function getVat(product) {
    if (product.type === "alimentacion") {
        return 0.1;
    } else if (product.type === "libros") {
        return 0.04;
    } else {
        return 0.21;
    }
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

function getTotal(product) {
    return product.count > 0 ? product.count * product.price : 0;
}


function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;

    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}

printProductPrice(product);