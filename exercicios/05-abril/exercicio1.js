var person = {
    name: "",
    age: 0,
    sex: ""
}

function checkNameInput(){
    var n = document.getElementById("pName").value;
    if(n != ""){
        n = makeNameCapitalize(n)
        person.name = n;
    } else {
        alert("Você precisa digitar um nome");
    }
}

function makeNameCapitalize(value){
    var nomes = value.toLowerCase().split(' ');
            for(var i = 0; i < nomes.length; i++){
                nomes[i] = nomes[i].charAt(0).toUpperCase() + nomes[i].substring(1);
            }
            return nomes.join(' ');
}

function checkAgeInput(){
    var a = parseInt(document.getElementById('pAge').value);
    if(!isNaN(a)){
        person.age = a;
    } else if(isNaN(a) || a > 150){
        alert("Digite uma idade válida");
    }
}

function checkSexInput(){
    var s = document.getElementById('pSex').value.toLowerCase();
    switch(s){
        case "f":
            person.sex = "Feminino";
            break;
        case "m":
            person.sex = "Masculino";
            break;
        default:
            alert("Digite um sexo válido (f | m)");
            break;
    }
}

function buttonCadastrar(){
    checkNameInput();
    checkAgeInput();
    checkSexInput();
}

function showPerson(){
    if(person.name != "" && person.age != 0 && person.sex != ""){
        window.location.href = `exercicio1res.html?person.name=${person.name}&person.age=${person.age}&person.sex=${person.sex}`;
    }
}

