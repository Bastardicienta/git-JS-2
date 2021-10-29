//Escribe una función que reciba un parámetro y lo imprima en consola.
function greetings(country){
console.log("Un saludo desde Colombia para " + country);
}
//greetings("Brasil")

//Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación.
function addition(num1,num2){
    if(typeof (num1) != 'number' || typeof (num2) != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
    console.log("El resultado es: " + (Number(num1) + Number(num2)));
    }
}
//addition(-25,9)

//Escribe una función que reciba dos parámetros, los reste e imprima en consola el resultado de la operación.
function subtraction(num1,num2){
    if(typeof (num1) != 'number' || typeof (num2) != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
    console.log("El resultado es: " + (Number(num1) - Number(num2)));
    }
}
//subtraction(3,2)

//Escribe una función que reciba dos parámetros, los multiplique e imprima en consola el resultado de la operación.
function multiplication(num1,num2){
    if(typeof (num1) != 'number' || typeof (num2) != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
    console.log("El resultado es: " + (Number(num1) * Number(num2)));
    }
}
//multiplication(8,2000)

//Escribe una función que reciba dos parámetros, los divida e imprima en consola el resultado de la operación.
function division(num1,num2){
    if(typeof (num1) != 'number' || typeof (num2) != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
    console.log("El resultado es: " + (Number(num1) / Number(num2)));
    }
}
//division(2720,200)

//Escribe una función que reciba el radio de un círculo como parámetro, calcule el área del círculo e imprima en consola.
function circleArea(radio){
    if(typeof (radio) != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
        const pi = 3.1416;
        const area = multiplication(pi,(Math.pow(radio,2)));
        console.log("El área del círculo es: " + area);
    }
}
circleArea(5)

//Escribe una función que reciba como parámetro un valor en metros e imprima en consola su equivalente en kilómetros, con máximo dos decimales.
function metersToKilometers(meters){
    if(typeof (meters) != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
        console.log(meters + " metros es igual a " + (meters/1000).toFixed(2) +" kilómetros")
    }
}
//metersToKilometers(3800)

//Escribe una función que reciba como parámetro un valor en grados Celsius e imprima en consola su equivalente en grados Farenheit, con máximo dos decimales.
function celsiusToFahrenheit(celsius){
    if(typeof (celsius) != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
        console.log(celsius + "° Celsius es igual a " + ((celsius*1.8)+32).toFixed(2) + "° Fahrenheit")
    }
}
//celsiusToFahrenheit(50)

// Escribe una función que reciba las siguientes listas de números como parámetro y encuentre el valor más alto y más bajo en la lista. Lista1 = [10,4,2,20,5] Lista2=[0,0,0,1,0] Lista3=[-13,10,9,8,0,2000,-1]

//Con este me hice bolita

// Escribe una función que reciba dos parámetros con los que se calculará el valor exponencial de una base. El primer parámetro será la base y el segundo será el exponente. Imprimir el resultado del valor exponencial de la base en consola.

function exponential(base,exponent){
    if(typeof (base) !='number' || typeof (exponent) != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
        console.log("El valor exponencial es " + Math.pow(base,exponent))
    }
}
//exponential(8,7)

//Escribe una función que reciba un número como parámetro. Este número será la cantidad de veces que se debe solicitar, con la función prompt, que el usuario ingrese el nombre de un país diferente. Después de que el usuario ingrese el nombre de los países, el sistema debe mostrar un mensaje en pantalla indicando el nombre del país y cuántas letras tiene el nombre del país.

//Con este también me hice bolita