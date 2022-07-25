function arraysum(numbers){
    let resultado = 0;
    for(let i = 0; i < numbers.length; i++) {
    resultado += numbers[i] * 2;
    }
    return resultado;
    }
let qualquer = [7,3]
    console.log(arraysum(qualquer))
