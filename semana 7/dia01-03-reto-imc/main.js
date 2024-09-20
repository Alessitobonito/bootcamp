document.addEventListener('DOMContentLoaded', (event) => {
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const button = document.querySelector("button");
    const imcType = document.querySelector("#IMCtype");

    button.addEventListener('click', function(event){
        const pesoValue = parseFloat(peso.value);
        const alturaValue = parseFloat(altura.value) / 100;

        if (isNaN(pesoValue) || isNaN(alturaValue)) {
            imcType.textContent = "Ingresa valores válidos.";
            return;
        }

        const imc = pesoValue / (alturaValue * alturaValue);

        let imcText = "";
        if (imc < 18.5) {
            imcText = "Tu Índice de Masa Corporal es BAJO";
        } else if (imc >= 18.5 && imc < 24.9) {
            imcText = "Tu Índice de Masa Corporal es NORMAL";
        } else if (imc >= 25 && imc < 29.9) {
            imcText = "Tu Índice de Masa Corporal es SOBREPESO";
        } else {
            imcText = "Tu Índice de Masa Corporal es OBESO";
        }
        peso.value = ''
        altura.value = ''

        imcType.textContent = `${imcText} (${imc.toFixed(2)})`;
    });
});
