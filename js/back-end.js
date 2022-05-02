
function limparTela() {

    var textoColocado = document.getElementById('texto-colocado').value;
    var textoFormatado = document.getElementById('texto-formatado');

    document.getElementById('texto-colocado').value = "";
    document.getElementById('texto-formatado').value = "";
    document.getElementById('texto-formatado').style.background = 'url(img/fundoTxt.png)';

}


function tirarImgParaLeitura() {

    var textoColocado = document.getElementById('texto-colocado').value;
    var textoFormatado = document.getElementById('texto-formatado');

    textoFormatado.style.background = '#555555';

}



function verifica() {

    var textoColocado = document.getElementById('texto-colocado').value
    var tamanho = textoColocado.length;
    var rex = /[a-z]+/;

    if (textoColocado != "") {
        for (indice = 0; indice < tamanho; indice++) {
            let novo = textoColocado[indice].match(rex);
            if ((novo != textoColocado[indice]) && (textoColocado[indice] != " ")) {
                limparTela();
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}






function copiar() {

    var textoFormatado = document.getElementById('texto-formatado').value;

    navigator.clipboard.writeText(textoFormatado)
    alert("copiado!");
    limparTela();

}







function criptografia() {

    if (verifica()) {

        tirarImgParaLeitura();

        var textoColocado = document.getElementById('texto-colocado').value;
        var textoFormatado = document.getElementById('texto-formatado');

        textoColocado = textoColocado.replace(/e/gi, "enter");
        textoColocado = textoColocado.replace(/i/gi, "imes");
        textoColocado = textoColocado.replace(/a/gi, "ai");
        textoColocado = textoColocado.replace(/o/gi, "ober");
        textoColocado = textoColocado.replace(/u/gi, "ufat");

        textoFormatado.value = textoColocado;
    }
    else {
        limparTela();
        alert("digite um frase válida, que não possua nenhum caractere especial, nem letras maiúsculas e nem números!");
    }
}









function descriptografia() {

    if (verifica()) {

        tirarImgParaLeitura();

        var textoColocado = document.getElementById('texto-colocado').value;
        var textoFormatado = document.getElementById('texto-formatado');

        textoColocado = textoColocado.replace(/ai/gi, "a");
        textoColocado = textoColocado.replace(/enter/gi, "e");
        textoColocado = textoColocado.replace(/imes/gi, "i");
        textoColocado = textoColocado.replace(/ober/gi, "o");
        textoColocado = textoColocado.replace(/ufat/gi, "u");

        textoFormatado.value = textoColocado;
    }
    else {
        limparTela();
        alert("digite um frase válida, que não possua nenhum caractere especial, nem letras maiúsculas e nem números");
    }
}


