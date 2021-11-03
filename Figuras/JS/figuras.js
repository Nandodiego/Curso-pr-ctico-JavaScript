//Variables globales
const parrafo = document.querySelector("#parrafoAMostrar");
const parrafo2 = document.querySelector("#parrafoAMostrar2");
const parrafo3 = document.querySelector("#parrafoAMostrar3");

//Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm")

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI)

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML

//Cuadrado

function calcularPerimetroCuadrado() {
   const input = document.getElementById("inputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   showMessage(`El resúltado de el perímetro es: `, parrafo, perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    showMessage(`El resúltado de el área es : `, parrafo, area);
}

function showMessage(message, elemento, valueToShow) {
    elemento.innerHTML = `${message} ${valueToShow}`;
};

//Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2")
    const value2 = Number(input2.value);
    const input3 = document.getElementById("inputBaseTriangulo")
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    showMessage(`El resúltado del perímetro es: `, parrafo2, perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2")
    const value2 = Number(input2.value);
    const input3 = document.getElementById("inputBaseTriangulo")
    const value3 = Number(input3.value);

    const perimetro = areaTriangulo(value1,value2,value3);
    showMessage(`El resúltado del área es: `, parrafo2, perimetro);
}

//Círculo

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const diametro = diametroCirculo(value);
    showMessage(`El resúltado del diámetro es: `, parrafo3, diametro);
};

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    showMessage(`El resúltado del perímetro es: `, parrafo3, perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    showMessage(`El resúltado del área es: `, parrafo3, area)
}