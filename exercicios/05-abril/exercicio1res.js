function processUser()
  {
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split('=');
    n = unescape(temp[1]);
    temp = parameters[1].split("=");
    a = unescape(temp[1]);
    temp = parameters[2].split("=");
    s = unescape(temp[1]);
    document.getElementById("spName").innerHTML = n;
    document.getElementById("spAge").innerHTML = a;
    document.getElementById("spSex").innerHTML = s;
  }

processUser();

