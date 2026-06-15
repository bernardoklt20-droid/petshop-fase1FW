function agendar() {
    alert("Agendamento realizado com sucesso!");
}

function atualizarRelogio() {

    let relogio = document.getElementById("relogio");

    if (relogio) {

        let agora = new Date();

        relogio.innerHTML =
            "Horário atual: " + agora.toLocaleTimeString();
    }
}

setInterval(atualizarRelogio, 1000);
