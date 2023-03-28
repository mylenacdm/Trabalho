function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Magreza");
    }
    if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Normal");
    }
    if (imc >= 25 && imc <= 29.9) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Sobrepeso");
    }
    if (imc >= 30.0 && imc <= 39.9) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Obesidade");
    }
    if (imc > 40) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Obesidade grave");
    }
    
}

let mudarcor1 = document.getElementById("evento")

mudarcor1.addEventListener("mouseover", () => {
    mudarcor1.style.background = "#45726e"
})

mudarcor1.addEventListener("click", () => {
    mudarcor1.style.background = "white"
})

mudarcor1.addEventListener("mouseout", () => {
    mudarcor1.style.background = "#50a199"
})