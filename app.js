const niveles = [  // Se relaiza un array de todos los niveles del juego para el buscador.
    "Mundo 1-Castillo de Peach", "Mundo 1-1", "Mundo 1-2", "Mundo 1-3",
    "Mundo 1-Fortaleza", "Mundo 1-4", "Mundo 1-5", "Mundo 1-6", "Mundo 1-Castillo",
    "Mundo 2-1", "Mundo 2-2", "Mundo 2-3", "Mundo 2-Fortaleza",
    "Mundo 2-4", "Mundo 2-5", "Mundo 2-6", "Mundo 2-Castillo",
    "Mundo 3-1", "Mundo 3-2", "Mundo 3-3", "Mundo 3-Casa Fantasma",
    "Mundo 3-Fortaleza", "Mundo 3-4", "Mundo 3-5", "Mundo 3-Castillo",
    "Mundo 4-1", "Mundo 4-2", "Mundo 4-3", "Mundo 4-Fortaleza",
    "Mundo 4-4", "Mundo 4-Casa Fantasma", "Mundo 4-5", "Mundo 4-Castillo", "Mundo 4-Fortaleza aérea",
    "Mundo 5-1", "Mundo 5-2", "Mundo 5-3", "Mundo 5-Fortaleza",
    "Mundo 5-4", "Mundo 5-5", "Mundo 5-Casa Fantasma", "Mundo 5-Castillo",
    "Mundo 6-1", "Mundo 6-2", "Mundo 6-3", "Mundo 6-4", "Mundo 6-Fortaleza",
    "Mundo 6-5", "Mundo 6-6", "Mundo 6-Castillo", "Mundo 6-Fortaleza aérea",
    "Mundo 7-1", "Mundo 7-2", "Mundo 7-3", "Mundo 7-Fortaleza", "Mundo 7-Casa Fantasma",
    "Mundo 7-4", "Mundo 7-5", "Mundo 7-6", "Mundo 7-Castillo",
    "Mundo 8-1", "Mundo 8-2", "Mundo 8-3", "Mundo 8-Fortaleza",
    "Mundo 8-4", "Mundo 8-5", "Mundo 8-6", "Mundo 8-7", "Mundo 8-Fortaleza aérea", "Mundo 8-Castillo",
    "Mundo 9-1", "Mundo 9-2", "Mundo 9-3", "Mundo 9-4","Mundo 9-5", "Mundo 9-6", "Mundo 9-7", "Mundo 9-8"
]

const tips = [  //Se realiza un array con tips para luego mostrarlos usando el boton mostrar tip
    "Agarrate al tope del mástil al final de cada fase para conseguir una vida extra.",
    "Colecciona 100 monedas en un nivel para ganar una vida extra.",
    "Las monedas estrella (3 por nivel) desbloquean fases secretas en el Mundo 9.",
    "Con el traje Mini podés caminar sobre el agua, pero un solo golpe te elimina.",
    "En el minijuego de la Casa Roja, evitá las parejas de Bowser y Bowsy o el juego termina.",
    "El Salto Bomba Sincronizado entre dos jugadores elimina a todos los enemigos del suelo.",
    "Agitá el mando de Wii en el aire para activar el giro y ganar algo más de distancia en los saltos.",
    "El Mundo 9 solo se desbloquea tras derrotar al jefe final del Mundo 8.",
    "Con Yoshi podés tragarte enemigos y convertirlos en proyectiles.",
    "Las fases con meta roja abren un camino alternativo en el mapa del mundo."
]


function buscarNivel() {  // Esta funcion llama cada vez que el usuario escribe en el buscador.
    const textoBusqueda = document.getElementById("Buscador").value.toLowerCase()  // Se obtiene el texto que escribe el usuario y se lo pasa a minuscula.
    const contenedorResultados = document.getElementById("Resultado_busqueda")
 
    contenedorResultados.innerHTML = "";  // Se limpian los resultados anteriores antes de mostrar los nuevos.
 
    if (textoBusqueda === "") {  // Indica que el buscador no mostrara nada si este esta vacio.
        return;
    }
 
    const resultados = niveles.filter(function(nivel) {  // Se filtra el array de niveles para buscar los que coincidan con lo escrito por el usuario.
        return nivel.toLowerCase().includes(textoBusqueda);
    })
 
    
    if (resultados.length === 0) {  // Si no se encuentra nada, se muestra este mensaje.
        const mensajeVacio = document.createElement("p")
        mensajeVacio.textContent = "No se encontraron niveles con ese nombre."
        mensajeVacio.style.color = "red"
        contenedorResultados.appendChild(mensajeVacio)
        return;
    }
 
    const lista = document.createElement("ul")  // Se crea un elemento de lista por cada resultado existente en el array de niveles y se lo agrega al DOM.
    resultados.forEach(function(nivel) {
        const item = document.createElement("li")
        item.textContent = nivel
        lista.appendChild(item)
    })
    contenedorResultados.appendChild(lista)
}

