var textoPrincipal = '\n\nEscopo global pode ser acessado de qualquer lugar.\nEscopo local só pode ser acessado no local criado.\nEscopo de bloco é tipo o local, só pode ser acessado onde foi criado.\n\nVar é uma alocação de memória para guardar um valor que pode ser alterado inúmeras vezes conforme a necessidade do usuário.\nLet é tipo var, mas com escopo local.\nConst é um valor que não pode ser mudado, ao contrário de variável ele é imutável.\n\nReferência é quando uma variável aponta pra um valor na memória, ou seja, ele não é copiado, apenas indicado.';
var i = 0;

function digitarTexto(){
    if(i < textoPrincipal.length){
        if(textoPrincipal.charAt(i) == '\ '){
            document.getElementById("text-box").innerText += "\xa0";
        }
        document.getElementById("text-box").innerText += textoPrincipal.charAt(i);
        i++;
        setTimeout(digitarTexto, 50);
    }
}