function agendar() {
    alert("Agendamento realizado com sucesso!");
}

function atualizarRelogio() {

    let agora = new Date();

    document.getElementById("relogio").innerHTML =
        "Horário atual: " + agora.toLocaleTimeString();
}

setInterval(atualizarRelogio, 1000);
