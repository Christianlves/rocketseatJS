function adicionar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
  }
  
  function subtrair(primeiroNumero, segundoNumero) {
    return primeiroNumero - segundoNumero;
  }
  
  function multiplicar(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero;
  }
  
  function dividir(primeiroNumero, segundoNumero) {
    return primeiroNumero / segundoNumero;
  }
  
  function calcular() {
    var primeiroNumero = Number(prompt("Digite o primeiro número:"));
    var operador = prompt("Digite o operador (+, -, *, /):");
    var segundoNumero = Number(prompt("Digite o segundo número:"));
    var resultado;
  
    switch (operador) {
      case '+':
        resultado = adicionar(primeiroNumero, segundoNumero);
        break;
      case '-':
        resultado = subtrair(primeiroNumero, segundoNumero);
        break;
      case '*':
        resultado = multiplicar(primeiroNumero, segundoNumero);
        break;
      case '/':
        resultado = dividir(primeiroNumero, segundoNumero);
        break;
      default:
        resultado = "Operador inválido";
    }
  
    alert("Resultado: " + resultado);
  }
  
  calcular();

