function vezesLetraAparece(frase , letra){
var ocorrencias = 0; 
var letra ; 
var frase ; 
 
for (let i = 0, j = frase.length; i < j; i++) { 
    if (frase[i].toLowerCase() == letra) { 
        ocorrencias++; //Soma +1 a variavel ocorrencias 
    } 
} 
    return (ocorrencias)
}
 var letra = 'a';
 var frase = 'agua aaa';

console.log( vezesLetraAparece(frase , letra));

// console.log(letra)
