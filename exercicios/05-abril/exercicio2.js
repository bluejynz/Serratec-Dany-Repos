var user = [];

var count = 0;
var updt = "n";


function update(){
    var name = prompt("Digite o nome");
    var age = parseInt(prompt("Digite a idade"));
    var sex = prompt("Digite o sexo (f | m)");

    if(count < 5){
        updt = prompt("Deseja alterar alguma informação? (s | n)").toLowerCase();
    }

    user.push({name, age, sex});
    count++;

    while(updt == "s"){
        update();
    }
}

update();

for(var i = 0; i < user.length; i++){
    document.getElementById("log").innerHTML += "Log " + (i + 1) + ":<br>";
    document.getElementById("log").innerHTML += "Nome: " + user[i].name + "<br>";
    document.getElementById("log").innerHTML += "Idade: " + user[i].age + "<br>";
    switch(user[i].sex){
        case "f":
            document.getElementById("log").innerHTML += "Sexo: Feminino<br>";
            break;
        case "m":
            document.getElementById("log").innerHTML += "Sexo: Masculino<br>";
            break;
    }
    document.getElementById("log").innerHTML += "<br>";
}