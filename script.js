function calcular() {

    let capital = parseFloat(document.getElementById("capital").value);
    let juros = parseFloat(document.getElementById("juros").value);
    let periodo = parseInt(document.getElementById("periodo").value);
  
    let juroSimples = capital * (juros/100) * periodo;
  
    let composto = capital * Math.pow((1 + (juros/100)), periodo);
    let jurosComposto = composto - capital;
  
    document.getElementById("simples").value = juroSimples.toFixed(2);
    document.getElementById("composto").value = jurosComposto.toFixed(2);
}



  