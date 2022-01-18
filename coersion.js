"Tipos de coersion"

Implicita 

4 + "34"
'434'

var a = 4 + "34"
undefined

typeof a
'string'

5 * 7
35

var b = 5 * 7;
undefined

typeof b
'number'

Explicita 

var a = 20;

var b = String(a);

console.log(b);

var nombre = "Edmoun";

var nomNumero = Number(nombre);

console.log(nomNumero);
