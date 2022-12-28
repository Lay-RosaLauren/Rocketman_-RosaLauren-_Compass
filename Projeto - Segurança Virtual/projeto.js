function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosLay = ['Lay', 'Marina', 'Nathy', 'Neto', 'Renato', 'Alfredo', 'Zanon'];
    if (ConvidadosLay.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!';
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!';
    }
}
