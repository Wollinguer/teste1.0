function fatorial(n) {
    if (typeof n !== "number") {
        return "Digite um número";
    }
    if (!Number.isInteger(n) || n < 0) {
        return "Digite um número inteiro positivo";
    }

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5));
console.log(fatorial(-2));
console.log(fatorial(2.5));
console.log(fatorial("abc"));
