//Proceso:
bienvenida();
//Inicializa los contadores
let contador = 0;
let incorrect = 0;


//Funcion de bienvenida al sistema
function bienvenida() {
    console.log("Bienvenid@ al sistema de nivel de estrés");
}

//Funcion para asignar valor a las respuestas
function preguntas() {
    for (let i = 1; i <= 5; i = i + 1){
        respuesta = prompt("La respuesta a la pregunta "+i+" es: (A, B o C)");
        if (respuesta =="A"){
            //Deja el contador como estaba
        }
        else if (respuesta =="B"){
            contador = contador + 10;
        }
        else if (respuesta =="C"){
            contador = contador + 20;
        }
        else {
            alert("Respuesta incorrecta!!!");
            incorrect = incorrect + 1;
        }
    }
}

/*Resultado según valor del contador.
 Valor entre 0 y 20 da rutina normal. ESTRES BAJO,
 Valor entre 21 y 60 da rutina a ajustar. ESTRES MEDIO,
 Valor superior a 60 da rutina a ajustar. ESTRES ALTO*/

function role() {
    if (contador <= 20){
        alert("NIVEL BAJO. Su rutina diaria parece ser normal. Pero siempre se puede estar mejor!!");
    }
    else if(contador > 20 && contador <= 60){
        alert("NIVEL MEDIO. Su rutina diaria no es la adecuada y su nivel de estres puede requerir de un ajuste");
    }
    else {
        alert("NIVEL ALTO. Su nivel de estrés púede ser considerable. Se recomienda consultar un especialista para ajustar su rutina");
    }
}

function incorrectas() {
    if (incorrect > 0) {
        alert("Hay respuestas incorrectas, por favor reinicie el cuestionario.")
    }
    else{ role()
    }
}

preguntas();
console.log("Contador: ", contador);

incorrectas();
console.log("Respuestas incorrectas: ", incorrect);