function comprar() {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = document.getElementById('qtd').value;

    switch (tipo) {
        case 'inferior':
            if (quantidadeCompra <= quantidadeInferior) {
                document.getElementById('qtd-inferior').textContent = String(quantidadeInferior - quantidadeCompra);
            } else {
                alert(`Quantidade Indisponível para ${tipo}`);
            }
            break;
        case 'superior':
            if (quantidadeCompra <= quantidadeSuperior) {
                document.getElementById('qtd-superior').textContent = String(quantidadeSuperior - quantidadeCompra);
            } else {
                alert(`Quantidade Indisponível para ${tipo}`);
            }
            break;
        case 'pista':
            if (quantidadeCompra <= quantidadePista) {
                document.getElementById('qtd-pista').textContent = String(quantidadePista - quantidadeCompra);
            } else {
                alert(`Quantidade Indisponível para ${tipo}`);
            }
            break;
    }
}