// textos
const title = document.getElementById("title_header");
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');

// Botões
const btnIniciar = document.getElementById('Iniciar');
const btnPausar = document.getElementById('Pausar');
const btnReiniciar = document.getElementById('Reiniciar');

// eventos
btnIniciar.addEventListener('click', iniciarFunc);
// btnPausar.addEventListener('click', pausarFunc);
btnReiniciar.addEventListener('click', reiniciarFunc);

//variaveis importantes
let min30 = -1;
let intervalId;
let ponto = -1;


// funções
function iniciarFunc() {
    title.innerHTML = 'A contagem começou⏳';
    btnIniciar.innerHTML = 'contando...'
    iniciarCronometro();
};


function iniciarCronometro() {

    /* armazena 30 minutos e ativa a função alterarRelogio, depois reseta e começa
    a contar do zero */
    function atualizarHoras() {
        let dataAtual = new Date();
        let horas = dataAtual.getHours();
        let minutos = dataAtual.getMinutes();
        let segundos = dataAtual.getSeconds();

        min30 += 1;

        if (min30 == 30) {
            alteraRelogio();
            min30 = 0;
        }

        console.log(min30);
        console.log(horas, minutos, segundos);
    }

    atualizarHoras();

    //atualiza a função atualizarHoras a cada 1 minuto
    intervalId = setInterval(atualizarHoras, 1000 * 60);
};


//chama a função alteração
function alteraRelogio() {

    /*recebe o a variavel ponto em um confunto de condicionais para verificar
    e assim determinar a hora atual do relogio */
    function alteracao() {
        ponto += 1;

        console.log(`ponto: ${ponto}`);

        if (ponto == 0) {    // 04:30
            hora.innerHTML = '04';
            minuto.innerHTML = '30';

        } else if (ponto == 1) { //04:00
            hora.innerHTML = '04';
            minuto.innerHTML = '00';

        } else if (ponto == 2) { // 03:30
            hora.innerHTML = '03';
            minuto.innerHTML = '30';

        } else if (ponto == 3) { //03:00
            hora.innerHTML = '03';
            minuto.innerHTML = '00';

        } else if (ponto == 4) { //02:30
            hora.innerHTML = '02';
            minuto.innerHTML = '30';

        } else if (ponto == 5) { //02:00
            hora.innerHTML = '02';
            minuto.innerHTML = '00';

        } else if (ponto == 6) { //01:30
            hora.innerHTML = '01';
            minuto.innerHTML = '30';

        } else if (ponto == 7) { //01:00
            hora.innerHTML = '01';
            minuto.innerHTML = '00';

        } else if (ponto == 8) { //00:30
            hora.innerHTML = '00';
            minuto.innerHTML = '30';

            iniciarCronometro15();
        } 
    }
    alteracao();
};

let pisca;

function finalDeSimulado() {
    function piscarTela() {
        var corAtual = document.body.style.backgroundColor;
        var corNova = corAtual === 'red' ? 'white' : 'red';
        document.body.style.backgroundColor = corNova;
    }

    // Chama a função piscarTela a cada 500 milissegundos (0,5 segundos)
    pisca = setInterval(piscarTela, 500);
}

//reinicia todo o sistema
function reiniciarFunc() {

    // limparIntervalo()
    setTimeout(function () {
        clearInterval(intervalId);
        console.log('intervalo parado');
    });

    setTimeout(function () {
        clearInterval(pisca);
        console.log('parar de piscar');
    });
    var corAtual = document.body.style.backgroundColor;
    document.body.style.backgroundColor = corAtual;

    title.innerHTML = 'Aperte Iniciar para começar';
    btnIniciar.innerHTML = 'Iniciar';
    hora.innerHTML = '05';
    minuto.innerHTML = '00';
    ponto = -1;
    min30 = -1;
    min15 = -1;
    setTimeout(function () {
        clearInterval(intervalId15);
        console.log('parar de piscar');
    });
    ponto15 = -1;

    console.log('reiniciar func ativado')
};

//função de 15 minutos
//variaveis importantes
let min15 = -1;
let intervalId15;
let ponto15 = -1;

function iniciarCronometro15() {
    setTimeout(function () {
        clearInterval(intervalId);
        console.log('intervalo parado');
    });

    /* armazena 30 minutos e ativa a função alterarRelogio, depois reseta e começa a contar do zero */
    function atualizarHoras15() {

        min15 += 1;

        if (min15 == 15) {
            alteraRelogio15();
            min15 = 0;
        }

        console.log(min15);
    }

    atualizarHoras15();

    //atualiza a função atualizarHoras a cada 1 minuto
    intervalId15 = setInterval(atualizarHoras15, 1000 * 60);
};

//chama a função alteração
function alteraRelogio15() {

    /*recebe o a variavel ponto em um confunto de condicionais para verificar
    e assim determinar a hora atual do relogio */
    function alteracao15() {
        ponto15 += 1;

        console.log(`ponto: ${ponto15}`);

        if (ponto15 == 0) {    // 05:00
            hora.innerHTML = '00';
            minuto.innerHTML = '15';

        } else if (ponto15 == 1) { //04:30
            hora.innerHTML = '00';
            minuto.innerHTML = '00';
            title.innerHTML = 'O simulado acabou!!';
            finalDeSimulado();

        } 
    }
    alteracao15();
};