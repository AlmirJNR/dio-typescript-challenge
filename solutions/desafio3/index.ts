let botaoAtualizarHTML = document.getElementById('atualizar-saldo');
let botaoLimparHTML = document.getElementById('limpar-saldo');
let valorHTML = document.getElementById('valor') as HTMLInputElement | null;
let saldoHTML = document.getElementById('saldo');

if (!botaoAtualizarHTML) throw new Error("You're missing an tag with the id 'atualizar-saldo'");
if (!botaoLimparHTML) throw new Error("You're missing an tag with the id 'limpar-saldo'");
if (!valorHTML) throw new Error("You're missing an tag with the id 'valor'");
if (!saldoHTML) throw new Error("You're missing an tag with the id 'saldo'");

saldoHTML.innerHTML = '0';

botaoAtualizarHTML.addEventListener('click', function () {
    if (valorHTML && saldoHTML) {
        saldoHTML.innerHTML = `${(parseFloat(valorHTML.value) + parseFloat(saldoHTML.innerHTML)).toFixed(2)}`;
    }
});

botaoLimparHTML.addEventListener('click', () => {
    if (valorHTML && saldoHTML) {
        valorHTML.value = '';
        saldoHTML.innerHTML = '0';
    }
});
