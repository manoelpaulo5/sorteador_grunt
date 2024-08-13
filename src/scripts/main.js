document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        let numeroMaximo = document.getElementById('numero-maximo').value;
        evento.preventDefault();
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        let numeroArredondado = Math.round(numeroAleatorio);

        if (numeroArredondado == 0) {
            let numeroFinal = (numeroArredondado + 1);
            document.getElementById('resultado-valor').innerText = numeroFinal;
        }else {
            document.getElementById('resultado-valor').innerText = numeroArredondado;
        }

        document.querySelector('.resultado').style.display = 'block'
    })
})