function mostrarTipAleatorio() {  // Esta funcion muestra un tip aleatorio al usuario a travez del boton Mostrar tip.
    const indiceAleatorio = Math.floor(Math.random() * tips.length)  // Se elige un índice al azar entre 0 y el largo del array
    const tip = tips[indiceAleatorio]
 
    const contenedorTip = document.getElementById("Mostrar_tip")  // Se busca el elemento donde se mostrará el tip, cambia su texto y se lo muestra
    contenedorTip.textContent = "💡 " + tip;
    contenedorTip.style.display = "block";
}

function validarFormulario(evento) {  // Esta funcion valida y envia el formulario de reseña.
    evento.preventDefault();  // Con esto se evita que el formulario se envíe y se recargue la página.
 
    const nombre = document.getElementById("Campo_nombre").value.trim()  // Se obtiene los valores de los campos del formulario (Nombre, Correo, Contraseña).
    const correo = document.getElementById("Campo_correo").value.trim()
    const resena = document.getElementById("Campo_reseña").value.trim()
 
    const mensajeFormulario = document.getElementById("Mensaje_formulario");  // Se obtiene el elemento donde se mostrarán el mensaje de error o éxito.
    mensajeFormulario.textContent = "";  // Con esto se limpia el mensaje anterior.
    mensajeFormulario.style.display = "none";
 
    try {  // Con esto se busca que capturar un error en la validacion del formulario.
        if (nombre === "" || correo === "" || resena === "") {  // Se verifica que ningún campo esté vacío.
            throw new Error("Por favor completá todos los campos antes de enviar.");  // Se lanza un error si hay campos vacíos.
        }
 
        if (!correo.includes("@") || !correo.includes(".")) {
            throw new Error("El correo electrónico ingresado no es válido."); // Se verifica que el correo tenga el formato básico válido.
        }
        mensajeFormulario.textContent = "✅ ¡Gracias, " + nombre + "! Tu reseña fue enviada correctamente.";  // De estar todo bien, se muestra el mesnaje de confirmacion.
        mensajeFormulario.style.color = "green"
        mensajeFormulario.style.display = "block"
 
        document.getElementById("Campo_reseña").value = ""; // Se limpia la reseña del formulario después de realizar el envio de forma correcta.
 
    } catch (error) {
        mensajeFormulario.textContent = "❌ " + error.message;  // De ocurrir un error, este se captura y luego se muestra en la pantalla en lugar de que el programa se rompa.
        mensajeFormulario.style.color = "red"
        mensajeFormulario.style.display = "block"
    }
}

document.addEventListener("DOMContentLoaded", function() {  // Se ejecuta cuando el HTML ya fue cargado completamente.

    const buscador = document.getElementById("Buscador");  // Este evento (Perteneciente a la funcion buscarNivel) se activa cada vez que el usuario escribe algo, filtrndo la lista de niveles.
    if (buscador) {
        buscador.addEventListener("input", buscarNivel);
    }

    const botonTip = document.getElementById("Boton_tip");  // Este evento (Perteneciente a la funcion mostrarTipAleatorio) se activa cuando el usuario hace click en el boton "Mostrar tip", muestrandose un tip aleatorio.
    if (botonTip) {
        botonTip.addEventListener("click", mostrarTipAleatorio);
    }

    const formulario = document.getElementById("Formulario_reseña");  // Este evento (Perteneciente a la funcion validarFormulario) se activa cuando el usuario envía el formulario, validando los campos.
    if (formulario) {
        formulario.addEventListener("submit", validarFormulario);
    }

    const botonLimpiar = document.getElementById("Boton_limpiar");  // Este evento (Perteneciente al boton limpiar del formulario) borra toda informacion de los campos nombre, correo, y reseña.
    if (botonLimpiar) {
        botonLimpiar.addEventListener("click", function() {
            document.getElementById("Formulario_reseña").reset()  // Se limpian todos los campos del formulario.
        })
    }
})