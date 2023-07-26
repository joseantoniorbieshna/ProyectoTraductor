/*Ruta Letras*/
let rutaImgLetra = {
    a: "./letters/A.png",
    b: "./letters/B.png",
    c: "./letters/C.png",
    d: "./letters/C.png",
    e: "./letters/C.png",
    f: "./letters/C.png",
    g: "./letters/C.png",
    h: "./letters/C.png",
    i: "./letters/C.png",
    j: "./letters/C.png",
    k: "./letters/C.png",
    l: "./letters/C.png",
    m: "./letters/C.png",
    n: "./letters/C.png",
    ñ: "./letters/C.png",
    o: "./letters/C.png",
    p: "./letters/C.png",
    q: "./letters/C.png",
    r: "./letters/C.png",
    s: "./letters/C.png",
    t: "./letters/C.png",
    u: "./letters/C.png",
    v: "./letters/C.png",
    w: "./letters/C.png",
    x: "./letters/C.png",
    y: "./letters/C.png",
    z: "./letters/C.png",
    ñ: "./letters/C.png",
}
/*Variables*/
let barText= document.getElementById("texto")
let miboton= document.getElementById("bttn_traducir")
var palabrasValidas = "abcdefghijklmnñopqrstuvwxyz ".split("")

/*Listener*/
miboton.addEventListener("click",translateText)

/*Main*/
function translateText(){
    let texto = barText.value.toLowerCase().split("")
    console.log(proveIsValid(texto))


    isValid=proveIsValid(texto)
    createResponse(texto,isValid)

}

/*Funciones*/
function proveIsValid(texto){
    for (i in texto){
        console.log();
        if(!palabrasValidas.includes(texto[i])){
            return false
        }
    }
    return true
}

function createResponse(texto,isValid){
    let resultadoDIV = document.querySelector(".resultado")
    resultadoDIV.innerHTML=""
    if(isValid){
        for(i in texto){/*Recorro por letra, la creo y la inserto*/
            let imagen = createImgByLetter(texto[i])
            resultadoDIV.appendChild(imagen)
        }
    }else{
        resultadoDIV.innerHTML = "<h1>Error alguna palabra no es valida. El rango de palabra valido es de la a-z incluyendo la ñ!</h1>"
        resultadoDIV.innerHTML += "<h1>Prueba Otra vez</h1>"
    }
}

function createImgByLetter(letter){
    if(letter==' '){
        const space = document.createElement("div")
        space.className = "space"
        return space
    }else{/*Crear imagen*/
        console.log(rutaImgLetra[letter]);
        const img = document.createElement("img")
        img.src = rutaImgLetra[letter]
        return img
    }
}