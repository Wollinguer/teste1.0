function fatorial(n) {
  if (!Number.isinteger(n) || n<0){
    return "Digite um número inteiro positivo";
  }
  let resultado = 1;

for (let i=1; i<= n; i++){
  resultado *=i;
}
  return resultado;
}

console.log(fatorial(5));
