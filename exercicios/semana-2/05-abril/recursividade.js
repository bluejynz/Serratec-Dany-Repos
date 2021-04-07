function recursivo(num){
    document.write(num);
    if(num > 0){
        recursivo(--num);
    }
}

recursivo(5);