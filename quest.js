function validarEntrada(nome, idade, animal, vip){

if(nome === ""){
  return "Erro 400, nome é necessario!";
}

if(idade > 20 || idade < 0){
  return "Erro 400, ele está vivo mesmo?";
}

if(animal === "Gato" && vip === false){
  return "Erro 400, Seu Gato não está na lista VIP";
}
  return "Sucesso 201";
}

console.log(validarEntrada("", 10, "Cachorro", true));

console.log(validarEntrada("Rex", 25, "Cachorro", true));

console.log(validarEntrada("Mingau", 5, "Gato", false));

console.log(validarEntrada("Bob", 3, "Cachorro", false));
