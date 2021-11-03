// const precioOriginal = 120;
// const descuento = 18;
const cupones = [
    {
        key: "cupon1",
        descuento: 20,
    },
    {
        key: "cupon2",
        descuento: 30,
    },
    {
        key: "cupon3",
        descuento: 50
    }
];

function getDiscount(cupon, arrayDiscount) {
    const findCupon = arrayDiscount.find(value => value.key === cupon);
    if(findCupon){
        return findCupon.descuento;
    }
    return false;
};

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const cuponDiscount = document.getElementById("cuponDescuento");
    const valueCupon = cuponDiscount.value;
    const priceValue = inputPrice.value;

    if(priceValue < 0){
        alert("No se permiten valores negativos")
    }else{
        const resultadoCupones = getDiscount(valueCupon, cupones); 
        if(resultadoCupones){
            const precioConDescuento = calcularPrecioConDescuento(priceValue, resultadoCupones);
            const resultPrice = document.getElementById("resultPrice");
            resultPrice.innerText = "El precio del producto con descuento es: $" + precioConDescuento
        }else{
            const precioConDescuento = calcularPrecioConDescuento(priceValue, 0);
            const resultPrice = document.getElementById("resultPrice");
            resultPrice.innerText = "El precio es de: $" + precioConDescuento;
        }
    }
}

