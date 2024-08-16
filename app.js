function encriptar(){
    let original = document.getElementById("entrada").value;
    let mod1 = original.replaceAll('a', 1).replaceAll('e', 2).replaceAll('i', 3).replaceAll('o', 4).replaceAll('u', 5);
    let mod2 = mod1.replaceAll('1', 'ai').replaceAll('2', "enter").replaceAll('3', "imes").replaceAll('4', "ober").replaceAll('5', 'ufat');
    resultado = document.getElementById("resultado");
    resultado.innerHTML = mod2
}   

function desencriptar(){
    let original = document.getElementById("entrada").value;
    let mod = original.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
    resultado = document.getElementById("resultado");
    resultado.innerHTML = mod;
}

function copiar(){
    let texto = document.getElementById("resultado").innerHTML;
    navigator.clipboard.writeText(texto);
    alert(texto)
}