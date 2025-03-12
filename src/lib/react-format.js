function mask(mascara, str) {
  var x = 0;
  var p = 0;
  var res = "";

  if (str.length == 0) return "";

  for (var x = 0; x <= mascara.length - 1; x++) {
    if (mascara.charAt(x) == "#") {
      res = res + str.charAt(p);
      p++;
    } else res = res + mascara.charAt(x);

    if (p == str.length) break;
  }

  return res;
}

function formatar(target, formato, extra) {
  var texto = target.value.replace(/\D/g, "");
  var obj = {};

  if (formato.toLowerCase() == "telefonefixo")
    texto = mask("(##) ####-####", texto);
  else if (formato.toLowerCase() == "celular")
    texto = mask("(##) #####-####", texto);
  else if (formato.toLowerCase() == "cnpj")
    texto = mask("##.###.###/####-##", texto);
  else if (formato.toLowerCase() == "cpf")
    texto = mask("###.###.###-##", texto);
  else if (formato.toLowerCase() == "ie") texto = mask(formataIE(extra), texto);
  else if (formato.toLowerCase() == "cnpjorcpf") {
    if (texto.length > 11) texto = mask("##.###.###/####-##", texto);
    else texto = mask("###.###.###-##", texto);
  } else if (formato.toLowerCase() == "personalizado")
    texto = mask(extra, texto);
  else if (formato.toLowerCase() == "valor") {
    if (texto.length > 0) {
      obj.value = parseFloat(texto) / 100;
      texto = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
      }).format(parseFloat(texto) / 100);
    }
  } else if (formato.toLowerCase() == "money") {
    if (texto.length > 0) {
      obj.value = parseFloat(texto) / 100;
      texto = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(parseFloat(texto) / 100);
    }
  } else if (formato.toLowerCase() == "cep") texto = mask("##.###-###", texto);
  else if (formato.toLowerCase() == "data") {
    texto = texto.substring(0, 8);
    texto = mask("##/##/####", texto);

    if (texto.length == 10 && !validaData(texto)) texto = "";
  } else if (formato.toLowerCase() == "peso") {
    if (texto.length > 0) {
      obj.value = parseFloat(texto) / 1000;
      texto = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 3,
      }).format(parseFloat(texto) / 1000);
    }
  }

  obj.texto = texto;

  if (!obj.value) obj.value = texto;

  target.value = texto;
  return obj;
}

export { formatar };
