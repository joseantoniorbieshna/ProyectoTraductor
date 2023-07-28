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
let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ".split("")
let myinterval=""
let timeInterval = 1000

/*Listener*/
texto.addEventListener("input",translateText)

/*Main*/
function translateText(){
    
    let texto = barText.value.toLowerCase().split("")
    console.log(proveIsValid(texto))

    isValid=proveIsValid(texto)


    createResponse(texto,isValid)
    
    if(isValid){
        createIntervalBigImage(texto,0)
    }

}

/*Funciones*/
function proveIsValid(texto){
    for (i in texto){
        console.log();
        if(!letrasValidas.includes(texto[i])){
            return false
        }
    }
    return true
}

function createResponse(texto,isValid){
    let resultadoDIV = document.querySelector(".img_container")
    resultadoDIV.innerHTML=""
    let idImage=0
    if(isValid){
        for(i in texto){/*Recorro por letra, la creo y la inserto*/
            let element=""
            letter = texto[i]

            if(texto[i]==" "){/*Si es espacio salto, si no rellenar letra*/
                element = document.createElement("div")
                element.className = "space"
            }else{
                console.log(rutaImgLetra[letter]);
                element = document.createElement("img")
                element.src = rutaImgLetra[letter]
                element.id = idImage
                idImage++

                //listener
                element.addEventListener("click",()=>{
                    createIntervalBigImage(texto,element.id)
                })
            }
            resultadoDIV.appendChild(element)
        }
    }else{
        resultadoDIV.innerHTML = "<h1>Error alguna palabra no es valida. El rango de palabra valido es de la a-z incluyendo la ñ!</h1>"
        resultadoDIV.innerHTML += "<h1>Prueba Otra vez</h1>"
    }
}





/*BIG IMAGE*/

function createBigImage(texto,i){
    letter = texto[i]
    myImg = document.createElement("img")
    myImg.src = rutaImgLetra[letter]
    myImg.className = "big_image"
    document.querySelector(".big_image_container").innerHTML=""
    document.querySelector(".big_image_container").appendChild(myImg)
}

function createIntervalBigImage(texto,i){
    texto = texto.filter(letra=>letra!=' ') /*Quitar espacios*/
    clearInterval(myinterval)

    createBigImage(texto,i)

    myinterval = setInterval(()=>{
        i++
        if(i>=texto.length){i=0}
        createBigImage(texto,i)
        console.log(texto[i]);
    },timeInterval)
}